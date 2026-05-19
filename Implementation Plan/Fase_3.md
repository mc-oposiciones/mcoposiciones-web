FASE 3 — PÁGINAS PRINCIPALES

Prompt 3-A — Página de Inicio (Home)

Crea la página src/pages/index.astro para mcoposiciones.com.
Usa el BaseLayout con estas props:

title: "Preparadora de Oposiciones AGE y Seguridad Social Online | MC 
Oposiciones"
description: "Prepara las oposiciones de Administrativo del Estado (AGE C1) y 
Administrativo de la Seguridad Social con Mª Carmen, preparadora especializada. 
Clases en directo, temario actualizado 2026. ¡Nuevos grupos en septiembre!"
canonicalUrl: "https://mcoposiciones.com/"
ogType: "website"

Schema JSON-LD a inyectar (prop schemaJson):
{
"@context": "https://schema.org",
"@type": "EducationalOrganization",
"name": "MC Oposiciones",
"url": "https://mcoposiciones.com",
"logo": "https://mcoposiciones.com/logo.png",
"description": "Preparadora especializada en oposiciones de Administrativo del 
Estado AGE C1 y Administrativo de la Seguridad Social C1. Clases online en 
directo.",
"telephone": "+34642170664",
"email": "infomcoposiciones@gmail.com",
"sameAs": ["URL YouTube", "URL Instagram", "URL TikTok"],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "5.0",
"reviewCount": "27",
"bestRating": "5",
"worstRating": "1"
}
}

Estructura de la página con H1 y H2 exactos (respeta estos textos sin cambiarlos):

H1: "Preparadora de Oposiciones AGE y Seguridad Social — Tu plaza está más 
cerca de lo que crees"
Sección Hero:
El H1 arriba indicado
Párrafo subtítulo: "Clases online en directo para las oposiciones de Administrativo 
del Estado (C1 AGE) y Administrativo de la Seguridad Social (C1). Grupos 
reducidos, temario 2026 actualizado y método que funciona."
Botón CTA primario: "Ver cursos disponibles" → enlace a /cursos-precios/
Botón CTA secundario: "Clase gratuita de muestra" → enlace a /clases-muestra/
Tres indicadores de confianza en fila: " ⭐⭐⭐⭐⭐ 27 reseñas en Google", 
"Grupos reducidos", "Temario 2026 actualizado"

H2: "La única preparadora que te prepara para AGE y Seguridad Social a la vez"
Párrafo explicando que el 75% del temario es compartido, que se pueden preparar 
ambas oposiciones con el mismo esfuerzo y duplicar las posibilidades de 
conseguir plaza
Enlace interno al texto "preparar las dos oposiciones" apuntando a /preparar-age-y-seguridad-social/

H2: "Elige tu oposición"
Tres CourseCards:
Card 1: "Administrativo del Estado (AGE C1)" / "2.512 plazas en 2026" / desde 
100€/mes / href=/oposiciones-administrativo-estado/
Card 2: "Administrativo Seguridad Social (C1)" / "1.456 plazas · Examen 28 junio 
2026" / desde 100€/mes / href=/oposiciones-seguridad-social/
Card 3: "Pack AGE + Seguridad Social" / "La opción más inteligente — doble 
oportunidad con un mismo esfuerzo" / precio especial / badge="EXCLUSIVO" / 
href=/preparar-age-y-seguridad-social/

H2: "Soy Mª Carmen, tu preparadora"
Foto de Mª Carmen (imagen placeholder /public/images/maria-carmen.jpg, width 
400, height 400, loading eager)
Bio breve de 3-4 líneas
Enlace "Conoce mi método completo" → /preparadora-oposiciones/

H2: "Cómo funciona la preparación con MC Oposiciones"
Lista numerada de 5 puntos: Clases en directo por videoconferencia, Grabaciones 
disponibles 24/7, Temario y test actualizados, Simulacros cronometrados, 
Resolución de dudas directa

H2: "Lo que dicen nuestros alumnos"
Componente TestimonialWidget
Texto bajo el widget: "27 alumnos nos valoran con 5 estrellas en Google"

