Actúa como un Consultor SEO Senior experto en el sector de las oposiciones
y el empleo público en España. Tienes acceso completo a este repositorio de
código. Tu misión es realizar una auditoría SEO completa del proyecto y
entregar un plan de mejoras detallado y priorizado. NO modifiques ningún
archivo. El objetivo de esta sesión es exclusivamente analizar y planificar;
los cambios se ejecutarán en fases posteriores bajo mi supervisión.

────────────────────────────────────────────────────────────────────────────
CONTEXTO DE NEGOCIO
────────────────────────────────────────────────────────────────────────────

La web es una academia unipersonal dirigida por Mª Carmen, preparadora
online de oposiciones para la Administración General del Estado (AGE C1) y
el Cuerpo Administrativo de la Seguridad Social (SS C1). Los tres
diferenciales principales frente a la competencia son:

  1. Grupos reducidos con seguimiento personal cercano.
  2. Clases en directo por videoconferencia (no solo grabaciones).
  3. Posibilidad de preparar AGE y Seguridad Social de forma conjunta
     aprovechando el temario común — este es el producto más exclusivo
     y el que tiene menor competencia SEO directa en el mercado español.

La preparadora es mujer (Mª Carmen), lo que define la identidad de marca
de la web. Sin embargo, en español el término "preparador" (masculino) se
usa comúnmente como forma neutra y acumula un volumen de búsqueda en Google
España entre 3 y 4 veces superior al de "preparadora". Esto crea una
tensión entre identidad de marca y captación de tráfico que debe resolverse
de forma inteligente.

────────────────────────────────────────────────────────────────────────────
KEYWORDS OBJETIVO POR PÁGINA
────────────────────────────────────────────────────────────────────────────

A continuación se detalla, para cada URL relevante del sitio, la keyword
principal que debe dominar el title tag, el H1 y la meta description, más
las keywords de soporte que deben aparecer de forma natural en H2/H3 y en
el cuerpo del texto. Usa este mapa como referencia para toda la auditoría.

  URL: /
  Keyword principal: preparar oposiciones AGE y seguridad social
  Keywords de soporte: preparador oposiciones online, academia oposiciones
  administrativo online, preparación conjunta AGE seguridad social

  URL: /oposiciones-administrativo-estado/
  Keyword principal: preparar oposiciones administrativo del estado
  Keywords de soporte: oposiciones AGE C1 2026, temario administrativo del
  estado, preparar AGE online, plazas administrativo del estado

  URL: /oposiciones-seguridad-social/
  Keyword principal: preparar oposiciones seguridad social C1
  Keywords de soporte: oposiciones seguridad social 2026, supuesto práctico
  seguridad social, preparar administrativo seguridad social online

  URL: /preparar-age-y-seguridad-social/
  Keyword principal: preparar AGE y seguridad social a la vez
  Keywords de soporte: preparación conjunta AGE seguridad social, temario
  común AGE y seguridad social, doblar oposiciones administrativo

  URL: /preparadora-age/
  Keyword principal: preparador AGE C1 online
  Keywords de soporte: clases AGE online en directo, grupos reducidos
  oposiciones AGE, preparadora AGE online

  URL: /preparadora-seguridad-social/
  Keyword principal: preparador seguridad social online
  Keywords de soporte: clases seguridad social online en directo, grupos
  reducidos oposiciones seguridad social, preparadora seguridad social online

  URL: /preparadora-oposiciones/
  Keyword principal: preparadora de oposiciones AGE y seguridad social
  Keywords de soporte: Mª Carmen preparadora oposiciones, preparadora online
  con seguimiento

  URL: /blog/
  Keyword principal: blog oposiciones AGE seguridad social
  Keywords de soporte: guía oposiciones administrativo, consejos preparar
  oposiciones C1

────────────────────────────────────────────────────────────────────────────
TAREAS DE AUDITORÍA
────────────────────────────────────────────────────────────────────────────

