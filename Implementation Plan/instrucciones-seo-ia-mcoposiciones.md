# Instrucciones SEO técnicas — mcoposiciones.com
## Prompt de ejecución para IA con acceso al codebase

> Eres una IA con acceso completo al código fuente del proyecto Astro de `mcoposiciones.com`.
> El sitio está construido con **Astro v6** y desplegado actualmente en `staging.mcoposiciones.com`.
> El dominio de producción final es `https://mcoposiciones.com`.
> Ejecuta todas las tareas siguientes en orden. No omitas ninguna. Cuando una tarea requiera
> inspeccionar la estructura real del proyecto antes de actuar, hazlo antes de escribir código.

---

## TAREA 1 — Desbloquear la indexación

### 1.1 — Meta robots

Localiza el componente de head global (probablemente `src/layouts/BaseLayout.astro` o equivalente). Encuentra la etiqueta:

```html
<meta name="robots" content="noindex, nofollow">
```

Sustitúyela por:

```html
<meta name="robots" content="index, follow">
```

Si el valor se gestiona mediante una variable, una prop, o un archivo de configuración de entorno, asegúrate de que el valor por defecto sea `index, follow` y que staging pueda sobreescribirlo con `noindex, nofollow` mediante una variable de entorno (`ROBOTS_META` o similar), de forma que producción indexe y staging no indexe sin tocar el código.

Verifica que el cambio afecte a **todas** las páginas generadas: home, páginas de oposición, páginas de preparadora, blog, artículos individuales, precios, contacto y clases muestra.

### 1.2 — robots.txt

Abre o crea `public/robots.txt`. Asegúrate de que su contenido sea exactamente:

```
User-agent: *
Allow: /
Disallow: /politica-privacidad/
Disallow: /aviso-legal/
Disallow: /politica-cookies/

Sitemap: https://mcoposiciones.com/sitemap.xml
```

### 1.3 — Sitemap

Instala el plugin oficial de Astro si no está instalado:

```bash
npm install @astrojs/sitemap
```

Configura `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mcoposiciones.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/politica-privacidad') &&
        !page.includes('/aviso-legal') &&
        !page.includes('/politica-cookies'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
```

Asigna prioridad `1.0` al home, `0.9` a las páginas de oposición y preparadora, `0.8` a las de blog y precios, y `0.5` a contacto. Si el plugin de sitemap de Astro no soporta prioridad por página de forma nativa en la versión instalada, genera manualmente un `public/sitemap.xml` estático con esas prioridades y las URLs conocidas del sitio.

---

## TAREA 2 — Canonical URLs

Revisa cada página del proyecto. La URL canónica debe apuntar siempre a `https://mcoposiciones.com/` (sin `staging.`). Si los canonicals se generan dinámicamente usando `Astro.url` u `Astro.site`, asegúrate de que `site` en `astro.config.mjs` esté configurado como `https://mcoposiciones.com` y que en ningún caso el canonical incluya `staging.` en producción.

Comprueba que no haya páginas con canonical apuntando a otra página distinta de sí misma (excepto que exista una razón deliberada de consolidación).

---

## TAREA 3 — Datos estructurados (Schema.org JSON-LD)

Crea un componente `src/components/seo/SchemaOrg.astro` que reciba una prop `schema` de tipo objeto y lo serialice como `<script type="application/ld+json">`. Todos los schemas de las tareas siguientes deben usarlo.

```astro
---
const { schema } = Astro.props;
---
<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

### 3.1 — Schema Organization (home)

Inserta en el `<head>` del home (`src/pages/index.astro`):

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "MC Oposiciones",
  "url": "https://mcoposiciones.com",
  "logo": "https://mcoposiciones.com/logo-icon.png",
  "description": "Preparación online para oposiciones de Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social C1. Clases en directo, grupos reducidos y seguimiento cercano.",
  "telephone": "+34642170664",
  "email": "infomcoposiciones@gmail.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-642-170-664",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://www.instagram.com/mcoposiciones",
    "https://www.tiktok.com/@mcoposiciones",
    "https://www.youtube.com/@mcoposiciones"
  ]
}
```

### 3.2 — Schema Person (página /preparadora-oposiciones/)