H2: "Preguntas frecuentes"
Componente FAQAccordion con las preguntas:
"¿Puedo preparar AGE y Seguridad Social a la vez?" / "Sí, y es la opción más 
inteligente. El 75% del temario es idéntico. Solo necesitas aprender 13 temas 
adicionales de la parte específica de SS para tener doble oportunidad de plaza."
"¿Las clases son en directo o grabadas?" / "Las clases son en directo por 
videoconferencia. Todas quedan grabadas y disponibles para que las puedas 
repasar cuando quieras."
"¿Cuánto tiempo necesito dedicar por semana?" / "Entre 15 y 25 horas semanales 
según tu objetivo y fecha de examen. Mª Carmen te diseña un plan adaptado a tu 
disponibilidad."
"¿Qué pasa si se retrasa la convocatoria?" / "Tu acceso al curso se mantiene hasta 
la fecha del examen oficial, independientemente de retrasos en la convocatoria."

Componente CTABanner al final: "¿Empezamos a preparar tu plaza?" / "Escríbeme 
y te cuento todo sin compromiso" / "Contactar ahora" → /contacto/ / variant 
primary

Prompt 3-B — Página Administrativo AGE C1

Crea la página src/pages/oposiciones-administrativo-estado.astro para 
mcoposiciones.com.
BaseLayout props:

title: "Preparadora Oposiciones Administrativo del Estado AGE C1 2026 | MC 
Oposiciones"
description: "Prepara con Mª Carmen las oposiciones de Administrativo del 
Estado (AGE C1) 2026. Clases online en directo, 2.512 plazas convocadas, 
temario actualizado con informática incluida. Sin compromiso de permanencia."
canonicalUrl: "https://mcoposiciones.com/oposiciones-administrativo-estado/"

Schema JSON-LD:
{
"@context": "https://schema.org",
"@type": "Course",
"name": "Preparación Oposiciones Administrativo del Estado AGE C1 2026",
"description": "Preparación online en directo para las oposiciones de 
Administrativo del Estado (Grupo C1). Temario completo en 6 bloques, test, 
simulacros y supuesto práctico.",
"provider": {
"@type": "Organization",
"name": "MC Oposiciones",
"url": "https://mcoposiciones.com"
},
"offers": {
"@type": "Offer",
"price": "100",
"priceCurrency": "EUR",
"availability": "https://schema.org/InStock",
"priceSpecification": {"@type": "UnitPriceSpecification", "price": "100", 
"priceCurrency": "EUR", "unitText": "MONTH"}
},
"educationalLevel": "C1",
"inLanguage": "es"
}

Añadir también el Breadcrumbs component con: [{label: "Inicio", href: "/"}, {label: 
"Oposiciones AGE C1", href: ""}]

Estructura con H1 y H2 exactos:
H1: "Oposiciones Administrativo del Estado (AGE C1) — Preparación Online 2026"
H2: "¿Qué es el Cuerpo General Administrativo del Estado?"
Contenido: descripción del cuerpo (grupo C1, funciones administrativas en 
ministerios y organismos públicos), sueldo orientativo 1.500-1.900€/mes neto, 
estabilidad laboral, posibilidad de teletrabajo parcial, destino en cualquier punto 
de España.

H2: "Convocatoria AGE 2026 — Todo lo que necesitas saber"
Contenido en tabla o lista destacada:
Plazas: 2.512 (turno libre + promoción interna)
Titulación requerida: Bachillerato o equivalente
Edad mínima: 16 años
Convocado por: INAP (Instituto Nacional de Administración Pública)
Inscripción: modelo 790 online en el Punto de Acceso General
Plazo de inscripción: 20 días hábiles desde la publicación en el BOE

H2: "Cómo es el examen de Administrativo del Estado"
Contenido:
Ejercicio único con dos partes obligatorias y eliminatorias
Primera parte: 70 preguntas tipo test. Penalización: una respuesta errónea 
descuenta 1/3 del valor de una correcta. Tiempo total: 100 minutos para ambas 
partes
Las 70 preguntas se dividen en: 40 sobre temas del Bloque I al V (temario jurídico-administrativo) y 30 sobre el Bloque VI (informática y ofimática)
Segunda parte: supuesto práctico de 20 preguntas tipo test sobre los Bloques II, 
III, IV y V
Sistemas utilizados: Windows 10 y Microsoft 365 (Word, Excel, Access, Outlook)

