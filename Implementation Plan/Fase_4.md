FASE 4 — BLOG CON CONTENT COLLECTIONS

Prompt 4-A — Páginas de listado y artículo individual del blog

Crea la infraestructura del blog para mcoposiciones.com usando Content 
Collections de Astro.

Crea src/pages/blog/index.astro
Esta página lista todos los artículos del blog.
BaseLayout con:
title: "Blog sobre Oposiciones AGE y Seguridad Social | MC Oposiciones"
description: "Artículos sobre las oposiciones de Administrativo del Estado (AGE 
C1) y Administrativo de la Seguridad Social. Temario, convocatorias, supuestos 
prácticos y consejos de preparación."
canonicalUrl: "https://mcoposiciones.com/blog/"

La página debe:
Importar todos los artículos de la colección 'blog' ordenados por pubDate 
descendente
Mostrar una cuadrícula de tarjetas de artículos con: imagen si existe, categoría, h1 
del artículo (visible como titular de la tarjeta), excerpt, fecha de publicación y 
enlace "Leer más" → /blog/[slug]/
Implementar filtro por categoría usando los parámetros de la URL (ej: 
/blog/?categoria=oposiciones-age)

Crea src/pages/blog/[slug].astro
Esta es la plantilla de cada artículo individual.
Debe:
Obtener el artículo por su slug con getEntry()
Renderizar el contenido Markdown con <Content />
Usar el BaseLayout con title, description y canonicalUrl del frontmatter
ogType: "article"
El H1 visible en la página debe ser el campo h1 del frontmatter (no el title)
Incluir el Breadcrumbs component: [{label: "Inicio", href: "/"}, {label: "Blog", href: 
"/blog/"}, {label: frontmatter.h1, href: ""}]

Inyectar schema BlogPosting:
{
"@context": "https://schema.org",
"@type": "BlogPosting",
"headline": "[frontmatter.h1]",
"description": "[frontmatter.description]",
"author": {"@type": "Person", "name": "[frontmatter.author]"},
"datePublished": "[frontmatter.pubDate]",
"dateModified": "[frontmatter.updatedDate o pubDate]",
"publisher": {"@type": "Organization", "name": "MC Oposiciones", "url": 
"https://mcoposiciones.com"},
"mainEntityOfPage": "https://mcoposiciones.com/blog/[slug]/"
}

Aplicar estilos Tailwind Typography (@tailwindcss/typography) al contenido con la 
clase prose
Incluir el componente CTABanner al final del artículo con texto "¿Quieres preparar 
tu oposición con Mª Carmen?" → /contacto/
Mostrar artículos relacionados al final (los 2-3 artículos más recientes de la misma 
categoría)

Prompt 4-B — Artículo 1: AGE vs Seguridad Social

Crea el archivo src/content/blog/age-vs-seguridad-social.md con el siguiente 
frontmatter y contenido completo. Este artículo debe tener mínimo 1.800 palabras 
y estar completamente escrito, no solo los encabezados.

Frontmatter:
title: "AGE vs Seguridad Social: ¿Cuál me conviene preparar? Guía 2026"
description: "Comparativa completa entre las oposiciones de Administrativo del 
Estado (AGE C1) y Administrativo de la Seguridad Social C1: temario, dificultad, 
plazas, salario y cuál elegir según tu perfil."
pubDate: 2026-05-15
author: "Mª Carmen"
category: "Preparacion y Estudio"
h1: "AGE vs Seguridad Social — ¿Cuál oposición te conviene preparar en 2026?"
excerpt: "La duda más frecuente de los opositores: ¿es mejor preparar el 
Administrativo del Estado o el Administrativo de la Seguridad Social? En esta guía 
te lo explico todo con datos reales para que puedas decidir."

Estructura del contenido con estos H2 exactos y extensión mínima por sección:

H2: Qué tienen en común las oposiciones AGE y Seguridad Social (200 palabras)
Cubrir: ambas son grupo C1 con Bachillerato como titulación, ambas son 100% 
tipo test sin examen oral, el 75% del temario es idéntico (explicar qué temas 
coinciden), similar rango salarial (~1.700-1.900€/mes neto), plazas nacionales en 
cualquier punto de España, sin idiomas obligatorios.

H2: Principales diferencias entre AGE y Seguridad Social (300 palabras)
Incluir una tabla en Markdown con columnas Característica / AGE / SS y filas: 
organismo empleador, plazas 2026, fecha examen 2026, número de temas, 
prueba de ofimática, penalización por error, supuesto práctico, temario 
específico, dificultad estimada, tiempo medio de preparación.