Inserta en el `<head>` de `src/pages/preparadora-oposiciones.astro`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mª Carmen",
  "jobTitle": "Preparadora de Oposiciones",
  "description": "Preparadora especializada en oposiciones de Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social C1. Clases online en directo con grupos reducidos.",
  "url": "https://mcoposiciones.com/preparadora-oposiciones/",
  "image": "https://mcoposiciones.com/_astro/maria-carmen.webp",
  "worksFor": {
    "@type": "EducationalOrganization",
    "name": "MC Oposiciones",
    "url": "https://mcoposiciones.com"
  },
  "sameAs": [
    "https://www.instagram.com/mcoposiciones",
    "https://www.tiktok.com/@mcoposiciones",
    "https://www.youtube.com/@mcoposiciones"
  ]
}
```

### 3.3 — Schema Course (páginas de oposición y pack)

Crea un componente `src/components/seo/CourseSchema.astro` que acepte props `name`, `description`, `url`, `teaches`, `price` (opcional). Úsalo en las siguientes páginas con estos datos:

**`/oposiciones-administrativo-estado/`:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Preparación Oposiciones Administrativo del Estado AGE C1",
  "description": "Preparación online en directo para las oposiciones de Administrativo del Estado (AGE C1) 2026. Clases en directo, 2.512 plazas convocadas, temario actualizado con ofimática incluida.",
  "provider": { "@type": "Organization", "name": "MC Oposiciones", "url": "https://mcoposiciones.com" },
  "instructor": { "@type": "Person", "name": "Mª Carmen", "url": "https://mcoposiciones.com/preparadora-oposiciones/" },
  "educationalLevel": "C1",
  "teaches": "Oposiciones Administrativo del Estado AGE C1",
  "courseMode": "online",
  "inLanguage": "es",
  "url": "https://mcoposiciones.com/oposiciones-administrativo-estado/"
}
```

**`/oposiciones-seguridad-social/`:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Preparación Oposiciones Administrativo Seguridad Social C1",
  "description": "Preparación online en directo para las oposiciones de Administrativo de la Seguridad Social C1 2026. Temario específico, supuesto práctico y planificación hasta el examen.",
  "provider": { "@type": "Organization", "name": "MC Oposiciones", "url": "https://mcoposiciones.com" },
  "instructor": { "@type": "Person", "name": "Mª Carmen", "url": "https://mcoposiciones.com/preparadora-oposiciones/" },
  "educationalLevel": "C1",
  "teaches": "Oposiciones Administrativo Seguridad Social C1",
  "courseMode": "online",
  "inLanguage": "es",
  "url": "https://mcoposiciones.com/oposiciones-seguridad-social/"
}
```

**`/preparar-age-y-seguridad-social/`:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Pack Preparación Conjunta AGE y Seguridad Social",
  "description": "Preparación conjunta online para oposiciones de Administrativo del Estado y Seguridad Social. Aprovecha el temario común y amplía opciones sin duplicar el estudio.",
  "provider": { "@type": "Organization", "name": "MC Oposiciones", "url": "https://mcoposiciones.com" },
  "instructor": { "@type": "Person", "name": "Mª Carmen", "url": "https://mcoposiciones.com/preparadora-oposiciones/" },
  "teaches": "Oposiciones AGE C1 y Seguridad Social C1",
  "courseMode": "online",
  "inLanguage": "es",
  "url": "https://mcoposiciones.com/preparar-age-y-seguridad-social/"
}
```

### 3.4 — Schema FAQPage

Crea un componente `src/components/seo/FAQSchema.astro` que reciba un array de objetos `{ question, answer }` y genere el JSON-LD. Aplícalo en las siguientes páginas extrayendo las preguntas del componente FAQ ya existente en cada una:

- `src/pages/index.astro` — usa las 4 FAQ del acordeón del home
- `src/pages/oposiciones-administrativo-estado.astro` — usa las FAQ de esa página
- `src/pages/oposiciones-seguridad-social.astro` — usa las FAQ de esa página
- `src/pages/preparadora-age.astro` — usa las FAQ de esa página