Explora el repositorio en profundidad — layouts, páginas, componentes,
configuración de rutas, archivos de contenido — y realiza las siguientes
cinco auditorías. Para cada una, describe el estado actual, identifica los
problemas y propón las mejoras concretas con los fragmentos de código
exactos listos para aplicar.

──────────────────────────────────────────
AUDITORÍA 1 — Arquitectura y canibalización
──────────────────────────────────────────

Genera un inventario de todas las URLs públicas del sitio. Para cada una
indica: título actual, meta description actual, H1 actual y keyword que
parece estar atacando.

Detecta casos de canibalización: páginas distintas que compiten por la
misma keyword y dividen la autoridad SEO. Presta especial atención a los
siguientes pares que son candidatos probables:

  - /preparadora-age/ vs /oposiciones-administrativo-estado/
  - /preparadora-seguridad-social/ vs /oposiciones-seguridad-social/

Si detectas canibalización, propón cómo diferenciar cada página:
indica qué rol debe tener cada una (informacional vs transaccional),
qué contenido debe contener cada una, y qué elementos concretos hay que
añadir, eliminar o mover.

Revisa también si algún slug de URL es demasiado genérico y podría mejorar
incorporando la keyword principal asignada en el mapa anterior. Para cada
caso propón la URL nueva y la redirección 301 correspondiente.

──────────────────────────────────────────
AUDITORÍA 2 — Metadatos, encabezados y semántica de género
──────────────────────────────────────────

Para cada página del mapa de keywords, extrae del código los valores
actuales de: title tag, meta description, H1, y los primeros H2 y H3.
Presenta esta información en una tabla comparativa.

Luego propón los valores optimizados siguiendo estas reglas:

  Title tag: keyword principal + " | MC Oposiciones". Máximo 60 caracteres.

  Meta description: debe incluir la keyword principal de forma natural,
  mencionar al menos uno de los tres diferenciales de negocio (grupos
  reducidos, clases en directo, preparación conjunta), y terminar con una
  llamada a la acción. Entre 145 y 155 caracteres.

  H1: exactamente uno por página, debe contener la keyword principal.
  Máximo 60 caracteres.

  H2 y H3: al menos dos de los H2 de cada página de producto deben
  incorporar variaciones de las keywords de soporte asignadas. Propón
  los textos concretos.