H2: "Temario oficial Administrativo del Estado C1 2026"
Contenido: descripción de los 6 bloques con temas principales:
Bloque I: Constitución Española de 1978, organización del Estado, Corona, Cortes 
Generales, Gobierno, Tribunal Constitucional, Unión Europea
Bloque II: Derecho Administrativo, acto administrativo, procedimiento 
administrativo común (Ley 39/2015), régimen jurídico del sector público (Ley 
40/2015), contratos del sector público, responsabilidad patrimonial
Bloque III: Personal al servicio de las AAPP, función pública, TREBEP, derechos y 
deberes, situaciones administrativas, régimen disciplinario, igualdad y 
conciliación
Bloque IV: Presupuestos Generales del Estado, Ley General Presupuestaria, 
gestión financiera
Bloque V: Servicios al ciudadano, administración electrónica, transparencia, 
protección de datos, igualdad efectiva, violencia de género
Bloque VI: Informática básica, Windows 10, Microsoft Word 365, Microsoft Excel 
365, Microsoft Access 365, Microsoft Outlook 365, Internet y correo electrónico
Enlace de descarga del PDF de muestra: href="/resources/tema1age.pdf" con 
texto "Descargar tema de muestra del Bloque I (PDF gratuito)"

H2: "Cómo te prepara Mª Carmen para las oposiciones AGE"
Contenido: descripción del método. Énfasis en la preparación de la parte de 
ofimática (30 preguntas del test). Mencionar que el acceso a las grabaciones 
permite repasar a cualquier hora.

H2: "Opciones de preparación para AGE C1"
Usar CourseCards con:
Mensual: 100€/mes, sin permanencia, acceso a clases en directo, grabaciones y 
material
Completo: 475€ pago único, acceso hasta el examen, todo incluido, el más 
económico a largo plazo
Parte General: 250€, solo los bloques I al V, para quien ya tiene preparada la 
ofimática
Enlace al Pack AGE+SS: "¿También te interesa Seguridad Social? Consulta el Pack 
Doble" → /preparar-age-y-seguridad-social/

H2: "Lo que dicen los alumnos de AGE"
TestimonialWidget

H2: "Preguntas frecuentes sobre las oposiciones AGE"
FAQAccordion con:
"¿Cuánto tiempo se tarda en preparar el AGE?" / "Entre 8 y 14 meses según la 
dedicación semanal. Trabajando a jornada completa, con 15 horas semanales, la 
preparación media es de 12 meses."
"¿Necesito saber informática para presentarme?" / "No necesitas saber de 
antemano. La parte de ofimática (Word, Excel, Access) se trabaja desde cero 
durante la preparación. Muchos alumnos la aprenden durante el curso."
"¿Cuándo es el examen de AGE 2026?" / "La convocatoria se publica en el BOE. 
Puedes ver las últimas novedades en nuestro blog."
"¿Se puede preparar AGE y Seguridad Social a la vez?" / "Sí, es la mejor opción. El 
75% del temario es idéntico. Descubre el Pack Doble en /preparar-age-y-seguridad-social/"

CTABanner al final: "¿Preparamos juntos tu oposición AGE?" / "Plazas limitadas 
por grupo. Escríbeme para saber las fechas del próximo grupo." / "Quiero 
información" → /contacto/

Enlazado interno obligatorio en el texto de la página (añadir estos enlaces de 
forma natural en el contenido):
Enlace a /preparar-age-y-seguridad-social/ con texto ancla: "¿Preparas también 
Seguridad Social? Aprovecha el temario común"
Enlace a /cursos-precios/
Enlace a /blog/temario-administrativo-estado-age-2026/ donde menciones el 
temario
Enlace a /blog/age-vs-seguridad-social/ donde compares las dos oposiciones

Prompt 3-C — Página Administrativo Seguridad Social C1

Crea la página src/pages/oposiciones-seguridad-social.astro para 
mcoposiciones.com.
BaseLayout props:

