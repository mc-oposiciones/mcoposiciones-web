FASE 0 — CONTEXTO, DECISIONES Y PREPARACIÓN MANUAL

0.1 Descripción del negocio y situación actual
Sitio web: mcoposiciones.com
Negocio: Preparadora individual llamada Mª Carmen. Prepara oposiciones de 
Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social (SS 
C1). Clases online en directo. Precio: 100€/mes o 475€ pago único.
Situación actual: Web de una sola página (SPA en HTML estático). Sin blog. Sin 
páginas indexadas independientes. 27 reseñas en Google Business. Canal de 
YouTube activo (@mcoposiciones). Redes: TikTok, Instagram, YouTube.

Objetivo: Convertir la web en un sitio multi-página con arquitectura SEO sólida, 
blog activo, páginas de curso independientes, schema markup completo y 
propuesta de valor diferenciadora centrada en preparar AGE y SS 
simultáneamente.

0.2 Stack tecnológico elegido y justificación
Framework: Astro (generador de sitios estáticos)
Justificación: genera HTML estático puro sin JavaScript en el cliente por defecto, lo 
que produce puntuaciones de 95-100 en PageSpeed Insights de forma nativa, sin 
necesidad de plugins de caché ni optimización manual. Ideal para SEO porque 
cada página es un archivo HTML completo y completamente indexable.

Estilos: Tailwind CSS
Justificación: utilidades CSS sin CSS no utilizado en producción, integración 
nativa con Astro.

Hosting: GitHub Pages
Justificación: gratuito, CDN global, SSL automático, despliegue automático via 
GitHub Actions cada vez que se hace push a la rama main.

Gestión de contenido: archivos Markdown nativos con Content Collections de 
Astro
Justificación: el blog se gestiona creando archivos .md en una carpeta. No 
requiere panel de administración. Para publicar un artículo nuevo se crea el 
archivo .md y se hace push a GitHub.

Formularios: Formspree
Justificación: servicio gratuito (hasta 50 envíos/mes) que recibe los datos del 
formulario estático y los reenvía por email. No requiere backend.

Reseñas de Google: Trustindex (widget externo embebido via script)
Justificación: importa automáticamente las 27 reseñas existentes en Google 
Business.

Seguridad: al ser código estático sin base de datos, no existe superficie de ataque. 
No hay wp-config.php, no hay inyecciones SQL, no hay login de administrador que 
proteger.

0.3 Tareas manuales previas que debes hacer TÚ antes de empezar
Estas tareas no las puede hacer la IA:

Tarea 1 — Verificar el dominio:
Entra en el panel donde tienes registrado mcoposiciones.com. Comprueba que no 
vence en menos de 12 meses. Si vence antes, renuévalo ahora. Anota los 
nameservers actuales y guárdalos.

Tarea 2 — Backup completo:
Descarga el archivo index.html actual de la web. Descarga los archivos 
tema1age.pdf y tema2ss.pdf de la carpeta /resources/ del servidor actual. Abre 
cada vídeo de YouTube de tu canal y copia los IDs de los tres vídeos que están 
incrustados en la web actual. Los IDs aparecen en la URL como 
youtube.com/watch?v=XXXXXXXXXXX. Guárdalos: vídeo 1 (supuesto práctico): -
sMHGWjsHiI, vídeo 2 (Delegado/Subdelegado): 22FfcbV_1X8, vídeo 3 (Bajas 
Régimen General): cSq1_bZa_Cs.

Tarea 3 — Crear cuenta en Formspree:
Entra en formspree.io, regístrate con tu email y crea un formulario nuevo. Te dará 
un endpoint con formato https://formspree.io/f/XXXXXXXX. Guarda ese código.

Tarea 4 — Crear cuenta en Trustindex:
Entra en trustindex.io, regístrate y conecta tu perfil de Google Business. El sistema 
importará las 27 reseñas. Copia el código del widget que genera (será un script 
HTML de unas 3-4 líneas).

Tarea 5 — Crear cuenta en GitHub:
Si no tienes cuenta, créala en github.com. El repositorio se llamará 
mcoposiciones-web (puede ser privado o público, GitHub Pages funciona con 
ambos en planes gratuitos si el repo es público).

Tarea 6 — Instalar herramientas locales:
Instala Node.js LTS desde nodejs.org (versión 18 o superior). Instala Git desde git-scm.com. Instala el editor de código Visual Studio Code desde 
code.visualstudio.com. En VS Code, instala la extensión oficial de Astro buscando 
"Astro" en el panel de extensiones.

0.4 Información que la IA necesitará en cada prompt
Guarda esta información para pegarla junto a cada prompt cuando trabajes con la 
IA:

Dominio: mcoposiciones.com
Nombre del negocio: MC Oposiciones
Preparadora: Mª Carmen
Email: infomcoposiciones@gmail.com
Teléfono: 642 170 664 (formato tel: +34642170664)
Endpoint Formspree: [pegar el código que obtuviste en la tarea 3]
YouTube vídeo 1: -sMHGWjsHiI (supuesto práctico)
YouTube vídeo 2: 22FfcbV_1X8 (Delegado del Gobierno)
YouTube vídeo 3: cSq1_bZa_Cs (Bajas Régimen General)
Redes sociales: TikTok @mcoposiciones, Instagram @mcoposiciones, YouTube 
@mcoposiciones
Precios: Mensual 100€/mes, Completo 475€, Parte General 250€, Parte Específica 
300€

### PALETA DE COLORES Y DISEÑO (ESTRICTO)
Aplica esta paleta de colores en la configuración de Tailwind (`tailwind.config.mjs`) extendiendo el tema, y úsala como variables en `global.css`. El estilo general debe transmitir calma, concentración y modernidad.

**Colores de la marca (Hex):**
- **primary:** `#5A4E4E` (Gris cálido oscurecido - Usar para encabezados H1/H2/H3, footer y elementos de marca).
- **secondary:** `#2A9D8F` (Verde azulado - Usar para botones principales, enlaces y elementos interactivos).
- **accent:** `#FEAC7C` (Melocotón - Usar para botones secundarios, hover states, badges y subrayados).
- **accent-light:** `#FED7BF` (Melocotón claro - Usar para fondos de etiquetas o destacables suaves).
- **bg-light:** `#F8F3ED` (Crema - Fondo principal de toda la web).
- **bg-dark:** `#D3E3D6` (Menta suave - Fondos de secciones alternas para romper la monotonía).
- **text-main:** `#2D2828` (Carbón oscuro - USO OBLIGATORIO para párrafos y texto base para garantizar contraste WCAG AAA).
- **text-muted:** `#555555` (Gris medio - Solo para textos secundarios o fechas en el blog).

**Reglas de UI:**
- Fondo principal del body: `bg-light`.
- Color de texto del body: `text-main`.
- Botones CTA: Fondo `secondary`, texto blanco. En `:hover` pasa a fondo `accent`, elevándose ligeramente (shadow y transform).
- Bordes redondeados por defecto: `rounded-xl` (12px).
- Sombra por defecto en tarjetas: `shadow-md` con transiciones suaves en hover (`hover:shadow-lg hover:-translate-y-1`).