Para la semántica de género aplica estas reglas específicas:

  - En title tags y H1 de las páginas /preparadora-age/ y
    /preparadora-seguridad-social/: usar la forma "preparador/a" cuando
    resulte natural, o el masculino genérico "preparador" para maximizar
    el volumen de búsqueda capturado, dejando que el slug de la URL
    establezca el contexto femenino de marca.
  - En las meta descriptions de las páginas de producto: usar "preparador"
    como término de búsqueda en la primera mención, y "Mª Carmen" o
    "preparadora" en la segunda mención para mantener la identidad de marca.
  - En los títulos de artículos del blog: usar siempre la forma neutra
    "preparador/a" o el masculino genérico para maximizar el alcance.
  - En el cuerpo del texto y en los CTAs: mantener el femenino ("tu
    preparadora", "Mª Carmen") para preservar la identidad de marca.

──────────────────────────────────────────
AUDITORÍA 3 — Schema Markup y SEO técnico
──────────────────────────────────────────

Busca en todos los archivos del repositorio si existe alguna implementación
de Schema Markup en formato JSON-LD. Indica qué schemas están presentes,
en qué páginas, y si están correctamente formados.

Si no existen o están incompletos, propón implementar los siguientes schemas.
Para cada uno, entrega el bloque JSON-LD completo listo para insertar dentro
de una etiqueta <script type="application/ld+json"> en el <head>:

  Schema "Organization" — en el layout base, para que aparezca en todas
  las páginas. Debe incluir: nombre ("MC Oposiciones"), URL, logo, email
  de contacto, teléfono si existe en el código, y las URLs de redes
  sociales que encuentres en el repositorio.

  Schema "Person" — en la página /preparadora-oposiciones/. Debe incluir:
  nombre completo de Mª Carmen, descripción profesional, URL de la página,
  y referencia a la organización (MC Oposiciones). Esta misma entidad
  Person debe usarse como "instructor" en los schemas Course.

  Schema "Course" — en cada una de estas tres páginas:
  /oposiciones-administrativo-estado/, /oposiciones-seguridad-social/ y
  /preparar-age-y-seguridad-social/. Para cada una incluye: nombre del
  curso, descripción, proveedor (MC Oposiciones como Organization),
  instructor (Mª Carmen como Person), modo de entrega en línea
  (use "OnlineEventAttendanceMode" o "Online" según la spec vigente),
  e idioma ("es").

  Schema "FAQPage" — en la home / y en las tres páginas de producto con
  cursos. Extrae del código HTML las preguntas y respuestas de las
  secciones de FAQ que ya existen en esas páginas. No inventes preguntas;
  usa exactamente el contenido que está en el repositorio.

  Schema "BreadcrumbList" — en todas las páginas secundarias que ya
  muestren migas de pan visibles en el HTML. Genera el JSON-LD que
  corresponda a la ruta de cada página.

Además, revisa y reporta el estado de estos elementos de SEO técnico:

  - Etiquetas canonical: ¿están presentes en todas las páginas? ¿apuntan
    a la URL correcta?
  - Imágenes: ¿tienen atributo alt? ¿el alt es descriptivo y relevante
    para la keyword de la página o es genérico/vacío?
  - Estructura de encabezados: ¿hay páginas con más de un H1, o con saltos
    de jerarquía (de H1 a H3 sin H2)?
  - Open Graph y Twitter Cards: ¿están configurados en todas las páginas?
    ¿los valores de og:title y og:description están optimizados o son
    copias exactas del title y meta description?

──────────────────────────────────────────
AUDITORÍA 4 — Huecos de contenido en el blog
──────────────────────────────────────────

Examina todos los artículos existentes en el blog del repositorio. Para
cada artículo indica: URL, título actual, y keyword principal que parece
estar atacando.

Luego, teniendo en cuenta las keywords objetivo del mapa anterior y los
temas que aún no están cubiertos, propón exactamente 8 artículos nuevos
que debería publicar el blog. Para cada artículo entrega:

  Título SEO: el título exacto del artículo con la keyword incluida
  (máximo 60 caracteres).

  Slug sugerido: la URL relativa en formato /blog/slug-en-kebab-case/

  Keyword principal: el término de búsqueda que debe posicionar.

  Intención del buscador: indica si es informacional (el usuario quiere
  aprender), comparativa (el usuario está eligiendo entre opciones) o
  transaccional (el usuario quiere contratar o inscribirse).

  Resumen del contenido: 3 o 4 líneas describiendo el enfoque del artículo,
  los subtemas que debe cubrir, y por qué es relevante para el negocio.

Prioriza artículos sobre estos temas que tienen demanda de búsqueda
contrastada en el mercado español de oposiciones: comparativa en
profundidad entre AGE y Seguridad Social, estructura y consejos para el
examen tipo test de AGE, guía del supuesto práctico de Seguridad Social,
plazas y convocatorias previstas, y métodos de estudio para opositores
que trabajan.

──────────────────────────────────────────
AUDITORÍA 5 — Informe ejecutivo de cierre
──────────────────────────────────────────

Al finalizar las cuatro auditorías anteriores, redacta un informe ejecutivo
con la siguiente estructura:

  1. Resumen de hallazgos críticos: los 3 o 4 problemas más urgentes que
     están frenando el posicionamiento ahora mismo, con una explicación
     breve de por qué tienen ese impacto.

  2. Plan de mejoras priorizado: una tabla con todas las mejoras propuestas
     ordenadas de mayor a menor impacto estimado. Para cada mejora indica:
     descripción de la acción, página o archivo afectado, impacto esperado
     (alto / medio / bajo), y esfuerzo de implementación (alto / medio /
     bajo).

  3. Quick wins: las 3 o 5 acciones que se pueden implementar en menos de
     una hora y que tendrían impacto inmediato o a corto plazo.

  4. Cualquier problema técnico adicional detectado durante el análisis
     que no encaje en las auditorías anteriores.