title: "Preparadora Oposiciones Administrativo Seguridad Social C1 2026 | MC 
Oposiciones"
description: "Prepara con Mª Carmen las oposiciones de Administrativo de la 
Seguridad Social (C1) 2026. 1.456 plazas, sin ofimática, examen 28 junio 2026. 
Clases online en directo con temario específico SS actualizado."
canonicalUrl: "https://mcoposiciones.com/oposiciones-seguridad-social/"

Schema JSON-LD: igual que la página AGE pero con name "Preparación 
Oposiciones Administrativo Seguridad Social C1 2026" y price 100.

Breadcrumbs: [{label: "Inicio", href: "/"}, {label: "Oposiciones Seguridad Social C1", 
href: ""}]

H1: "Oposiciones Administrativo Seguridad Social C1 — Preparación Online 2026"
H2: "¿Qué es el Cuerpo Administrativo de la Seguridad Social?"
Contenido: puesto en el INSS (Instituto Nacional de la Seguridad Social), 
Tesorería, CAISS (Centros de Atención e Información de la Seguridad Social) e ISM. 
Funciones: tramitación de prestaciones, cotización, atención al ciudadano. 
Sueldo: ~1.800€/mes neto. Horario administrativo con posibilidad de teletrabajo.

H2: "Convocatoria Seguridad Social 2026"
Datos destacados visualmente (tabla o fichas):
Plazas: 1.456 (turno libre)
Fecha del examen: 28 de junio de 2026
Titulación requerida: Bachillerato o equivalente
Edad mínima: 16 años
DATO CLAVE EN NEGRITA: "Sin fase de concurso — Solo cuenta la nota del 
examen. Sin méritos ni experiencia previa."
DATO CLAVE EN NEGRITA: "Sin prueba de ofimática — ventaja frente al 
Administrativo del Estado"

H2: "Cómo es el examen de Administrativo de la Seguridad Social"
Contenido:
Ejercicio único con dos partes realizadas en la misma sesión. Tiempo total: 120 
minutos
Primera parte: cuestionario de 70 preguntas tipo test (3 de reserva). Puntúa de 0 a 
50 puntos. Mínimo para superar: 25 puntos. Cubre el Temario General y Específico
Segunda parte: supuesto práctico de 15 preguntas tipo test (3 de reserva). Puntúa 
de 0 a 50 puntos. Mínimo para superar: 25 puntos. Solo sobre el Temario 
Específico (legislación de Seguridad Social)
Penalización: cada respuesta errónea descuenta 1/4 del valor de una correcta 
(más suave que en el AGE donde descuenta 1/3)
Ambas partes son eliminatorias: hay que superar cada una por separado
No hay prueba de ofimática en ninguna de las dos partes

H2: "Temario Administrativo Seguridad Social 2026"
Contenido:
Temario General (23 temas): Constitución Española, organización del Estado, 
Derecho Administrativo, procedimiento administrativo (Ley 39/2015 y 40/2015), 
función pública, Unión Europea, administración electrónica, transparencia, 
igualdad, protección de datos, Ministerio de Inclusión Seguridad Social y 
Migraciones
Temario Específico (13 temas): campo de aplicación y composición del sistema de 
SS, régimen general (afiliación, altas, bajas), cotización (bases, tipos, liquidación 
de cuotas), gestión recaudatoria en período voluntario, recaudación en vía 
ejecutiva, regímenes especiales, prestaciones de incapacidad temporal, 
nacimiento y cuidado de menor, jubilación (ordinaria, anticipada y demorada), 
desempleo, muerte y supervivencia, ingreso mínimo vital
Dato importante: "El temario general de SS coincide casi al 100% con los bloques 
I-V del AGE. Si ya preparas AGE, solo necesitas aprender los 13 temas específicos 
de SS"
Enlace de descarga: href="/resources/tema2ss.pdf" con texto "Descargar tema de 
muestra del Temario Específico SS (PDF gratuito)"

H2: "Cómo te prepara Mª Carmen para el Administrativo SS"
Énfasis especial en: preparación del supuesto práctico desde el primer mes (es la 
parte donde más opositores fallan), método para entender la LGSS como un ciclo 
(afiliación → cotización → prestación), esquemas de cálculo de bases de cotización 
y cuantías de prestaciones.