H2: ¿Cuánto tiempo se tarda en preparar cada una? (200 palabras)
Datos realistas: AGE sin base previa trabajando a jornada completa 12-14 meses, 
media jornada 14-18 meses. SS sin base previa trabajando a jornada completa 8-12 meses. Si ya llevas AGE preparada, añadir SS supone entre 2 y 3 meses de 
trabajo adicional.

H2: ¿Puedo preparar AGE y Seguridad Social a la vez? (250 palabras)
Respuesta afirmativa y detallada. Explicar el temario compartido. Dar ejemplo 
concreto de cómo se organiza una semana de estudio combinada. Enlace interno 
al texto "Pack Doble AGE + SS" apuntando a /preparar-age-y-seguridad-social/

H2: ¿Cuál es más difícil? (200 palabras)
Análisis objetivo: el AGE tiene la parte de ofimática (30 preguntas de Word, Excel, 
Access, Outlook) que genera más miedo pero es completamente aprendible. La 
SS tiene el temario específico de legislación de Seguridad Social que es denso 
pero muy concreto y sin sorpresas si se estudia bien. Penalización: el AGE 
descuenta 1/3 por error, la SS descuenta 1/4.

H2: ¿Cuál tiene más plazas y mejor ratio? (150 palabras)
AGE: 2.512 plazas en 2026. SS: 1.456 plazas. Dato: en la convocatoria de SS de 
2023 se presentaron aproximadamente 60.000 candidatos. Estadística relevante: 
de todos los inscritos, aproximadamente la mitad no se presenta, y de los que sí 
se presentan, una parte significativa no tiene preparación adecuada. Quien se 
prepara bien compite en la práctica con una fracción del total.

H2: Conclusión — ¿cuál elegir según tu perfil? (200 palabras)
Tres escenarios: si tienes base informática o no te preocupa → AGE por volumen de 
plazas. Si quieres empezar más rápido o no quieres ofimática → SS, especialmente 
con el examen del 28 junio 2026. Si quieres maximizar opciones → preparar las 
dos. Enlace interno a /preparar-age-y-seguridad-social/ y a /contacto/.

Al final del artículo, dentro del Markdown, añadir una sección "Artículos 
relacionados" con enlaces a:
/blog/supuesto-practico-administrativo-seguridad-social/ — "Cómo preparar el 
supuesto práctico de SS"
/blog/temario-administrativo-estado-age-2026/ — "Temario AGE C1 2026 
completo"
/preparar-age-y-seguridad-social/ — "Ver el Pack Doble AGE + SS"

Prompt 4-C — Artículos 2 y 3

Crea estos dos artículos de blog completos para mcoposiciones.com. Cada uno 
debe tener mínimo 1.500 palabras de contenido real, no solo encabezados.

ARTÍCULO 2: src/content/blog/supuesto-practico-administrativo-seguridad-social.md

Frontmatter:
title: "Cómo preparar el Supuesto Práctico de Administrativo de la Seguridad 
Social 2026"
description: "Guía completa para dominar el supuesto práctico de las oposiciones 
de Administrativo de la Seguridad Social C1: estructura, qué entra, cómo 
estudiarlo y trucos para el día del examen."
pubDate: 2026-05-22
author: "Mª Carmen"
category: "Oposiciones Seguridad Social"
h1: "Cómo preparar el Supuesto Práctico del Administrativo de la Seguridad Social 
— Guía Completa 2026"
excerpt: "El supuesto práctico de Seguridad Social vale el 50% del examen y 
muchos opositores lo subestiman. Te explico exactamente qué entra, cómo 
prepararlo y qué estrategia usar el día del examen."

H2 exactos del artículo:
Qué es y cómo funciona el supuesto práctico de Seguridad Social (formato, 
puntuación, tiempo)
Qué materia entra en el supuesto práctico (solo el Temario Específico: afiliación, 
cotización, recaudación, prestaciones)
Por qué el supuesto vale tanto como el test teórico (las 15 preguntas valen lo 
mismo que las 70 — análisis de esto)
Los 5 errores más frecuentes de los opositores en el supuesto práctico
Estrategia de preparación desde el primer mes (con cronograma orientativo)
Cómo gestionar el tiempo durante el examen (cuántos minutos dedicar a cada 
parte)
Tipos de situaciones que aparecen en el supuesto práctico (con ejemplos: caso de 
cotización, caso de afiliación tardía, caso de prestación de IT)
Recursos para practicar: exámenes oficiales de convocatorias anteriores (2022 y 
2024)