El componente debe generar:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[pregunta]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[respuesta completa en texto plano, sin HTML]"
      }
    }
  ]
}
```

### 3.5 — Schema BreadcrumbList

En todas las páginas que tienen migas de pan (páginas de oposición, preparadora, blog, artículos), añade el schema de breadcrumbs sincronizado con las migas visibles en el HTML:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://mcoposiciones.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[nombre de la página]",
      "item": "https://mcoposiciones.com/[ruta]/"
    }
  ]
}
```

Crea un componente reutilizable `src/components/seo/BreadcrumbSchema.astro` que acepte un array de `{ name, url }` y genere el JSON-LD. Úsalo en todas las páginas con breadcrumbs.

### 3.6 — Schema Article (artículos del blog)

En el layout de artículos de blog (`src/layouts/BlogPost.astro` o equivalente), añade dinámicamente:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[título del artículo]",
  "description": "[meta description del artículo]",
  "datePublished": "[pubDate en formato ISO 8601]",
  "dateModified": "[updatedDate o pubDate]",
  "author": {
    "@type": "Person",
    "name": "Mª Carmen",
    "url": "https://mcoposiciones.com/preparadora-oposiciones/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MC Oposiciones",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mcoposiciones.com/logo-icon.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[URL canónica del artículo]"
  }
}
```

Rellena los campos dinámicamente desde el frontmatter de cada artículo.

---

## TAREA 4 — On-page: H1, meta titles y meta descriptions

### 4.1 — H1 del home

El H1 actual es:
```
Prepara tu oposición C1 con una guía clara
```

Sustitúyelo por:
```
Preparadora online de oposiciones AGE y Seguridad Social C1
```

El subtítulo/párrafo hero debe quedar:
```
Prepara las oposiciones de Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social con Mª Carmen, preparadora especializada. Clases en directo, grupos reducidos y seguimiento real.
```

### 4.2 — Meta descriptions a corregir

Actualiza los valores de meta description en las páginas siguientes (respeta un máximo de 160 caracteres):

| Página | Meta description correcta |
|---|---|
| `/preparadora-age/` | `Prepara el AGE C1 con Mª Carmen, preparadora online especializada. Clases en directo, grupos reducidos, ofimática incluida y seguimiento real. Consulta sin compromiso.` |
| `/preparadora-seguridad-social/` | `Prepara las oposiciones de Administrativo de la Seguridad Social con Mª Carmen. Clases en directo, temario actualizado 2026, supuesto práctico y grupos reducidos.` |
| `/preparar-age-y-seguridad-social/` | `Prepara AGE y Seguridad Social a la vez aprovechando el temario común. Pack conjunto con Mª Carmen: clases en directo, grupos reducidos y planificación unificada.` |
| `/cursos-precios/` | `Consulta los precios y modalidades de preparación para AGE C1 y Seguridad Social con MC Oposiciones. Sin compromiso de permanencia. Grupos 2026 abiertos.` |
| `/clases-muestra/` | `Accede gratis a clases de muestra de las oposiciones AGE y Seguridad Social con Mª Carmen. Comprueba el método antes de matricularte.` |

En todas las páginas donde aparezca `"Maria Carmen"` (sin acento ni abreviatura), reemplaza por `"Mª Carmen"`. Aplica también a meta descriptions, og:description y twitter:description.

### 4.3 — Jerarquía de encabezados

Revisa que en **todas** las páginas haya exactamente **un H1** y que los H2/H3 estén anidados correctamente (ningún H3 aparece sin un H2 padre). Corrige cualquier salto en la jerarquía (H1 → H3 sin H2 intermedio).

---

## TAREA 5 — Atributos alt en imágenes

Recorre todos los archivos del proyecto y localiza etiquetas `<img>` y componentes `<Image>` de Astro. Aplica las siguientes reglas sin excepción:

- **Imágenes de Mª Carmen:** `alt="Mª Carmen, preparadora de oposiciones AGE y Seguridad Social"`
- **Logo en header:** `alt="MC Oposiciones — Preparadora AGE y Seguridad Social Online"`
- **Logo en footer:** `alt="MC Oposiciones"`
- **Imágenes decorativas** (iconos, fondos, separadores sin contenido informativo): `alt=""`
- **Imágenes de blog:** el alt debe coincidir con el tema del artículo e incluir la keyword principal del mismo

Ninguna imagen debe tener el atributo `alt` ausente (no es lo mismo que `alt=""`; ausente es un error de accesibilidad y SEO).

---

## TAREA 6 — Enlazado interno del blog

Abre cada artículo del blog en `src/content/blog/` (o donde estén los archivos de contenido). En el cuerpo de cada artículo:

1. Identifica la primera mención de cada uno de estos términos: "AGE", "Administrativo del Estado", "Seguridad Social", "Administrativo de la Seguridad Social", "preparadora", "clases en directo", "grupos reducidos", "pack conjunto", "temario".

2. Convierte **la primera aparición** de cada término en un enlace interno según esta tabla:

| Término | Enlace destino |
|---|---|
| AGE / Administrativo del Estado | `/oposiciones-administrativo-estado/` |
| Seguridad Social / Administrativo SS | `/oposiciones-seguridad-social/` |
| pack conjunto / AGE y Seguridad Social a la vez | `/preparar-age-y-seguridad-social/` |
| preparadora | `/preparadora-oposiciones/` |
| clases en directo / método / cómo preparar | `/preparadora-age/` o `/preparadora-seguridad-social/` según contexto |
| precios / modalidades | `/cursos-precios/` |

3. Añade al final de cada artículo, antes del cierre del contenido, el siguiente bloque CTA adaptado al tema del artículo:

```md
---
**¿Quieres preparar esta oposición con seguimiento real?**
Consulta las modalidades de preparación con Mª Carmen — grupos reducidos, clases en directo y temario actualizado 2026. [Ver preparación →](/cursos-precios/)
```

Sustituye `/cursos-precios/` por la página de oposición específica cuando el artículo trate exclusivamente de AGE o exclusivamente de Seguridad Social.

---

## TAREA 7 — Correcciones de texto con errores

### 7.1 — Tildes en /preparadora-age/

En el archivo fuente de la página `/preparadora-age/`, corrige todos los textos que carecen de tildes y signos de puntuación españoles. Ejemplos detectados:

| Texto con error | Texto correcto |
|---|---|
| `Para quien es esta preparacion?` | `¿Para quién es esta preparación?` |
| `Un metodo centrado en aprobar AGE` | `Un método centrado en aprobar AGE` |
| `Que incluye la preparacion AGE con Maria Carmen?` | `¿Qué incluye la preparación AGE con Mª Carmen?` |
| `La preparacion sirve si empiezo desde cero?` | `¿La preparación sirve si empiezo desde cero?` |
| `Tambien puedes doblar opciones` | `También puedes doblar opciones` |
| `Preparadora AGE o academia?` | `¿Preparadora AGE o academia?` |
| `Quieres preparar AGE con seguimiento cercano?` | `¿Quieres preparar AGE con seguimiento cercano?` |

Realiza una revisión completa del archivo buscando cualquier otra palabra con acento faltante. Aplica la misma corrección en `/preparadora-seguridad-social/` si presenta el mismo problema.

---

## TAREA 8 — Performance y Core Web Vitals

### 8.1 — Preconnect y dns-prefetch

Añade en el `<head>` global las siguientes etiquetas de precarga para los dominios de terceros que ya usa el sitio:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://www.googletagmanager.com">
<link rel="dns-prefetch" href="https://www.google-analytics.com">
<link rel="dns-prefetch" href="https://cdn.trustindex.io">
```