H2: "Opciones de preparación para Seguridad Social C1"
CourseCards iguales que en la página AGE.
Enlace al Pack: "¿También preparas AGE? Ahorra tiempo y dinero con el Pack 
Doble" → /preparar-age-y-seguridad-social/

H2: "Lo que dicen los alumnos de Seguridad Social"
TestimonialWidget

H2: "Preguntas frecuentes sobre las oposiciones de Seguridad Social"
FAQAccordion:
"¿Cuándo es el examen de Administrativo de Seguridad Social 2026?" / "El examen 
está fijado para el 28 de junio de 2026. Ambas partes del ejercicio se realizan el 
mismo día."
"¿Es difícil el supuesto práctico de Seguridad Social?" / "Es la parte que más 
preocupa a los opositores. En MC Oposiciones trabajamos el supuesto práctico 
desde el primer mes para que llegues al examen con confianza total. Lee nuestro 
artículo sobre cómo prepararlo."
"¿Se puede preparar Seguridad Social a la vez que AGE?" / "Sí, y es la opción más 
inteligente. El 75% del temario es el mismo. Ver el Pack Doble."
"¿Qué diferencia hay entre el temario de AGE y el de SS?" / "El temario general es 
prácticamente idéntico. La diferencia está en que el AGE tiene ofimática (30 
preguntas de Word, Excel...) y SS tiene un temario específico de legislación de 
Seguridad Social (13 temas)."

Enlazado interno obligatorio en el texto:
Enlace a /preparar-age-y-seguridad-social/ con texto "preparar AGE y Seguridad 
Social a la vez"
Enlace a /cursos-precios/
Enlace a /blog/supuesto-practico-administrativo-seguridad-social/
Enlace a /blog/age-vs-seguridad-social/

CTABanner al final.

Prompt 3-D — Pack AGE + Seguridad Social (Diferenciador Exclusivo)

Crea la página src/pages/preparar-age-y-seguridad-social.astro para 
mcoposiciones.com.
Esta es la página más diferenciadora del sitio. Ningún competidor tiene una 
propuesta equivalente.
BaseLayout props:

title: "Preparar AGE y Seguridad Social a la vez — Doble Oportunidad | MC 
Oposiciones"
description: "El 75% del temario de AGE y Seguridad Social es idéntico. Prepara las 
dos oposiciones simultáneamente con Mª Carmen y multiplica tus opciones de 
plaza. Pack Doble exclusivo."
canonicalUrl: "https://mcoposiciones.com/preparar-age-y-seguridad-social/"

Schema JSON-LD: dos objetos Course en un array, más un Offer para el pack 
combinado.

Breadcrumbs: [{label: "Inicio", href: "/"}, {label: "Pack AGE + Seguridad Social", href: 
""}]

H1: "Prepara AGE y Seguridad Social a la vez — Mismo temario, doble oportunidad 
de plaza"

Sección gancho (antes del primer H2):
Bloque visualmente destacado: "EL DATO QUE CAMBIA TODO: el 75% del temario 
de Administrativo del Estado y Administrativo de la Seguridad Social es IDÉNTICO". 
Explicación: los 23 temas del temario general de SS son prácticamente iguales a 
los bloques I-V del AGE. Solo la parte específica de SS (13 temas de legislación de 
Seguridad Social) y la ofimática del AGE son distintas. Conclusión: si preparas 
AGE, con solo 13 temas adicionales te presentas también a SS.

H2: "¿Qué incluye el Pack Doble AGE + Seguridad Social?"
Lista completa de lo que incluye:
Todo el temario general compartido (bloques I-V AGE = temario general SS)
Clases específicas de los 13 temas del Temario Específico de Seguridad Social
Clases de ofimática completa para la prueba del AGE (Word, Excel, Access, 
Outlook)
Test diferenciados por convocatoria: test AGE y test SS
Supuestos prácticos de ambas oposiciones
Simulacros cronometrados para cada examen (preparados para el formato exacto 
de cada uno)
Acceso hasta la fecha del último examen (el más tardío de los dos)
Plan de estudio adaptado para preparar ambas convocatorias de forma organizada