Incluir enlace interno a /oposiciones-seguridad-social/ y a /preparar-age-y-seguridad-social/

ARTÍCULO 3: src/content/blog/temario-administrativo-estado-age-2026.md

Frontmatter:
title: "Temario Administrativo del Estado AGE C1 2026 — Guía Completa por 
Bloques"
description: "Descubre el temario completo de Administrativo del Estado AGE C1 
2026: los 45 temas en 6 bloques explicados, qué pesa más en el examen, cómo 
preparar la ofimática y por dónde empezar."
pubDate: 2026-05-29
author: "Mª Carmen"
category: "Oposiciones AGE"
h1: "Temario Administrativo del Estado AGE C1 2026 — Los 45 temas explicados 
por bloques"
excerpt: "El temario del AGE C1 tiene 45 temas divididos en 6 bloques, incluyendo 
la temida ofimática. En esta guía te explico qué entra en cada bloque, cuánto pesa 
en el examen y cómo planificar el estudio."

H2 exactos:
Estructura oficial del temario AGE C1 2026 (visión global de los 6 bloques y 
número de temas)
Bloque I: Organización política y constitucional (temas 1 a X con descripción breve 
de cada uno)
Bloque II: Las Administraciones Públicas y el Derecho Administrativo
Bloque III: Personal al servicio de las Administraciones Públicas
Bloque IV: Gestión financiera y presupuestaria
Bloque V: Actividad administrativa, servicios al ciudadano y administración 
electrónica
Bloque VI: Informática y ofimática (las 30 preguntas que nadie quiere pero todos 
necesitan)
¿Por qué bloques empezar? La estrategia de estudio recomendada
La ofimática del AGE: qué versiones entran, cómo practicar, cuánto tiempo 
dedicarle
Enlace de descarga del tema de muestra: "/resources/tema1age.pdf"
Diferencias entre el temario AGE y el de Seguridad Social (enlace a /blog/age-vs-seguridad-social/)

Incluir enlace interno a /oposiciones-administrativo-estado/ y a /preparar-age-y-seguridad-social/

Prompt 4-D — Plantillas de los 7 artículos restantes

Crea los siguientes 7 archivos Markdown en src/content/blog/ con su frontmatter 
completo y la estructura de H2 definida. El contenido de cada sección puede ser 
un párrafo introductorio breve — el contenido completo lo redactaré yo 
manualmente siguiendo los H2.

Artículo 4:
Archivo: convocatoria-administrativo-estado-2026.md
title: "Convocatoria Administrativo del Estado 2026 — Plazas, Fechas y Cómo 
Inscribirse"
description: "Todo lo que necesitas saber sobre la convocatoria de Administrativo 
del Estado AGE C1 2026: número de plazas, fechas clave, cómo inscribirse con el 
modelo 790 y cuándo empieza el examen."
category: "Convocatorias 2026"
h1: "Convocatoria Administrativo del Estado 2026 — Plazas, Fechas y Guía de 
Inscripción"
H2s: Resumen de la convocatoria 2026, Número de plazas y distribución, 
Requisitos para presentarse, Cómo inscribirse paso a paso (modelo 790), Fechas 
clave a tener en cuenta, ¿Cuándo empieza el examen?, Cómo prepararte desde 
ahora

Artículo 5:
Archivo: cuanto-tarda-preparar-oposiciones-administrativo.md
title: "¿Cuánto Tiempo se Tarda en Preparar las Oposiciones de Administrativo? 
Guía Realista 2026"
description: "Descubre cuánto tiempo necesitas para preparar las oposiciones de 
Administrativo del Estado o Seguridad Social según tu situación: si trabajas, si 
tienes base o empiezas de cero."
category: "Preparacion y Estudio"
h1: "¿Cuánto Tiempo se Tarda en Preparar las Oposiciones de Administrativo? Guía 
Realista 2026"
H2s: El tiempo de preparación según tu situación personal, Si trabajas a jornada 
completa (con tabla por horas/semana), Si trabajas media jornada, Si estás en 
situación de desempleo, Si ya tienes base de otras oposiciones, Si preparas AGE y 
Seguridad Social a la vez, ¿Cómo organizar el tiempo de estudio?, El error más 
común con el tiempo