### 8.2 — Lazy loading en imágenes

Asegúrate de que todas las imágenes fuera del viewport inicial (todo lo que no sea el hero) tengan `loading="lazy"`. La imagen de Mª Carmen en el hero debe tener `loading="eager"` y `fetchpriority="high"`.

Si usas el componente `<Image>` de Astro, verifica que no esté sobreescribiendo estos atributos.

### 8.3 — Preload de imagen LCP

La imagen de mayor impacto visual en el primer viewport (hero) es la foto de Mª Carmen. Añade en el `<head>` del home:

```html
<link rel="preload" as="image" href="/ruta-real-de-la-imagen-maria-carmen.webp">
```

Sustituye la ruta por la ruta real del archivo `.webp` de Mª Carmen tal como está en el build de Astro.

### 8.4 — Tamaño y formato de imágenes

Verifica que todas las imágenes del proyecto se sirvan en formato `.webp`. Si alguna imagen está en `.jpg`, `.png` o `.jpeg` sin conversión, usa el componente `<Image>` de Astro para convertirlas automáticamente a webp en el build. Asegúrate de que el componente `<Image>` especifique siempre las props `width` y `height` para evitar Cumulative Layout Shift (CLS).

---

## TAREA 9 — Open Graph y metadatos sociales

Comprueba que en todas las páginas existan y sean correctas las siguientes etiquetas:

