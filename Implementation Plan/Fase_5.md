FASE 5 — SEO TÉCNICO COMPLETO

Prompt 5-A — Sitemap, robots.txt y redirecciones

Aplica la configuración técnica SEO para mcoposiciones.com en Astro:

Verificar que @astrojs/sitemap está configurado en astro.config.mjs con site: 
'https://mcoposiciones.com'. La integración genera automáticamente 
/sitemap.xml incluyendo todas las páginas y posts del blog.

Personalizar el sitemap en astro.config.mjs para:

Excluir estas páginas del sitemap: /contacto/, /politica-privacidad/, /aviso-legal/, 
/politica-cookies/
Establecer prioridad 1.0 para la home, 0.9 para las páginas de curso, 0.8 para el 
blog index y 0.7 para los posts del blog

Crear el archivo public/robots.txt con este contenido exacto:

User-agent: *
Disallow: /contacto/
Disallow: /politica-privacidad/
Disallow: /aviso-legal/
Allow: /
Sitemap: https://mcoposiciones.com/sitemap.xml

Verificar que las redirecciones 301 están en astro.config.mjs bajo redirects:

"/#cursos": "/cursos-precios/",
"/#sobre-mi": "/preparadora-oposiciones/",
"/#contacto": "/contacto/"

Crear src/pages/404.astro con:

BaseLayout con noindex: true
H1: "Página no encontrada"
Mensaje amable explicando que la página no existe
Lista de accesos rápidos a las páginas principales del sitio
Formulario de búsqueda básico (por ahora un enlace a /blog/ con texto "Ver todos 
los artículos")

Prompt 5-B — Optimización de imágenes y Core Web Vitals

Implementa las optimizaciones de rendimiento para mcoposiciones.com en Astro 
para conseguir puntuaciones de PageSpeed Insights superiores a 95 en escritorio 
y 85 en móvil.

Instalar @astrojs/image (o verificar si está incluido nativamente en Astro 4+). 
Mostrar cómo se usa el componente Image de Astro para optimización automática 
de imágenes.

Definir las reglas de uso de imágenes en el proyecto:

Imagen del Hero (foto de Mª Carmen) y logo: loading="eager", fetchpriority="high"
Todas las demás imágenes: loading="lazy"
Todas las imágenes deben tener atributos width y height definidos explícitamente 
para evitar CLS
Formato de salida: WebP automático cuando el navegador lo soporta

Crear las siguientes imágenes placeholder en /public/images/ documentando sus 
dimensiones exactas requeridas: maria-carmen.jpg (400x400px), og-default.jpg 
(1200x630px), logo.png (300x80px)

Implementar el componente YouTubeEmbed.astro con la técnica de "lite-youtube" 
para carga diferida real:

Mostrar una imagen thumbnail de YouTube 
(https://img.youtube.com/vi/{videoId}/hqdefault.jpg) con loading="lazy"
Superponer un botón play SVG
Solo cargar el iframe cuando el usuario hace clic, usando JavaScript
El iframe resultante: loading="lazy", allowfullscreen, title con la prop del 
componente

Configurar en el BaseLayout las siguientes optimizaciones del head:

Preconnect a: https://fonts.googleapis.com, https://www.google-analytics.com
DNS-prefetch a: https://img.youtube.com (para thumbnails de YouTube)
Preload del CSS crítico si aplica

En tailwind.config.mjs, verificar que la purga de CSS está activa para que el CSS de 
producción no supere los 10-15KB.

Prompt 5-C — Open Graph, canonical tags y validación

Verifica y completa la implementación técnica de SEO on-page en 
mcoposiciones.com:

Crear la imagen Open Graph por defecto en /public/og-default.jpg:
No puedo crear la imagen, pero dame las especificaciones exactas: 1200x630px, 
fondo azul oscuro (#1E3A8A), texto "MC Oposiciones" en blanco con tipografía 
grande, subtexto "Preparadora AGE y Seguridad Social" en blanco más pequeño. 
Esta imagen se usará en páginas que no tengan imagen específica.

Verificar que el BaseLayout genera correctamente:
El tag canonical con la prop canonicalUrl. Formato: <link rel="canonical" 
href="https://mcoposiciones.com/pagina/" />
Los tags de Open Graph incluyendo og:image:width="1200" y 
og:image:height="630"
El hreflang: <link rel="alternate" hreflang="es" href="https://mcoposiciones.com" 
/>
El meta robots: si noindex es true, generar <meta name="robots" 
content="noindex, nofollow" />, si es false no generar nada (Google indexa por 
defecto)

Crear un componente SchemaOrg.astro reutilizable que recibe el JSON del 
schema y lo inyecta correctamente:

<script type="application/ld+json" set:html={JSON.stringify(schema)} />

Este componente se usará en el BaseLayout y en el FAQAccordion.

4. Listar todas las URLs del sitio con el meta title exacto que debe tener cada una, 
para hacer una verificación manual final:

- / → "Preparadora de Oposiciones AGE y Seguridad Social Online | MC 
Oposiciones"
- /oposiciones-administrativo-estado/ → "Preparadora Oposiciones Administrativo 
del Estado AGE C1 2026 | MC Oposiciones"
- /oposiciones-seguridad-social/ → "Preparadora Oposiciones Administrativo 
Seguridad Social C1 2026 | MC Oposiciones"
- /preparar-age-y-seguridad-social/ → "Preparar AGE y Seguridad Social a la vez —
Doble Oportunidad | MC Oposiciones"
- /preparadora-oposiciones/ → "Mª Carmen — Preparadora de Oposiciones AGE y 
Seguridad Social | MC Oposiciones"
- /cursos-precios/ → "Cursos y Precios — Preparación Oposiciones AGE y 
Seguridad Social | MC Oposiciones"
- /clases-muestra/ → "Clases de Muestra Gratuitas — Oposiciones AGE y 
Seguridad Social | MC Oposiciones"
- /blog/ → "Blog sobre Oposiciones AGE y Seguridad Social | MC Oposiciones"
---
---