Artículo 6:
Archivo: sueldo-administrativo-estado-seguridad-social.md
title: "Sueldo del Administrativo del Estado y Seguridad Social 2026 — Cuánto 
Cobra un C1"
description: "Descubre el sueldo real de un Administrativo del Estado (AGE C1) y 
un Administrativo de la Seguridad Social C1 en 2026: sueldo base, complementos, 
trienios y cuánto se cobra en neto."
category: "Oposiciones AGE"
h1: "Sueldo del Administrativo del Estado y Seguridad Social 2026 — La Guía 
Completa"
H2s: Sueldo bruto y neto de un Administrativo del Estado (AGE C1), Sueldo del 
Administrativo de Seguridad Social C1, Componentes del sueldo de un 
funcionario C1 (sueldo base, trienios, complementos), ¿Cómo sube el sueldo con 
los años?, Comparativa de sueldo con el sector privado, Otros beneficios del 
puesto (conciliación, teletrabajo, estabilidad)

Artículo 7:
Archivo: temario-administrativo-seguridad-social-2026.md
title: "Temario Administrativo Seguridad Social 2026 — General y Específico 
Explicados"
description: "Guía completa del temario de Administrativo de la Seguridad Social 
C1 2026: los 23 temas generales y los 13 específicos explicados, qué pesa más y 
cómo organizarlo para el examen del 28 junio."
category: "Oposiciones Seguridad Social"
h1: "Temario Administrativo Seguridad Social 2026 — Los 36 Temas Explicados"
H2s: Estructura del temario oficial SS 2026, Temario General (23 temas): 
descripción de cada bloque, Temario Específico (13 temas): el corazón de la 
oposición, Qué pesa más en el examen: general vs específico, Relación entre el 
temario de SS y el de AGE (el 75% común), Por dónde empezar a estudiar, 
Recursos para preparar el temario

Artículo 8:
Archivo: errores-comunes-opositores-age.md
title: "7 Errores que Cometen los Opositores de AGE (y Cómo Evitarlos)"
description: "Los 7 fallos más frecuentes que cometen los opositores de 
Administrativo del Estado y cómo evitarlos para llegar al examen en las mejores 
condiciones posibles."
category: "Preparacion y Estudio"
h1: "7 Errores que Cometen los Opositores de AGE — y Cómo Evitarlos"
H2s: Error 1 — Estudiar sin planificación, Error 2 — Dejar la ofimática para el final, 
Error 3 — Hacer test sin haber estudiado antes el tema, Error 4 — No hacer 
simulacros cronometrados, Error 5 — Cambiar de academia o preparador cada 
poco tiempo, Error 6 — No descansar (el error que más destroza el rendimiento), 
Error 7 — Estudiar solo sin apoyo externo, Conclusión: lo que sí funciona

Artículo 9:
Archivo: ofimatica-examen-administrativo-estado.md
title: "Cómo Preparar la Ofimática del Examen AGE C1 — Todo lo que Entra en 
2026"
description: "Guía completa de la parte de ofimática del examen de Administrativo 
del Estado AGE C1 2026: qué versiones de Word, Excel, Access y Outlook entran y 
cómo practicar paso a paso."
category: "Oposiciones AGE"
h1: "Cómo Preparar la Ofimática del Examen AGE C1 2026 — Todo lo que Tienes 
que Saber"
H2s: Cuántas preguntas son de ofimática en el examen AGE, Qué programas 
entran y en qué versiones (Windows 10, Microsoft 365), Microsoft Word 365 en el 
examen AGE: lo más preguntado, Microsoft Excel 365: funciones y operaciones 
que salen, Microsoft Access 365: bases de datos básicas, Microsoft Outlook 365: 
gestión de correo electrónico, Cómo practicar la ofimática para el examen, 
¿Cuánto tiempo dedicar a la ofimática?

Artículo 10:
Archivo: preguntas-tipo-test-administrativo-seguridad-social.md
title: "Preguntas Tipo Test de Administrativo de la Seguridad Social — Ejemplos 
Reales 2026"
description: "Ejemplos de preguntas tipo test de los exámenes oficiales de 
Administrativo de la Seguridad Social de convocatorias anteriores (2022 y 2024) 
para que sepas exactamente qué te espera."
category: "Oposiciones Seguridad Social"
h1: "Preguntas Tipo Test de Administrativo de la Seguridad Social — Ejemplos de 
Exámenes Reales"
H2s: Cómo son las preguntas del examen de Seguridad Social, Ejemplos de 
preguntas del Temario General, Ejemplos de preguntas del Temario Específico, 
Ejemplos de preguntas del supuesto práctico, Cómo analizar las preguntas para 
no caer en trampas, La penalización de 1/4: cuándo dejar en blanco, Cómo 
practicar con test oficiales de convocatorias anteriores