```html
<meta property="og:type" content="website"> <!-- o "article" en posts de blog -->
<meta property="og:title" content="[título de la página]">
<meta property="og:description" content="[meta description de la página]">
<meta property="og:url" content="[URL canónica de la página]">
<meta property="og:image" content="https://mcoposiciones.com/og-default.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="MC Oposiciones">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[título de la página]">
<meta name="twitter:description" content="[meta description de la página]">
<meta name="twitter:image" content="https://mcoposiciones.com/og-default.jpg">
```

En los artículos del blog, `og:type` debe ser `"article"` y deben añadirse:

```html
<meta property="article:published_time" content="[pubDate ISO 8601]">
<meta property="article:author" content="https://mcoposiciones.com/preparadora-oposiciones/">
```

---

## TAREA 10 — Frontmatter del blog: keywords y categorías

Revisa todos los archivos de contenido del blog. El frontmatter de cada artículo debe incluir como mínimo los siguientes campos:

```yaml
---
title: "[título exacto del artículo]"
description: "[meta description, máximo 160 caracteres]"
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD  # igual a pubDate si no se ha actualizado
categoria: "[una de: oposiciones-age | oposiciones-seguridad-social | preparacion-y-estudio | convocatorias-2026]"
keywords: ["keyword principal", "keyword secundaria 1", "keyword secundaria 2"]
author: "Mª Carmen"
image:
  src: "/ruta-imagen-destacada.webp"
  alt: "[descripción de la imagen con keyword]"
---
```

Si algún campo falta en algún artículo, añádelo con el valor correcto inferido del contenido del artículo. Las `keywords` deben incluir variantes semánticas de la keyword principal del artículo.

---

## TAREA 11 — Hreflang (preparatorio)

Aunque el sitio es solo en español, añade la etiqueta hreflang por buena práctica técnica para evitar problemas si en el futuro se añaden idiomas:

```html
<link rel="alternate" hreflang="es" href="[URL canónica de la página]">
<link rel="alternate" hreflang="x-default" href="[URL canónica de la página]">
```

Añade estas etiquetas en el `<head>` global usando la URL canónica de cada página de forma dinámica.

---

## VERIFICACIÓN FINAL

Tras ejecutar todas las tareas, comprueba lo siguiente sin excepción:

- Ninguna página contiene `noindex` en producción
- `robots.txt` en `/robots.txt` es accesible y tiene `Allow: /`
- `/sitemap.xml` es accesible y contiene todas las URLs del sitio excepto las legales
- Cada página tiene exactamente un H1
- Ningún `<img>` o `<Image>` carece del atributo `alt`
- Todas las páginas tienen `og:image`, `og:title` y `og:description`
- Los schemas JSON-LD de todas las páginas son válidos (sin errores de sintaxis JSON)
- Los artículos del blog tienen Schema `Article` con `datePublished`
- Las páginas de oposición tienen Schema `Course` y `FAQPage`
- El home tiene Schema `Organization` y `FAQPage`
- La página `/preparadora-oposiciones/` tiene Schema `Person`
- Todas las páginas con breadcrumbs tienen Schema `BreadcrumbList`
- Ninguna meta description supera 160 caracteres
- El H1 del home incluye las palabras "preparadora", "AGE" y "Seguridad Social"
- Las imágenes del hero tienen `fetchpriority="high"` y `loading="eager"`
- El resto de imágenes tienen `loading="lazy"`
- Todos los artículos del blog enlazan a al menos una página de producto