H2: "¿Cuánto ahorras preparando las dos a la vez?"
Tabla comparativa:
Preparar AGE por separado: 475€
Preparar SS por separado: 475€
Total preparando por separado: 950€
Pack Doble AGE + SS: [precio a definir, por ejemplo 699€]
Ahorro: [calcular diferencia]
Nota bajo la tabla: "Y además de dinero, ahorras tiempo. El temario compartido 
solo lo estudias una vez."

H2: "Fechas clave de ambas oposiciones en 2026"
Examen Administrativo Seguridad Social C1: 28 de junio de 2026
Examen Administrativo del Estado AGE C1: pendiente de publicación en el BOE 
(actualizar cuando esté disponible)
Nota: los exámenes son en fechas distintas — es perfectamente compatible 
presentarse a ambos

H2: "¿Cómo funciona la preparación combinada?"
Descripción del método: primero se consolida el temario general (aplica a las dos 
oposiciones), después se trabaja la parte específica de SS de forma paralela al 
temario de ofimática de AGE. La planificación está diseñada para que el ritmo sea 
sostenible.

H2: "¿Para quién es el Pack Doble?"
Tres perfiles ideales:
Opositores que ya están preparando AGE y quieren aprovechar para presentarse 
también a SS con poco esfuerzo adicional
Opositores que empiezan desde cero y quieren maximizar sus posibilidades de 
conseguir plaza en 2026
Personas que buscan estabilidad laboral y no quieren depender de una sola 
convocatoria

H2: "Preguntas frecuentes del Pack Doble"
FAQAccordion:
"¿Se puede llevar bien el ritmo de preparar las dos oposiciones a la vez?" / "Sí. El 
método está diseñado para ello. El temario compartido se estudia una sola vez. 
Solo hay que añadir las clases específicas de SS y la ofimática de AGE, que se 
trabajan de forma paralela y organizada."
"¿Los exámenes son el mismo día?" / "No. El examen de Seguridad Social está 
fijado para el 28 de junio de 2026. El de AGE tiene fecha distinta. Puedes 
presentarte a los dos."
"¿Cuántas horas semanales necesito?" / "Entre 18 y 25 horas semanales para 
llevar bien las dos preparaciones. Mª Carmen te diseña un plan personalizado."
"¿Qué pasa si apruebo la primera y no necesito presentarme a la segunda?" / 
"Estupendo, ese es el objetivo. El acceso al curso se mantiene hasta el examen de 
cada oposición independientemente."

CTABanner: "¿Quieres preparar las dos oposiciones con un solo curso?" / 
"Escríbeme y te explico cómo funciona el Pack Doble sin compromiso" / "Ver el 
Pack Doble" → /contacto/

Enlazado interno:
Enlace a /oposiciones-administrativo-estado/ donde menciones el AGE
Enlace a /oposiciones-seguridad-social/ donde menciones la SS
Enlace a /cursos-precios/ en la sección de precios

Prompt 3-E — Sobre Mª Carmen, Precios, Clases de Muestra y Contacto

Crea estas cuatro páginas para mcoposiciones.com:

PÁGINA 1: src/pages/preparadora-oposiciones.astro
BaseLayout:
title: "Mª Carmen — Preparadora de Oposiciones AGE y Seguridad Social | MC 
Oposiciones"
description: "Conoce a Mª Carmen, preparadora especializada en oposiciones de 
Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social (C1). 
Método riguroso, grupos reducidos y acompañamiento real."
canonicalUrl: "https://mcoposiciones.com/preparadora-oposiciones/"

Schema JSON-LD:
{
"@context": "https://schema.org",
"@type": "Person",
"name": "María Carmen [dejar espacio para el apellido]",
"jobTitle": "Preparadora de Oposiciones",
"worksFor": {"@type": "Organization", "name": "MC Oposiciones", "url": 
"https://mcoposiciones.com"},
"url": "https://mcoposiciones.com/preparadora-oposiciones/"
}

H1: "Hola, soy Mª Carmen — Preparadora especializada en AGE y Seguridad 
Social"
Estructura: foto profesional (eager loading), bio detallada con credenciales, 
descripción del método paso a paso (cómo son las clases, horarios, plataforma, 
materiales, test, simulacros, resolución de dudas, planificación mensual), 
sección de resultados y alumnos aprobados con TestimonialWidget, sección "Por 
qué confiar en MC Oposiciones" (27 reseñas, puntuación Google, años 
experiencia, temario actualizado), CTABanner.

