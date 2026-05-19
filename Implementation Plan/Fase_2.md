FASE 2 — LAYOUT BASE Y COMPONENTES GLOBALES

Prompt 2-A — BaseLayout con SEO completo

Crea el archivo src/layouts/BaseLayout.astro. Este layout es el envoltorio de 
TODAS las páginas del sitio mcoposiciones.com.
Props que debe aceptar:

title: string (meta title, 50-60 chars)
description: string (meta description, 140-160 chars)
canonicalUrl: string (URL canónica completa incluyendo https://)
ogImage: string (URL absoluta de la imagen Open Graph, por defecto '/og-default.jpg')
ogType: string (por defecto 'website', puede ser 'article' para posts del blog)
schemaJson: string (JSON stringificado del schema markup específico de la 
página, se inyecta en un script type="application/ld+json")
noindex: boolean (por defecto false, para páginas legales y de contacto)

En el head debe incluir exactamente:

charset UTF-8 y viewport
Meta title usando la prop title
Meta description usando la prop description
Canonical link usando la prop canonicalUrl
Hreflang: <link rel="alternate" hreflang="es" href="https://mcoposiciones.com" />
Open Graph completo: og:title, og:description, og:url, og:image, og:image:width 
(1200), og:image:height (630), og:type, og:site_name ("MC Oposiciones"), 
og:locale ("es_ES")
Twitter Card: twitter:card ("summary_large_image"), twitter:title, 
twitter:description, twitter:image
Si noindex es true: <meta name="robots" content="noindex, nofollow" />
Preconnect a Google Fonts si se usan (o preload de fuentes locales si se alojan 
localmente)
Preload del CSS global
El bloque de schema JSON-LD inyectado dinámicamente desde la prop 
schemaJson, solo si schemaJson no está vacío
El código de Google Analytics 4 con el tracking ID UA a rellenar (dejar un 
comentario TODO: sustituir GA_TRACKING_ID)
Script del banner de cookies (dejar placeholder)

El body debe incluir:

Componente <Navbar /> importado de src/components/Navbar.astro
Slot principal para el contenido de cada página
Componente <Footer /> importado de src/components/Footer.astro
Import del global.css

El script de GA4 debe estar condicionado: solo cargarse si el usuario ha aceptado 
las cookies (dejar la lógica preparada con un comentario explicativo de cómo 
conectarlo con el banner de cookies en la Fase 9).

Prompt 2-B — Navbar con mega-menú

Crea el archivo src/components/Navbar.astro para el sitio mcoposiciones.com.
Requisitos de diseño:

Fondo blanco con sombra sutil al hacer scroll (efecto sticky)
Logo a la izquierda: texto "MC Oposiciones" con el punto final en color acento, o 
imagen si existe /public/logo.png
Menú de navegación a la derecha en escritorio
Menú hamburguesa en móvil (funcional con JavaScript puro, sin librerías externas)

Estructura exacta del menú (en este orden):

Inicio → enlace a /
Cursos → dropdown (mega-menú) con estas opciones:

Administrativo AGE C1 → /oposiciones-administrativo-estado/
Seguridad Social C1 → /oposiciones-seguridad-social/
⭐ Pack AGE + SS (Exclusivo) → /preparar-age-y-seguridad-social/ (destacado con 
badge "EXCLUSIVO" en color acento)
Ver todos los precios → /cursos-precios/

Clases Gratuitas → /clases-muestra/
Blog → /blog/
Sobre Mí → /preparadora-oposiciones/
Contacto → /contacto/ (debe ser un botón visualmente diferente al resto, no un 
enlace plano)

Comportamiento:

El elemento activo del menú debe tener un estilo visual distinto (subrayado o color 
diferente) basado en la URL actual usando Astro.url.pathname
El dropdown de Cursos se abre al hacer hover en escritorio y al hacer clic en móvil
El menú hamburguesa en móvil debe cerrar cuando se pulsa un enlace

Accesibilidad:

Añadir aria-label en el botón hamburguesa
Añadir aria-expanded en el dropdown
Los enlaces deben ser navegables con teclado (Tab)

Prompt 2-C — Footer completo

Crea el archivo src/components/Footer.astro para mcoposiciones.com.
Estructura de cuatro columnas en escritorio, una columna en móvil:

Columna 1 — Marca:
Logo o texto "MC Oposiciones"
Descripción corta: "Preparadora especializada en oposiciones de Administrativo 
del Estado (AGE C1) y Seguridad Social (C1). Clases online en directo."
Iconos de redes sociales con sus enlaces: TikTok (@mcoposiciones), Instagram 
(@mcoposiciones), YouTube (@mcoposiciones). Los iconos deben ser SVG inline 
para no depender de iconos externos.

Columna 2 — Cursos:
Título: "Cursos"
Links: Administrativo AGE C1, Administrativo SS C1, Pack AGE + SS, Precios y 
modalidades

Columna 3 — Información:
Título: "Información"
Links: Sobre Mª Carmen, Blog, Clases de muestra, Contacto

Columna 4 — Legal y contacto:
Email: infomcoposiciones@gmail.com con enlace mailto:
Teléfono: 642 170 664 con enlace tel:+34642170664
Links: Política de Privacidad, Aviso Legal, Política de Cookies

Última fila completa:
Copyright: "© 2026 MC Oposiciones — Todos los derechos reservados"
Frase de diferenciación: "La única preparadora que te prepara para AGE y 
Seguridad Social a la vez"

Usar Tailwind CSS para todos los estilos. Fondo oscuro (gray-900 o similar) con 
texto claro.

Prompt 2-D — Componentes reutilizables

Crea los siguientes componentes Astro reutilizables para mcoposiciones.com. 
Cada uno en su propio archivo en src/components/:

CourseCard.astro
Props: title, description, price, priceType (string como "€/mes" o "pago único"), 
badge (string opcional como "Más popular"), href, features (array de strings)
Diseño: card con borde, título, descripción breve, lista de features con checkmark, 
precio destacado y botón CTA.

TestimonialWidget.astro
Componente que renderiza el widget de Trustindex. Debe aceptar como prop el 
código del widget (scriptCode: string) y renderizarlo con set:html o insertando el 
script directamente. Añadir el atributo loading="lazy" donde sea posible. Dejar un 
comentario TODO indicando dónde pegar el código de Trustindex que el usuario 
obtendrá de trustindex.io.

FAQAccordion.astro
Props: items (array de objetos con question: string y answer: string)
Comportamiento: accordion funcional con JavaScript puro. Solo una respuesta 
abierta a la vez. Animación de apertura/cierre suave.
Schema: el componente debe generar automáticamente el JSON-LD de tipo 
FAQPage a partir del array de items y colocarlo en un script 
type="application/ld+json" dentro del componente.

Breadcrumbs.astro
Props: items (array de objetos con label: string y href: string)
El último elemento del array es la página actual (sin href o href vacío)
Genera la navegación visual de migas de pan y su schema BreadcrumbList en 
JSON-LD.

YouTubeEmbed.astro
Props: videoId: string, title: string, description: string (para accesibilidad)
Implementar lazy loading real: mostrar una miniatura del vídeo (thumbnail de 
YouTube) con un botón play superpuesto. Solo cargar el iframe cuando el usuario 
hace clic en el play. Esto evita que los iframes de YouTube bloqueen la carga inicial 
de la página.
El iframe resultante debe tener: loading="lazy", title con la prop title, allow con los 
permisos estándar de YouTube.

CTABanner.astro
Props: title, subtitle, ctaText, ctaHref, variant ('primary' o 'secondary')
Banner de llamada a la acción para colocar al final de páginas y artículos.