PÁGINA 2: src/pages/cursos-precios.astro
BaseLayout:
title: "Cursos y Precios — Preparación Oposiciones AGE y Seguridad Social | MC 
Oposiciones"
description: "Consulta los cursos disponibles para preparar las oposiciones de 
Administrativo del Estado y Seguridad Social. Desde 100€/mes o 475€ pago único. 
Sin compromiso de permanencia."
canonicalUrl: "https://mcoposiciones.com/cursos-precios/"

H1: "Cursos disponibles y precios — Preparación AGE y Seguridad Social"
Cinco CourseCards con schema Offer en cada una:
Curso Mensual: 100€/mes, sin permanencia, para AGE o SS, incluye clases en 
directo y grabaciones
Curso Completo: 475€ pago único, para AGE o SS, acceso hasta el examen, el más 
económico si preparas más de 5 meses
Parte General: 250€, bloques I-V del AGE o temario general de SS
Parte Específica SS: 300€, solo los 13 temas específicos de Seguridad Social
Pack AGE + SS: precio especial (enlace a /preparar-age-y-seguridad-social/)
Tabla comparativa de qué incluye cada plan. Sección FAQ de precios con 
FAQAccordion.

PÁGINA 3: src/pages/clases-muestra.astro
BaseLayout:
title: "Clases de Muestra Gratuitas — Oposiciones AGE y Seguridad Social | MC 
Oposiciones"
description: "Accede gratuitamente a clases de muestra de las oposiciones de 
Administrativo del Estado y Seguridad Social. Comprueba el método de Mª 
Carmen antes de inscribirte."
canonicalUrl: "https://mcoposiciones.com/clases-muestra/"

H1: "Clases de muestra gratuitas — Comprueba cómo son las clases antes de 
inscribirte"
Usar el componente YouTubeEmbed (con lazy loading real, no iframe directo) para 
los tres vídeos:
Vídeo 1: ID -sMHGWjsHiI. Título: "Cómo hacer un supuesto práctico —
Oposiciones Seguridad Social". Categoría: SS
Vídeo 2: ID 22FfcbV_1X8. Título: "El Delegado y Subdelegado del Gobierno —
Temario AGE". Categoría: AGE y SS
Vídeo 3: ID cSq1_bZa_Cs. Título: "Las Bajas en el Régimen General — Temario SS". 
Categoría: SS
Para cada vídeo incluir un párrafo breve explicando a qué bloque del temario 
pertenece y por qué es importante para el examen.
CTABanner al final.

PÁGINA 4: src/pages/contacto.astro
BaseLayout:
title: "Contacto — MC Oposiciones | Preparadora AGE y Seguridad Social"
description: "Contacta con Mª Carmen para resolver tus dudas sobre las 
oposiciones de AGE o Seguridad Social. Respuesta en menos de 24 horas en días 
laborables."
canonicalUrl: "https://mcoposiciones.com/contacto/"
noindex: true (la página de contacto no necesita estar indexada)

H1: "Contacta con Mª Carmen"
Formulario de contacto conectado a Formspree 
(action="https://formspree.io/f/[ENDPOINT]", method="POST"):
Campos: Nombre (text, required), Email (email, required), Teléfono (tel, optional), 
Select "Oposición de interés" con opciones: "Administrativo del Estado (AGE C1)", 
"Administrativo Seguridad Social C1", "Pack AGE + Seguridad Social", "Tengo una 
duda general", Mensaje (textarea, required, mínimo 10 caracteres), Checkbox de 
aceptación de política de privacidad (required) con enlace a /politica-privacidad/
Botón de envío: "Enviar mensaje"
Mensaje de confirmación tras envío exitoso (manejarlo con JavaScript cambiando 
la visibilidad del formulario)
Datos de contacto alternativos: email mailto:infomcoposiciones@gmail.com y 
teléfono tel:+34642170664
Texto: "Respondo en menos de 24 horas en días laborables"