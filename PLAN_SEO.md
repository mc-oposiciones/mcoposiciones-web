# PLAN_SEO.md - Auditoria SEO MC Oposiciones

Fecha de auditoria: 3 de junio de 2026  
Proyecto auditado: `mcoposiciones-web`  
Dominio objetivo: `https://mcoposiciones.com`  
Fuente principal: `mcoposiciones-web/ANALISIS_SEO.md`

## 0. Resumen ejecutivo

La web ya tiene una base tecnica razonable: Astro SSG, canonicals, Open Graph, Twitter Cards, sitemap manual, robots.txt, FAQ visible, breadcrumbs visibles con JSON-LD, imagenes con `alt`, `width` y `height`, y build correcto. El problema principal no es de indexabilidad basica, sino de alineacion SEO fina: las paginas no atacan de forma literal el mapa de keywords, varios title tags son demasiado largos, algunas landings compiten por una intencion parecida, y el schema podria estar mejor centralizado y ajustado a la especificacion actual.

Hallazgos criticos:

1. Los title, meta descriptions y H1 de casi todas las paginas objetivo no contienen literalmente la keyword principal asignada. Esto reduce claridad semantica y dificulta que Google identifique la pagina correcta para cada consulta.
2. Hay riesgo de canibalizacion entre paginas de oposicion y paginas de preparadora: `/oposiciones-administrativo-estado/` vs `/preparadora-age/`, y `/oposiciones-seguridad-social/` vs `/preparadora-seguridad-social/`.
3. `Organization` no esta garantizado desde el layout en todas las paginas; aparece en muchos grafos, pero no como capa global uniforme. Ademas, `Course` usa `courseMode` directamente, cuando Schema.org define `courseMode` para `CourseInstance`.
4. El blog tiene buenos articulos fundacionales, pero faltan piezas especificas sobre plazas/convocatorias, examen tipo test AGE, opositores que trabajan, temario comun y dudas transaccionales sobre preparador/a online.

Build verificado:

```bash
npm run build
```

Resultado observado: build correcto, 20 paginas estaticas generadas en `mcoposiciones-web/dist/`.

Estado git observado antes de crear este documento:

```text
 D mcoposiciones-web/SEO_PLAN_PREPARADOR_AGE_SS.md
 D mcoposiciones-web/SEO_URLS.md
?? mcoposiciones-web/ANALISIS_SEO.md
```

No se deben revertir esos cambios sin confirmacion del usuario.

## 1. Auditoria 1 - Arquitectura y canibalizacion

### 1.1 Inventario de URLs publicas

| URL | Tipo | Indexacion esperada | Title actual | Meta description actual | H1 actual | Keyword que parece atacar |
|---|---|---:|---|---|---|---|
| `/` | Home | Index | `Preparadora de Oposiciones AGE y Seguridad Social Online | MC Oposiciones` | `Preparadora online de oposiciones AGE y Seguridad Social C1 con Mª Carmen. Clases en directo, grupos reducidos y seguimiento real.` | `Prepara AGE y Seguridad Social con Mª Carmen` | preparadora online AGE y Seguridad Social |
| `/oposiciones-administrativo-estado/` | Landing oposicion | Index | `Preparadora Oposiciones Administrativo del Estado AGE C1 2026 | MC Oposiciones` | `Prepara AGE C1 2026 con Mª Carmen. Clases online en directo, 2.512 plazas, temario actualizado con ofimática y grupos reducidos.` | `Administrativo del Estado (AGE C1)` | oposiciones Administrativo Estado AGE C1 2026 |
| `/oposiciones-seguridad-social/` | Landing oposicion | Index | `Preparadora Oposiciones Administrativo Seguridad Social C1 2026 | MC Oposiciones` | `Prepara Seguridad Social C1 2026 con Mª Carmen. 1.056 plazas libres, examen 28 junio, clases online en directo y temario específico actualizado.` | `Administrativo de la Seguridad Social` | oposiciones Seguridad Social C1 2026 |
| `/preparar-age-y-seguridad-social/` | Producto diferencial | Index | `Preparar AGE y Seguridad Social a la vez | MC Oposiciones` | `Prepara AGE y Seguridad Social a la vez aprovechando el temario común. Pack conjunto con Mª Carmen: clases en directo, grupos reducidos y planificación unificada.` | `Prepara AGE y Seguridad Social a la vez` | preparar AGE y Seguridad Social a la vez |
| `/preparadora-age/` | Landing servicio/preparadora | Index | `Preparadora AGE Online | Administrativo del Estado C1 | MC Oposiciones` | `Prepara el AGE C1 con Mª Carmen, preparadora online especializada. Clases en directo, grupos reducidos, ofimática incluida y seguimiento real.` | `Preparadora AGE para Administrativo del Estado` | preparadora AGE online |
| `/preparadora-seguridad-social/` | Landing servicio/preparadora | Index | `Preparadora Seguridad Social Online | Administrativo C1 | MC Oposiciones` | `Prepara las oposiciones de Administrativo de la Seguridad Social con Mª Carmen. Clases en directo, temario actualizado 2026, supuesto práctico y grupos reducidos.` | `Preparadora de oposiciones de Seguridad Social` | preparadora Seguridad Social online |
| `/preparadora-oposiciones/` | Sobre Mª Carmen / E-E-A-T | Index | `Mª Carmen — Preparadora Online AGE y Seguridad Social | MC Oposiciones` | `Conoce a Mª Carmen, preparadora online de oposiciones AGE C1 y Seguridad Social C1. Clases en directo, grupos reducidos y seguimiento cercano.` | `Hola, opositores` | Mª Carmen preparadora oposiciones |
| `/blog/` | Hub contenido | Index | `Blog sobre Oposiciones AGE y Seguridad Social | MC Oposiciones` | `Artículos sobre las oposiciones de Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social. Temario, convocatorias, supuestos prácticos y consejos de preparación.` | `Blog Oposiciones` | blog oposiciones AGE Seguridad Social |
| `/cursos-precios/` | Comercial/precios | Index | `Cursos y Precios — Preparación Oposiciones AGE y Seguridad Social | MC Oposiciones` | `Consulta los precios y modalidades de preparación para AGE C1 y Seguridad Social con MC Oposiciones. Sin compromiso de permanencia. Grupos 2026 abiertos.` | `Planes y precios` | cursos y precios oposiciones AGE Seguridad Social |
| `/clases-muestra/` | Recursos gratuitos | Index | `Clases de Muestra Gratuitas — Oposiciones AGE y Seguridad Social | MC Oposiciones` | `Accede gratis a clases de muestra de las oposiciones AGE y Seguridad Social con Mª Carmen. Comprueba el método antes de inscribirte.` | `Clases de muestra gratuitas` | clases muestra oposiciones AGE Seguridad Social |
| `/blog/age-vs-seguridad-social/` | Blog | Index | `AGE o Seguridad Social: qué oposición preparar si buscas una plaza C1` | `Comparativa clara entre Administrativo del Estado y Administrativo de la Seguridad Social: temario, dificultad, perfil recomendado y cuándo preparar ambas.` | Igual que title | AGE o Seguridad Social |
| `/blog/como-elegir-preparadora-oposiciones-age-seguridad-social/` | Blog | Index | `Cómo elegir preparador de oposiciones AGE y Seguridad Social` | `Guía práctica para elegir preparador de oposiciones AGE o Seguridad Social: señales de confianza, método, seguimiento, materiales y preguntas antes de apuntarte.` | Igual que title | elegir preparador oposiciones AGE Seguridad Social |
| `/blog/cuanto-tarda-preparar-oposiciones-administrativo/` | Blog | Index | `Cuánto se tarda en preparar una oposición de Administrativo C1` | `Tiempo realista para preparar Administrativo del Estado o Seguridad Social C1 según tu base, horas disponibles, ritmo de estudio y tipo de preparación.` | Igual que title | cuanto tarda preparar oposicion administrativo C1 |
| `/blog/supuesto-practico-administrativo-seguridad-social/` | Blog | Index | `Supuesto práctico Seguridad Social C1: cómo prepararlo con método` | `Guía para preparar el supuesto práctico de Administrativo de la Seguridad Social C1: qué mide, cómo estudiar la parte específica y cómo entrenar casos.` | Igual que title | supuesto practico Seguridad Social C1 |
| `/blog/temario-administrativo-estado-age-2026/` | Blog | Index | `Temario Administrativo del Estado AGE C1: cómo estudiarlo sin perderte` | `Guía útil sobre el temario de Administrativo del Estado AGE C1: bloques, ofimática, temas más exigentes, forma de estudiar y errores que conviene evitar.` | Igual que title | temario Administrativo Estado AGE C1 |
| `/contacto/` | Contacto | Noindex | `Contacto — MC Oposiciones | Preparadora AGE y Seguridad Social` | `Contacta con Mª Carmen para resolver tus dudas sobre las oposiciones de AGE o Seguridad Social. Respuesta en menos de 24 horas en días laborables.` | `Contacta con Mª Carmen` | contacto marca |
| `/aviso-legal/` | Legal | Noindex | `Aviso Legal | MC Oposiciones` | `Aviso legal de MC Oposiciones: datos del titular, objeto del sitio, propiedad intelectual, responsabilidad y enlaces externos.` | `Aviso Legal` | legal |
| `/politica-privacidad/` | Legal | Noindex | `Política de Privacidad | MC Oposiciones` | `Política de privacidad de MC Oposiciones conforme al RGPD: responsable, datos tratados, finalidades, base legal, conservación, destinatarios y derechos.` | `Política de Privacidad` | privacidad |
| `/politica-cookies/` | Legal | Noindex | `Política de Cookies | MC Oposiciones` | `Política de cookies de MC Oposiciones: cookies técnicas, cookies analíticas de Google Analytics 4 y gestión del consentimiento.` | `Política de Cookies` | cookies |
| `/404/` / `/404.html` | Error | Noindex | `Página no encontrada | MC Oposiciones` | `La página que buscas no existe o ha cambiado de ubicación. Vuelve a las secciones principales de MC Oposiciones.` | `Vaya, te has perdido` | pagina error |
| `/resources/tema1age.pdf` | PDF recurso | Index en sitemap | Sin title HTML | Sin meta HTML | Sin H1 HTML | tema muestra AGE |
| `/resources/tema2ss.pdf` | PDF recurso | Index en sitemap | Sin title HTML | Sin meta HTML | Sin H1 HTML | tema muestra Seguridad Social |

Archivos publicos tecnicos:

| URL | Estado |
|---|---|
| `/sitemap.xml` | Generado por `src/pages/sitemap.xml.ts`; incluye rutas SEO, blog, clases muestra y PDFs; excluye contacto y legales. |
| `/robots.txt` | Permite rastreo general y desindexa por crawling `/contacto/`, `/politica-privacidad/`, `/aviso-legal/`, `/politica-cookies/`; declara sitemap. |

### 1.2 Diagnostico de canibalizacion

#### Par 1: `/oposiciones-administrativo-estado/` vs `/preparadora-age/`

Estado actual:

- `/oposiciones-administrativo-estado/` mezcla informacion de oposicion, plazas, precio, preparacion y CTA hacia `/preparadora-age/`.
- `/preparadora-age/` habla de preparacion, metodo, ofimatica, test, seguimiento y tambien enlaza de vuelta a la pagina de oposicion.
- Ambos titles empiezan con variantes de `Preparadora` y ambos contienen `Administrativo del Estado` o `AGE`.

Problema:

- Google puede interpretar ambas paginas como candidatas para consultas tipo `preparadora oposiciones administrativo estado`, `preparar AGE C1 online` o `oposiciones administrativo del estado preparadora`.
- La pagina de oposicion no domina aun la keyword asignada `preparar oposiciones administrativo del estado`.
- La landing de preparadora no domina aun `preparador AGE C1 online`.

Rol recomendado:

| URL | Rol SEO | Intencion | Debe contener | Debe evitar |
|---|---|---|---|---|
| `/oposiciones-administrativo-estado/` | Informacional + transaccional de oposicion | El usuario quiere saber como preparar Administrativo del Estado, plazas, temario, examen, precio y modalidad. | Convocatoria/plazas, requisitos, estructura examen, temario, ofimatica, modalidad MC, precios resumidos, FAQ de oposicion. | Exceso de contenido sobre biografia o comparativa preparadora vs academia. |
| `/preparadora-age/` | Transaccional de preparador/a | El usuario busca un preparador online concreto para AGE C1. | Metodo de Mª Carmen, clases en directo, grupos reducidos, seguimiento, como se resuelven dudas, experiencia, opiniones, CTA contacto. | Competir por `oposiciones administrativo del estado` como tema principal o repetir toda la estructura de convocatoria. |

Acciones concretas:

- Cambiar title/H1 de `/oposiciones-administrativo-estado/` para que empiece por `Preparar oposiciones administrativo...`.
- Cambiar title/H1 de `/preparadora-age/` para usar `Preparador AGE C1 online`.
- En `/oposiciones-administrativo-estado/`, reforzar H2 sobre plazas, temario y examen.
- En `/preparadora-age/`, reforzar H2 sobre clases en directo, grupos reducidos y seguimiento personal.
- Mantener interlinking cruzado, pero con anchors diferenciados:
  - Desde oposicion hacia preparadora: `preparador AGE C1 online con seguimiento`.
  - Desde preparadora hacia oposicion: `estructura de la oposicion Administrativo del Estado`.

#### Par 2: `/oposiciones-seguridad-social/` vs `/preparadora-seguridad-social/`

Estado actual:

- `/oposiciones-seguridad-social/` cubre plazas, fecha examen, temario especifico, supuesto practico y precios.
- `/preparadora-seguridad-social/` cubre metodo, temario, supuesto practico, seguimiento y CTA.
- Ambas comparten vocabulario muy parecido: `prepara Seguridad Social`, `temario`, `supuesto practico`, `grupos reducidos`.

Problema:

- La pagina de oposicion no contiene literalmente `preparar oposiciones seguridad social C1` en H1/title.
- La landing de preparadora usa femenino en title/H1, pero el mapa exige captar `preparador seguridad social online`.

Rol recomendado:

| URL | Rol SEO | Intencion | Debe contener | Debe evitar |
|---|---|---|---|---|
| `/oposiciones-seguridad-social/` | Informacional + transaccional de oposicion | El usuario busca preparar la oposicion C1, entender examen, plazas y temario. | Plazas 2026, examen, temario comun/especifico, supuesto practico, modalidades y precios. | Convertirse en pagina de marca personal. |
| `/preparadora-seguridad-social/` | Landing transaccional de preparador/a | El usuario busca preparador online para Seguridad Social. | Metodo, Mª Carmen, clases en directo, correccion de supuestos, grupos reducidos, opiniones. | Repetir todo el bloque de convocatoria y plazas como foco principal. |

Acciones concretas:

- `/oposiciones-seguridad-social/`: H1 `Preparar oposiciones Seguridad Social C1`.
- `/preparadora-seguridad-social/`: H1 `Preparador Seguridad Social online`.
- Usar anchors internos diferenciados:
  - `preparador seguridad social online con Mª Carmen`
  - `guia de la oposicion Seguridad Social C1`

### 1.3 Revision de slugs y redirecciones

| URL actual | Diagnostico | Recomendacion | Redireccion 301 |
|---|---|---|---|
| `/` | Correcta para home. | Mantener. | No aplica. |
| `/oposiciones-administrativo-estado/` | Muy buena: incluye la entidad principal. | Mantener. | No aplica. |
| `/oposiciones-seguridad-social/` | Correcta y clara. | Mantener. | No aplica. |
| `/preparar-age-y-seguridad-social/` | Muy alineada con la keyword diferencial. | Mantener. | No aplica. |
| `/preparadora-age/` | No usa masculino generico, pero aporta contexto femenino de marca y ya esta alineada con identidad. | Mantener para no perder coherencia de marca; compensar con title/H1 `preparador`. | No aplica. |
| `/preparadora-seguridad-social/` | Igual que anterior. | Mantener; compensar con title/H1 `preparador`. | No aplica. |
| `/preparadora-oposiciones/` | Generico pero util para E-E-A-T y marca personal. | Mantener. | No aplica. |
| `/blog/` | Generico pero estandar para hub. | Mantener. | No aplica. |
| `/cursos-precios/` | Generico, pero claro para navegacion y conversion. | Mantener; no forma parte del mapa de keywords principal. | No aplica. |
| `/clases-muestra/` | Generico. | Opcional futuro: `/clases-muestra-oposiciones-age-seguridad-social/`, pero no prioritario. | Solo si se cambia: `/clases-muestra/ -> /clases-muestra-oposiciones-age-seguridad-social/`. |

Conclusion: no se recomienda cambiar slugs core ahora. La prioridad es corregir metadatos, H1/H2 y diferenciacion de contenido sin introducir redirecciones innecesarias.

## 2. Auditoria 2 - Metadatos, encabezados y semantica de genero

### 2.1 Tabla comparativa actual por paginas del mapa

| URL | Keyword objetivo | Title actual | Long. | Meta actual | Long. | H1 actual | Primeros H2 | Primeros H3 | Desviacion principal |
|---|---|---|---:|---|---:|---|---|---|---|
| `/` | `preparar oposiciones AGE y seguridad social` | `Preparadora de Oposiciones AGE y Seguridad Social Online | MC Oposiciones` | 73 | `Preparadora online de oposiciones AGE y Seguridad Social C1 con Mª Carmen. Clases en directo, grupos reducidos y seguimiento real.` | 130 | `Prepara AGE y Seguridad Social con Mª Carmen` | `Elige tu oposición`; `Un método pensado para estudiar con orden`; `Opiniones de alumnos` | `AGE C1`; `Seguridad Social C1`; `AGE + SS` | Title largo y foco en `preparadora`, no en `preparar oposiciones`. |
| `/oposiciones-administrativo-estado/` | `preparar oposiciones administrativo del estado` | `Preparadora Oposiciones Administrativo del Estado AGE C1 2026 | MC Oposiciones` | 78 | `Prepara AGE C1 2026 con Mª Carmen. Clases online en directo, 2.512 plazas, temario actualizado con ofimática y grupos reducidos.` | 128 | `Administrativo del Estado (AGE C1)` | `Convocatoria AGE 2026`; `Cómo se prepara AGE en MC Oposiciones`; `Dudas comunes sobre AGE` | `Detalles técnicos del examen`; `Temario legislativo`; `Ofimática desde cero` | No contiene la keyword principal literal en title ni H1. |
| `/oposiciones-seguridad-social/` | `preparar oposiciones seguridad social C1` | `Preparadora Oposiciones Administrativo Seguridad Social C1 2026 | MC Oposiciones` | 80 | `Prepara Seguridad Social C1 2026 con Mª Carmen. 1.056 plazas libres, examen 28 junio, clases online en directo y temario específico actualizado.` | 144 | `Administrativo de la Seguridad Social` | `Convocatoria Seguridad Social 2026`; `Cómo se prepara Seguridad Social`; `Dudas sobre Seguridad Social` | `Estructura del examen`; `Temario específico`; `Supuesto práctico` | Title largo, keyword principal incompleta, H1 demasiado generico. |
| `/preparar-age-y-seguridad-social/` | `preparar AGE y seguridad social a la vez` | `Preparar AGE y Seguridad Social a la vez | MC Oposiciones` | 57 | `Prepara AGE y Seguridad Social a la vez aprovechando el temario común. Pack conjunto con Mª Carmen: clases en directo, grupos reducidos y planificación unificada.` | 162 | `Prepara AGE y Seguridad Social a la vez` | `Por qué tiene sentido preparar ambas`; `Cómo se organiza la preparación conjunta`; `Qué incluye el pack` | `Cómo se reparte el estudio`; `Base común una sola vez`; `Bloque propio de AGE` | Mejor pagina actual, pero description es larga y usa `Prepara`, no `Preparar`. |
| `/preparadora-age/` | `preparador AGE C1 online` | `Preparadora AGE Online | Administrativo del Estado C1 | MC Oposiciones` | 70 | `Prepara el AGE C1 con Mª Carmen, preparadora online especializada. Clases en directo, grupos reducidos, ofimática incluida y seguimiento real.` | 142 | `Preparadora AGE para Administrativo del Estado` | `¿Para quién es esta preparación?`; `Un método centrado en aprobar AGE`; `¿Preparación cercana o academia masificada?` | `Temario explicado`; `Ofimática AGE`; `Test y simulacros` | No captura masculino generico `preparador`; title largo. |
| `/preparadora-seguridad-social/` | `preparador seguridad social online` | `Preparadora Seguridad Social Online | Administrativo C1 | MC Oposiciones` | 72 | `Prepara las oposiciones de Administrativo de la Seguridad Social con Mª Carmen. Clases en directo, temario actualizado 2026, supuesto práctico y grupos reducidos.` | 162 | `Preparadora de oposiciones de Seguridad Social` | `¿Por qué preparar Seguridad Social?`; `Preparación específica para Seguridad Social`; `El supuesto práctico no se improvisa` | `Temario específico`; `Supuestos prácticos`; `Test por bloques` | No captura `preparador`; description larga. |
| `/preparadora-oposiciones/` | `preparadora de oposiciones AGE y seguridad social` | `Mª Carmen — Preparadora Online AGE y Seguridad Social | MC Oposiciones` | 70 | `Conoce a Mª Carmen, preparadora online de oposiciones AGE C1 y Seguridad Social C1. Clases en directo, grupos reducidos y seguimiento cercano.` | 142 | `Hola, opositores` | `Mi forma de preparar`; `Elige tu camino`; `Lo que dicen los alumnos` | `Explicar antes de memorizar`; `Practicar con criterio de examen`; `Ordenar el estudio semana a semana` | H1 no es SEO; title largo y no incluye `oposiciones` de forma prioritaria. |
| `/blog/` | `blog oposiciones AGE seguridad social` | `Blog sobre Oposiciones AGE y Seguridad Social | MC Oposiciones` | 62 | `Artículos sobre las oposiciones de Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social. Temario, convocatorias, supuestos prácticos y consejos de preparación.` | 181 | `Blog Oposiciones` | Posts como H2 | Sin H3 inicial | Title ligeramente largo; H1 demasiado generico; description muy larga. |

### 2.2 Metadatos optimizados propuestos

Nota sobre la regla de title: dos keywords exactas no caben con ` | MC Oposiciones` en 60 caracteres:

- `preparar oposiciones administrativo del estado | MC Oposiciones` = 63 caracteres.
- `preparadora de oposiciones AGE y seguridad social | MC Oposiciones` = 66 caracteres.

Decision recomendada: mantener title de 60 caracteres o menos y asegurar la keyword exacta en H1 y meta description.

| URL | Title optimizado | Long. | Meta description optimizada | Long. | H1 optimizado | Long. |
|---|---|---:|---|---:|---|---:|
| `/` | `Preparar oposiciones AGE y Seguridad Social | MC Oposiciones` | 60 | `Preparar oposiciones AGE y seguridad social online con Mª Carmen: clases en directo, grupos reducidos y plan conjunto claro. Pide orientación hoy.` | 146 | `Preparar oposiciones AGE y Seguridad Social` | 43 |
| `/oposiciones-administrativo-estado/` | `Preparar oposiciones administrativo Estado | MC Oposiciones` | 59 | `Preparar oposiciones administrativo del estado online con clases en directo, temario AGE C1 2026, ofimática y grupos reducidos. Consulta plazas hoy.` | 148 | `Preparar oposiciones administrativo del Estado` | 46 |
| `/oposiciones-seguridad-social/` | `Preparar oposiciones seguridad social C1 | MC Oposiciones` | 57 | `Preparar oposiciones seguridad social C1 con Mª Carmen: clases en directo, supuesto práctico, temario específico y grupos reducidos. Pide información.` | 150 | `Preparar oposiciones Seguridad Social C1` | 40 |
| `/preparar-age-y-seguridad-social/` | `Preparar AGE y Seguridad Social a la vez | MC Oposiciones` | 57 | `Preparar AGE y seguridad social a la vez con temario común, clases en directo, grupos reducidos y planificación conjunta. Valora el pack conjunto hoy.` | 150 | `Preparar AGE y Seguridad Social a la vez` | 40 |
| `/preparadora-age/` | `Preparador AGE C1 online | MC Oposiciones` | 41 | `Preparador AGE C1 online con clases en directo y grupos reducidos; Mª Carmen te acompaña con ofimática, test y seguimiento real. Pide información.` | 146 | `Preparador AGE C1 online con Mª Carmen` | 38 |
| `/preparadora-seguridad-social/` | `Preparador Seguridad Social online | MC Oposiciones` | 51 | `Preparador seguridad social online C1 con clases en directo y grupos reducidos; Mª Carmen guía temario, supuesto y seguimiento. Consulta tu caso.` | 145 | `Preparador Seguridad Social online` | 34 |
| `/preparadora-oposiciones/` | `Preparadora oposiciones AGE y SS | MC Oposiciones` | 49 | `Preparadora de oposiciones AGE y seguridad social online con Mª Carmen: clases en directo, grupos reducidos y seguimiento cercano. Conócela ahora.` | 146 | `Preparadora de oposiciones AGE y Seguridad Social` | 49 |
| `/blog/` | `Blog oposiciones AGE Seguridad Social | MC Oposiciones` | 54 | `Blog oposiciones AGE seguridad social con guías de temario, convocatorias, test, supuestos y consejos para preparar C1 online con método. Lee el blog.` | 150 | `Blog oposiciones AGE Seguridad Social` | 37 |

### 2.3 H2 y H3 optimizados propuestos

#### `/`

H2 recomendados:

- `Preparar oposiciones AGE y Seguridad Social online`
- `Preparación conjunta AGE Seguridad Social`
- `Preparador oposiciones online con grupos reducidos`
- `Academia oposiciones administrativo online`
- `Preguntas frecuentes sobre preparar oposiciones C1`

H3 recomendados:

- `AGE C1: Administrativo del Estado`
- `Seguridad Social C1`
- `AGE + Seguridad Social: temario común`
- `Clases en directo`
- `Seguimiento cercano`

#### `/oposiciones-administrativo-estado/`

H2 recomendados:

- `Convocatoria y plazas Administrativo del Estado 2026`
- `Temario administrativo del Estado y ofimática`
- `Cómo preparar AGE online con MC Oposiciones`
- `Dudas sobre preparar oposiciones administrativo del Estado`

H3 recomendados:

- `Oposiciones AGE C1 2026`
- `Test, supuesto práctico y ofimática`
- `Desde 100€/mes o 475€ el curso completo`
- `Preparar AGE y Seguridad Social a la vez`

#### `/oposiciones-seguridad-social/`

H2 recomendados:

- `Convocatoria oposiciones Seguridad Social 2026`
- `Supuesto práctico Seguridad Social C1`
- `Preparar administrativo Seguridad Social online`
- `Dudas sobre preparar oposiciones Seguridad Social C1`

H3 recomendados:

- `Temario específico de Seguridad Social`
- `Test y casos prácticos`
- `Preparar Seguridad Social si vienes de AGE`
- `Desde 100€/mes o 475€ el curso completo`

#### `/preparar-age-y-seguridad-social/`

H2 recomendados:

- `Preparación conjunta AGE Seguridad Social`
- `Temario común AGE y Seguridad Social`
- `Cómo doblar oposiciones administrativo sin duplicar estudio`
- `Dudas sobre preparar AGE y Seguridad Social a la vez`

H3 recomendados:

- `Base común una sola vez`
- `Bloque propio de AGE`
- `Bloque propio de Seguridad Social`
- `Pack AGE + Seguridad Social`

#### `/preparadora-age/`

H2 recomendados:

- `Preparador AGE C1 online con clases en directo`
- `Grupos reducidos oposiciones AGE`
- `Preparadora AGE online con seguimiento cercano`
- `Dudas sobre preparador AGE C1 online`

H3 recomendados:

- `Ofimática AGE desde cero`
- `Test y simulacros AGE C1`
- `Acompañamiento de Mª Carmen`

#### `/preparadora-seguridad-social/`

H2 recomendados:

- `Preparador Seguridad Social online con clases en directo`
- `Grupos reducidos oposiciones Seguridad Social`
- `Preparadora Seguridad Social online con seguimiento`
- `Dudas sobre preparador Seguridad Social online`

H3 recomendados:

- `Supuestos prácticos corregidos`
- `Temario específico de Seguridad Social`
- `Plan de estudio con Mª Carmen`

#### `/preparadora-oposiciones/`

H2 recomendados:

- `Mª Carmen, preparadora oposiciones AGE y Seguridad Social`
- `Preparadora online con seguimiento cercano`
- `Mi forma de preparar oposiciones C1`
- `Opiniones de alumnos de MC Oposiciones`

H3 recomendados:

- `Clases online en directo`
- `Grupos reducidos`
- `Preparación AGE y Seguridad Social`

#### `/blog/`

H2 recomendados:

- Usar posts como H2 esta bien, pero el H1 debe ser mas especifico.
- Añadir texto introductorio con `blog oposiciones AGE seguridad social`.
- Añadir bloques por categoria con H2:
  - `Guías oposiciones Administrativo del Estado`
  - `Consejos para preparar oposiciones C1`
  - `Supuesto práctico y temario Seguridad Social`

### 2.4 Semantica de genero

Reglas aplicables:

- En title y H1 de `/preparadora-age/` y `/preparadora-seguridad-social/`, usar `preparador` para capturar volumen de busqueda, manteniendo el slug femenino.
- En meta descriptions de paginas de producto, primera mencion con `preparador`; segunda mencion con `Mª Carmen` o `preparadora`.
- En cuerpo y CTAs, mantener femenino y marca personal: `tu preparadora`, `Mª Carmen`, `te acompaña`.
- En articulos de blog, usar `preparador/a` o masculino generico en title cuando sea natural.

Ejemplo aplicado:

```astro
<BaseLayout
  title="Preparador AGE C1 online | MC Oposiciones"
  description="Preparador AGE C1 online con clases en directo y grupos reducidos; Mª Carmen te acompaña con ofimática, test y seguimiento real. Pide información."
  canonicalUrl={canonicalUrl}
  schemaJson={schemaJson}
>
  <h1>Preparador AGE C1 online con Mª Carmen</h1>
</BaseLayout>
```

## 3. Auditoria 3 - Schema Markup y SEO tecnico

### 3.1 Estado actual de Schema JSON-LD

Implementacion actual:

- `BaseLayout.astro` acepta `schemaJson`, lo parsea y lo inyecta con `SchemaOrg`.
- `SchemaOrg.astro` renderiza `<script type="application/ld+json">`.
- `src/lib/schema.ts` contiene generadores para `Organization`, `Person`, `WebSite`, `WebPage`, `Course`, `FAQPage`, `ItemList`, `Offer`, `CollectionPage`.
- `Breadcrumbs.astro` genera `BreadcrumbList` automaticamente para las paginas que muestran migas visibles.

Tabla por URL principal:

| URL | Schemas detectados | Estado |
|---|---|---|
| `/` | `Organization`, `EducationalOrganization`, `Person`, `WebSite`, `WebPage`, `FAQPage` | Correcto; falta que Organization venga garantizado desde layout global. |
| `/oposiciones-administrativo-estado/` | `Organization`, `Person`, `WebPage`, `Course`, `FAQPage`, `BreadcrumbList` | Parseable; `courseMode` debe moverse a `CourseInstance`. |
| `/oposiciones-seguridad-social/` | `Organization`, `Person`, `WebPage`, `Course`, `FAQPage`, `BreadcrumbList` | Parseable; mismo ajuste `CourseInstance`. |
| `/preparar-age-y-seguridad-social/` | `Organization`, `Person`, `WebPage`, `Course`, `FAQPage`, `BreadcrumbList` | Parseable; mismo ajuste `CourseInstance`. |
| `/preparadora-age/` | `Organization`, `Person`, `WebPage`, `Course`, `FAQPage`, `BreadcrumbList` | Correcto tecnicamente; valorar si `Course` aqui duplica las paginas de curso. |
| `/preparadora-seguridad-social/` | `Organization`, `Person`, `WebPage`, `Course`, `FAQPage`, `BreadcrumbList` | Correcto tecnicamente; valorar si `Course` aqui duplica las paginas de curso. |
| `/preparadora-oposiciones/` | `Organization`, `Person`, `WebPage`, `BreadcrumbList` | Correcto para E-E-A-T. |
| `/blog/` | `Organization`, `Person`, `CollectionPage`, `ItemList`, `BreadcrumbList` | Correcto. |
| Posts blog | `Article`, `BreadcrumbList` | Correcto basico; se recomienda usar `BlogPosting` y referenciar `@id` de Organization/Person. |
| `/cursos-precios/` | `Organization`, `WebPage`, `ItemList`, multiples `Offer`, `BreadcrumbList` | Correcto comercialmente; falta `Person` si se quiere uniformidad de instructor/marca. |
| `/clases-muestra/` | `Organization`, `Person`, `WebPage`, `ItemList`, `BreadcrumbList` | Correcto. |
| Contacto/legales | `BreadcrumbList` | Correcto por noindex, aunque `Organization` global tambien podria aparecer. |

### 3.2 Schema Organization propuesto

Debe estar disponible en el layout base o fusionarse siempre en el grafo de cada pagina.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  "@id": "https://mcoposiciones.com/#organization",
  "name": "MC Oposiciones",
  "url": "https://mcoposiciones.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://mcoposiciones.com/logo-icon.webp",
    "width": 192,
    "height": 192
  },
  "description": "Preparación online para oposiciones de Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1 con clases en directo, grupos reducidos y seguimiento cercano.",
  "email": "infomcoposiciones@gmail.com",
  "telephone": "+34642170664",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-642-170-664",
    "contactType": "customer service",
    "availableLanguage": "es"
  },
  "sameAs": [
    "https://www.youtube.com/@mcoposiciones",
    "https://www.instagram.com/mcoposiciones",
    "https://www.tiktok.com/@mcoposiciones"
  ]
}
</script>
```

Implementacion recomendada:

```ts
// src/lib/schema.ts
export const organization = {
  '@type': ['Organization', 'EducationalOrganization'],
  '@id': 'https://mcoposiciones.com/#organization',
  name: 'MC Oposiciones',
  url: 'https://mcoposiciones.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://mcoposiciones.com/logo-icon.webp',
    width: 192,
    height: 192,
  },
  email: 'infomcoposiciones@gmail.com',
  telephone: '+34642170664',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34-642-170-664',
    contactType: 'customer service',
    availableLanguage: 'es',
  },
  sameAs: [
    'https://www.youtube.com/@mcoposiciones',
    'https://www.instagram.com/mcoposiciones',
    'https://www.tiktok.com/@mcoposiciones',
  ],
};
```

### 3.3 Schema Person propuesto para `/preparadora-oposiciones/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mcoposiciones.com/preparadora-oposiciones/#person",
  "name": "Mª Carmen",
  "jobTitle": "Preparadora de oposiciones AGE y Seguridad Social",
  "description": "Mª Carmen es preparadora online especializada en oposiciones de Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1, con clases en directo, grupos reducidos y seguimiento cercano.",
  "url": "https://mcoposiciones.com/preparadora-oposiciones/",
  "image": "https://mcoposiciones.com/foto-sobremi.webp",
  "worksFor": {
    "@id": "https://mcoposiciones.com/#organization"
  },
  "sameAs": [
    "https://www.youtube.com/@mcoposiciones",
    "https://www.instagram.com/mcoposiciones",
    "https://www.tiktok.com/@mcoposiciones"
  ]
}
</script>
```

Esta entidad debe reutilizarse como `instructor` en todos los `Course`.

### 3.4 Schema Course propuesto

#### `/oposiciones-administrativo-estado/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://mcoposiciones.com/oposiciones-administrativo-estado/#course",
  "name": "Preparación oposiciones Administrativo del Estado AGE C1",
  "description": "Preparación online para las oposiciones de Administrativo del Estado AGE C1 con clases en directo, temario actualizado, test, simulacros y ofimática.",
  "url": "https://mcoposiciones.com/oposiciones-administrativo-estado/",
  "provider": {
    "@id": "https://mcoposiciones.com/#organization"
  },
  "instructor": {
    "@id": "https://mcoposiciones.com/preparadora-oposiciones/#person"
  },
  "educationalLevel": "C1",
  "inLanguage": "es",
  "teaches": [
    "Administrativo del Estado AGE C1",
    "Temario administrativo del Estado",
    "Ofimática Microsoft 365",
    "Test y simulacros"
  ],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "@id": "https://mcoposiciones.com/oposiciones-administrativo-estado/#course-instance-online",
    "courseMode": "online",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "instructor": {
      "@id": "https://mcoposiciones.com/preparadora-oposiciones/#person"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "100",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://mcoposiciones.com/cursos-precios/#age"
  }
}
</script>
```

#### `/oposiciones-seguridad-social/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://mcoposiciones.com/oposiciones-seguridad-social/#course",
  "name": "Preparación oposiciones Seguridad Social C1",
  "description": "Preparación online para Administrativo de la Seguridad Social C1 con temario específico, test, supuesto práctico y clases en directo.",
  "url": "https://mcoposiciones.com/oposiciones-seguridad-social/",
  "provider": {
    "@id": "https://mcoposiciones.com/#organization"
  },
  "instructor": {
    "@id": "https://mcoposiciones.com/preparadora-oposiciones/#person"
  },
  "educationalLevel": "C1",
  "inLanguage": "es",
  "teaches": [
    "Administrativo de la Seguridad Social C1",
    "Temario específico de Seguridad Social",
    "Supuesto práctico Seguridad Social",
    "Test y simulacros"
  ],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "@id": "https://mcoposiciones.com/oposiciones-seguridad-social/#course-instance-online",
    "courseMode": "online",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "instructor": {
      "@id": "https://mcoposiciones.com/preparadora-oposiciones/#person"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "100",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://mcoposiciones.com/cursos-precios/#seguridad-social"
  }
}
</script>
```

#### `/preparar-age-y-seguridad-social/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://mcoposiciones.com/preparar-age-y-seguridad-social/#course",
  "name": "Preparación conjunta AGE y Seguridad Social C1",
  "description": "Preparación conjunta online para oposiciones de Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1, aprovechando el temario común.",
  "url": "https://mcoposiciones.com/preparar-age-y-seguridad-social/",
  "provider": {
    "@id": "https://mcoposiciones.com/#organization"
  },
  "instructor": {
    "@id": "https://mcoposiciones.com/preparadora-oposiciones/#person"
  },
  "educationalLevel": "C1",
  "inLanguage": "es",
  "teaches": [
    "Preparación conjunta AGE Seguridad Social",
    "Temario común AGE y Seguridad Social",
    "Administrativo del Estado AGE C1",
    "Administrativo de la Seguridad Social C1"
  ],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "@id": "https://mcoposiciones.com/preparar-age-y-seguridad-social/#course-instance-online",
    "courseMode": "online",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "instructor": {
      "@id": "https://mcoposiciones.com/preparadora-oposiciones/#person"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "150",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://mcoposiciones.com/cursos-precios/#pack-age-ss"
  }
}
</script>
```

### 3.5 FAQPage exacto por pagina

Nota importante: Google Search Central indica que el rich result visual de FAQ deja de aparecer en Google Search desde el 7 de mayo de 2026. Recomendacion: mantener `FAQPage` como estructura semantica y ayuda para comprension de entidades, pero no prometer rich snippets FAQ.

#### Home `/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://mcoposiciones.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo preparar AGE y Seguridad Social a la vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Una parte importante del temario es común, por eso puede ser eficiente preparar ambas oposiciones con una planificación conjunta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Las clases son en directo o grabadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las clases son en directo por videoconferencia y quedan grabadas para que puedas repasarlas si no puedes asistir o quieres reforzar un tema."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo necesito dedicar por semana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de tu punto de partida y de la fecha objetivo, pero lo habitual es trabajar con una planificación semanal realista y sostenida."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué modalidad me conviene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes elegir mensual, curso completo, módulos o preparación conjunta. Si tienes dudas, lo más razonable es consultar tu caso antes de inscribirte."
      }
    }
  ]
}
</script>
```

#### `/oposiciones-administrativo-estado/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://mcoposiciones.com/oposiciones-administrativo-estado/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo se tarda en preparar el AGE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de tu punto de partida, constancia y disponibilidad semanal. Lo importante es trabajar con una planificación realista, mantener repasos y entrenar test, supuestos y ofimática desde el inicio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito saber informática para presentarme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No necesitas saber de antemano. La parte de ofimática (Word, Excel, Access) se trabaja desde cero durante la preparación. Muchos alumnos la aprenden durante el curso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo es el examen de AGE 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La convocatoria se publica en el BOE. Puedes ver las últimas novedades en nuestro blog."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede preparar AGE y Seguridad Social a la vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Una parte importante del temario es común, por eso puede tener sentido preparar ambas si quieres ampliar opciones sin duplicar todo el estudio."
      }
    }
  ]
}
</script>
```

#### `/oposiciones-seguridad-social/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://mcoposiciones.com/oposiciones-seguridad-social/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuándo es el examen de Administrativo de Seguridad Social 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El examen está fijado para el 28 de junio de 2026. Ambas partes del ejercicio se realizan el mismo día."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es difícil el supuesto práctico de Seguridad Social?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es la parte que más preocupa a los opositores. En MC Oposiciones trabajamos el supuesto práctico desde el primer mes para que llegues al examen con confianza total."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede preparar Seguridad Social a la vez que AGE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Es una opción muy interesante porque una parte importante del temario se aprovecha entre ambas oposiciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre el temario de AGE y el de SS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El temario general es el mismo en gran parte. La diferencia principal es que AGE incluye ofimática y Seguridad Social tiene temario específico y supuesto práctico propio."
      }
    }
  ]
}
</script>
```

#### `/preparar-age-y-seguridad-social/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://mcoposiciones.com/preparar-age-y-seguridad-social/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Se puede llevar bien el ritmo de preparar las dos oposiciones a la vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, siempre que exista una planificación realista. El temario común se estudia una sola vez y después se separan los bloques propios de AGE y Seguridad Social."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas horas semanales necesito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo importante es contar con una disponibilidad estable y una planificación realista. El pack se organiza para aprovechar el temario común y separar con claridad los bloques propios de AGE y Seguridad Social."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si más adelante quiero centrarme solo en una?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Se puede reajustar el plan. La preparación conjunta parte de una base común, así que el trabajo inicial no se pierde aunque después decidas priorizar AGE o Seguridad Social."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es mejor preparar ambas o elegir una sola?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preparar ambas puede ampliar opciones, aprovechar mejor el temario común y darte más oportunidades para conseguir una plaza."
      }
    }
  ]
}
</script>
```

### 3.6 BreadcrumbList

Estado actual: `Breadcrumbs.astro` ya genera `BreadcrumbList` para todas las paginas que muestran migas visibles.

Snippet actual valido:

```astro
const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href ? new URL(item.href, 'https://mcoposiciones.com').toString() : undefined,
  })),
};
```

Rutas con breadcrumbs visibles y JSON-LD correspondiente:

| URL | Breadcrumbs visibles |
|---|---|
| `/oposiciones-administrativo-estado/` | Inicio > Oposiciones AGE C1 |
| `/oposiciones-seguridad-social/` | Inicio > Oposiciones Seguridad Social C1 |
| `/preparar-age-y-seguridad-social/` | Inicio > Pack AGE + Seguridad Social |
| `/preparadora-age/` | Inicio > Preparadora AGE |
| `/preparadora-seguridad-social/` | Inicio > Preparadora Seguridad Social |
| `/preparadora-oposiciones/` | Inicio > Preparadora de oposiciones |
| `/blog/` | Inicio > Blog |
| `/blog/[slug]/` | Inicio > Blog > H1 del articulo |
| `/cursos-precios/` | Inicio > Cursos y precios |
| `/clases-muestra/` | Inicio > Clases de muestra |
| `/contacto/` | Inicio > Contacto |
| `/aviso-legal/` | Inicio > Aviso legal |
| `/politica-privacidad/` | Inicio > Politica de privacidad |
| `/politica-cookies/` | Inicio > Politica de cookies |

Ejemplo recomendado para `/oposiciones-administrativo-estado/`:

```html
<script type="application/ld+json">
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
      "name": "Oposiciones AGE C1"
    }
  ]
}
</script>
```

### 3.7 SEO tecnico

#### Canonical

Estado:

- Canonical presente en todas las paginas renderizadas.
- `BaseLayout.astro` lo inyecta siempre mediante prop `canonicalUrl`.
- Contacto, legales y 404 tambien tienen canonical, pero estan `noindex, nofollow`, por lo que no es un problema.

Accion:

- Mantener.
- Revisar que toda pagina futura pase `canonicalUrl`.

#### Robots

Estado:

- `BaseLayout.astro` usa `noindex` y variable de entorno staging.
- Contacto y legales estan `noindex, nofollow`.
- Robots.txt bloquea contacto y legales.
- Sitemap no incluye contacto ni legales.

Accion:

- Correcto.
- Si se quiere conservar PageRank interno hacia contacto/legales, valorar `noindex, follow` en vez de `noindex, nofollow`. No es urgente.

#### Imagenes

Estado:

- No se detectan imagenes HTML finales sin `alt`, `width` o `height`.
- `Navbar.astro` carga el logo con `loading="eager"` en todas las paginas.
- `blog/[slug].astro` carga el avatar de Mª Carmen con `loading="eager"` en todos los posts.
- Las imagenes hero de home y sobre mi cargan correctamente eager y con prioridad.
- `YouTubeEmbed.astro` usa miniatura lazy con dimensiones.

Problemas:

- La regla interna del proyecto dice: todas las imagenes excepto hero deben tener `loading="lazy"`.
- El logo del navbar podria mantenerse `eager` por ser LCP secundario/nav global, pero estrictamente incumple la regla.
- El avatar de blog deberia ser `loading="lazy"` salvo que se justifique como above the fold. En posts suele estar arriba, pero no es hero principal.

Accion:

```astro
<!-- Navbar.astro: si se aplica la regla estricta -->
<img
  src="/logo-icon.webp"
  alt="MC Oposiciones - Preparadora AGE y Seguridad Social Online"
  width="192"
  height="192"
  loading="lazy"
  decoding="async"
  class="h-11 w-11 object-contain md:h-12 md:w-12"
/>
```

Para posts:

```astro
<img
  src="/foto-perfil-blog.webp"
  alt="Mª Carmen, preparadora de oposiciones AGE y Seguridad Social"
  width="112"
  height="112"
  loading="lazy"
  class="h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm md:h-16 md:w-16"
/>
```

#### Encabezados

Estado:

- El HTML final tiene exactamente un H1 por pagina.
- No se detectan multiples H1.
- La jerarquia principal es razonable, aunque componentes como footer y CTABanner añaden H2 globales.

Problema:

- H1 de varias paginas no contiene la keyword objetivo.
- Algunos H2 actuales son utiles para UX, pero poco orientados a keywords de soporte.

Accion:

- Cambiar H1 segun tabla de metadatos.
- Cambiar al menos dos H2 por pagina de producto para incluir keywords de soporte.

#### Open Graph y Twitter Cards

Estado:

- Estan configurados globalmente en `BaseLayout.astro`.
- `og:title` y `twitter:title` copian `title`.
- `og:description` y `twitter:description` copian `description`.
- `og:image` por defecto es `/og-default.webp`.

Problema:

- Copiar title/description no es incorrecto, pero desaprovecha mensajes sociales.

Accion recomendada:

```astro
interface Props {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | string;
  schemaJson?: string;
  noindex?: boolean;
}

const {
  title,
  description,
  canonicalUrl,
  ogTitle = title,
  ogDescription = description,
  ogImage = '/og-default.webp',
  ogType = 'website',
  schemaJson = '',
  noindex = false,
} = Astro.props;
```

Y sustituir:

```astro
<meta property="og:title" content={ogTitle} />
<meta property="og:description" content={ogDescription} />
<meta name="twitter:title" content={ogTitle} />
<meta name="twitter:description" content={ogDescription} />
```

## 4. Auditoria 4 - Huecos de contenido en el blog

### 4.1 Articulos actuales

| URL | Titulo actual | Keyword principal aparente | Intencion |
|---|---|---|---|
| `/blog/age-vs-seguridad-social/` | `AGE o Seguridad Social: qué oposición preparar si buscas una plaza C1` | `AGE o Seguridad Social` / `qué oposición preparar AGE Seguridad Social` | Comparativa |
| `/blog/como-elegir-preparadora-oposiciones-age-seguridad-social/` | `Cómo elegir preparador de oposiciones AGE y Seguridad Social` | `preparador oposiciones AGE Seguridad Social` | Transaccional-informacional |
| `/blog/cuanto-tarda-preparar-oposiciones-administrativo/` | `Cuánto se tarda en preparar una oposición de Administrativo C1` | `cuánto se tarda en preparar oposición Administrativo C1` | Informacional |
| `/blog/supuesto-practico-administrativo-seguridad-social/` | `Supuesto práctico Seguridad Social C1: cómo prepararlo con método` | `supuesto práctico Seguridad Social C1` | Informacional |
| `/blog/temario-administrativo-estado-age-2026/` | `Temario Administrativo del Estado AGE C1: cómo estudiarlo sin perderte` | `temario Administrativo del Estado AGE C1` | Informacional |

Diagnostico:

- Buen arranque de cluster.
- Falta contenido de convocatorias/plazas.
- Falta pieza especifica sobre examen tipo test de AGE.
- Falta contenido para opositores que trabajan.
- Falta articulo dedicado al temario comun AGE + Seguridad Social.
- Falta pieza transaccional sobre que debe ofrecer un preparador/a online.

### 4.2 Ocho articulos nuevos propuestos

| # | Titulo SEO | Slug sugerido | Keyword principal | Intencion | Resumen |
|---:|---|---|---|---|---|
| 1 | `AGE vs Seguridad Social: temario y examen` | `/blog/age-vs-seguridad-social-temario-examen/` | `AGE vs Seguridad Social temario examen` | Comparativa | Comparativa mas especifica que el articulo actual, centrada en bloques comunes, diferencias de examen, ofimatica AGE y supuesto de Seguridad Social. Debe enlazar al pack conjunto y evitar duplicar el enfoque general ya publicado. |
| 2 | `Examen tipo test AGE C1: cómo prepararlo` | `/blog/examen-tipo-test-age-c1/` | `examen tipo test AGE C1` | Informacional | Explicar estructura del test, gestion del tiempo, tecnicas de descarte, errores habituales y simulacros. Relevante porque AGE es una pagina core y la busqueda de examen/test tiene alta intencion de preparacion. |
| 3 | `Supuesto práctico Seguridad Social: errores C1` | `/blog/errores-supuesto-practico-seguridad-social-c1/` | `errores supuesto práctico Seguridad Social C1` | Informacional | Complementa el articulo actual de guia con errores concretos: mala lectura, no detectar materia, confundir plazos, memorizar sin aplicar y no corregir razonadamente. Debe enlazar a la preparacion de Seguridad Social. |
| 4 | `Plazas AGE C1 2026: convocatoria y consejos` | `/blog/plazas-age-c1-2026-convocatoria/` | `plazas AGE C1 2026` | Informacional | Articulo actualizable sobre plazas, convocatoria, fuentes oficiales, lectura del BOE y como adaptar el estudio. Debe incluir fecha de revision y enlaces a pagina AGE. |
| 5 | `Plazas Seguridad Social 2026: guía C1` | `/blog/plazas-seguridad-social-2026-c1/` | `plazas Seguridad Social 2026 C1` | Informacional | Cubrir plazas libres/promocion interna, calendario, examen, lectura de convocatoria y preparacion del supuesto. Debe enlazar a Seguridad Social y pack conjunto. |
| 6 | `Cómo estudiar oposiciones trabajando` | `/blog/como-estudiar-oposiciones-trabajando/` | `estudiar oposiciones trabajando` | Informacional | Guia para opositores con jornada laboral: bloques semanales, repasos, clases grabadas, recuperacion de atrasos y expectativas realistas. Muy alineado con grupos reducidos y seguimiento. |
| 7 | `Temario común AGE y Seguridad Social: guía` | `/blog/temario-comun-age-seguridad-social/` | `temario común AGE y Seguridad Social` | Informacional-comparativa | Explicar que bloques se aprovechan, que partes no se duplican y donde empiezan las diferencias. Es una pieza clave para empujar el producto diferencial de preparacion conjunta. |
| 8 | `Preparador/a AGE online: qué debe ofrecer` | `/blog/preparador-age-online-que-debe-ofrecer/` | `preparador AGE online` | Transaccional | Articulo orientado a usuarios que ya buscan contratar. Debe cubrir clases en directo, material actualizado, ofimatica, test, seguimiento, grupos reducidos y preguntas antes de apuntarse. |

Reglas de contenido para los nuevos articulos:

- Minimo 1.500 palabras cuando se desarrollen.
- Frontmatter completo segun `src/content.config.ts`.
- Title SEO maximo 60 caracteres.
- Usar `preparador/a` o masculino generico en titulos cuando busque captar volumen.
- Mantener femenino y marca personal en cuerpo y CTAs: `Mª Carmen`, `tu preparadora`.
- Añadir enlaces internos hacia:
  - `/oposiciones-administrativo-estado/`
  - `/oposiciones-seguridad-social/`
  - `/preparar-age-y-seguridad-social/`
  - `/preparadora-oposiciones/`
  - `/cursos-precios/`

## 5. Auditoria 5 - Informe ejecutivo de cierre

### 5.1 Hallazgos criticos

1. **Metadatos y H1 no alineados con keywords objetivo.**  
   Las paginas principales no contienen literalmente sus keywords asignadas en title, meta description y H1. Esto reduce la relevancia exacta para consultas como `preparar oposiciones administrativo del estado` o `preparador seguridad social online`.

2. **Titles demasiado largos.**  
   Home, paginas de oposicion, landings de preparadora, sobre mi y blog superan o rozan el limite recomendado. Esto aumenta riesgo de truncamiento y diluye la keyword principal.

3. **Canibalizacion parcial entre paginas de oposicion y paginas de preparadora.**  
   Las parejas AGE y Seguridad Social comparten demasiados terminos. Deben diferenciarse por intencion: pagina de oposicion vs pagina de preparador/a.

4. **Schema correcto pero no plenamente optimizado.**  
   JSON-LD parsea, pero `Organization` no esta garantizado en todo el sitio desde `BaseLayout`, y `Course` deberia usar `hasCourseInstance` para `courseMode`.

### 5.2 Plan de mejoras priorizado

| Prioridad | Accion | Pagina/archivo afectado | Impacto esperado | Esfuerzo |
|---:|---|---|---|---|
| 1 | Actualizar title, meta description y H1 de las 8 paginas del mapa. | `src/pages/*.astro`, `src/pages/blog/index.astro` | Alto | Bajo |
| 2 | Diferenciar contenidos entre paginas de oposicion y paginas de preparadora. | AGE y Seguridad Social, 4 landings | Alto | Medio |
| 3 | Reescribir H2/H3 para incorporar keywords de soporte. | 8 paginas objetivo | Alto | Bajo |
| 4 | Corregir `Course` schema con `hasCourseInstance`. | `src/lib/schema.ts` | Medio-Alto | Bajo |
| 5 | Centralizar `Organization` global o fusionarlo siempre en los grafos. | `BaseLayout.astro`, `src/lib/schema.ts` | Medio-Alto | Medio |
| 6 | Crear los 8 articulos nuevos del cluster. | `src/content/blog/` | Alto | Alto |
| 7 | Ajustar OG/Twitter para permitir textos sociales especificos. | `BaseLayout.astro` | Medio | Bajo |
| 8 | Revisar `loading="eager"` de logo/avatar segun regla interna. | `Navbar.astro`, `blog/[slug].astro` | Medio | Bajo |
| 9 | Mejorar alt del avatar blog a una variante mas keyword-rich. | `blog/[slug].astro` | Bajo-Medio | Bajo |
| 10 | Revisar si `Course` debe existir tambien en `/preparadora-age/` y `/preparadora-seguridad-social/` o solo en paginas de curso. | `src/lib/schema.ts`, paginas preparadora | Medio | Bajo |
| 11 | Cambiar articulos de blog de `Article` a `BlogPosting` con `@id` referenciados. | `blog/[slug].astro` | Medio | Bajo |
| 12 | Añadir fecha de actualizacion visible en posts evergreen/convocatorias. | Blog | Medio | Medio |
| 13 | Revisar uso de `noindex, nofollow` en legales/contacto; valorar `noindex, follow`. | `BaseLayout.astro` o props | Bajo | Bajo |
| 14 | Revisar exposicion de claves EmailJS y restricciones del servicio. | `src/pages/contacto.astro`, EmailJS dashboard | Seguridad/abuso | Medio |
| 15 | Mantener sitemap sincronizado con nuevos posts. | `src/pages/sitemap.xml.ts` | Medio | Bajo |

### 5.3 Quick wins

Acciones implementables en menos de una hora:

1. Cambiar title, description y H1 de `/preparar-age-y-seguridad-social/`, `/preparadora-age/` y `/preparadora-seguridad-social/`.
2. Sustituir dos H2 por pagina de producto para incluir keywords de soporte.
3. Cambiar `courseMode: 'online'` por `hasCourseInstance` en los generadores de `Course`.
4. Ajustar meta description de `/blog/` y H1 `Blog oposiciones AGE Seguridad Social`.
5. Cambiar `ogTitle`/`ogDescription` opcionales en `BaseLayout`.

### 5.4 Problemas tecnicos adicionales

| Problema | Riesgo | Recomendacion |
|---|---|---|
| Claves EmailJS expuestas en cliente (`service_id`, `template_id`, `user_id`). | Posible abuso del endpoint si no hay restricciones de dominio/rate limit en EmailJS. | Verificar restricciones en EmailJS, captcha o backend proxy si aumenta spam. |
| Cloudflare beacon y Google Analytics hardcodeados. | No es secreto, pero conviene documentar IDs. | Mantener si esta aprobado; usar variables de entorno si se replica el proyecto. |
| `FAQPage` puede no generar rich results en Google desde mayo de 2026. | Expectativas incorrectas de SERP. | Mantener como semantica, no venderlo como rich snippet. |
| PDFs en sitemap sin metadatos HTML. | Pueden indexarse con poco contexto. | Si se quieren posicionar, crear landing HTML por recurso y enlazar el PDF. |
| Build genera 20 paginas y los archivos `dist/` estan ignorados. | Correcto. | Mantener. |

## 6. Snippets de aplicacion rapida

### 6.1 Ejemplo de cambio en `/oposiciones-administrativo-estado/`

```astro
<BaseLayout
  title="Preparar oposiciones administrativo Estado | MC Oposiciones"
  description="Preparar oposiciones administrativo del estado online con clases en directo, temario AGE C1 2026, ofimática y grupos reducidos. Consulta plazas hoy."
  canonicalUrl="https://mcoposiciones.com/oposiciones-administrativo-estado/"
  schemaJson={schemaJson}
>
  <h1 class="mt-4 text-4xl font-extrabold leading-tight text-primary md:text-6xl">
    Preparar oposiciones administrativo del Estado
  </h1>
</BaseLayout>
```

### 6.2 Ejemplo de cambio en `/oposiciones-seguridad-social/`

```astro
<BaseLayout
  title="Preparar oposiciones seguridad social C1 | MC Oposiciones"
  description="Preparar oposiciones seguridad social C1 con Mª Carmen: clases en directo, supuesto práctico, temario específico y grupos reducidos. Pide información."
  canonicalUrl="https://mcoposiciones.com/oposiciones-seguridad-social/"
  schemaJson={schemaJson}
>
  <h1 class="mt-4 text-4xl font-extrabold leading-tight text-primary md:text-6xl">
    Preparar oposiciones Seguridad Social C1
  </h1>
</BaseLayout>
```

### 6.3 Ejemplo de helper para CourseInstance

```ts
function createOnlineCourseInstance(url: string) {
  return {
    '@type': 'CourseInstance',
    '@id': `${url}#course-instance-online`,
    courseMode: 'online',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    instructor: { '@id': `${siteUrl}/preparadora-oposiciones/#person` },
  };
}
```

Uso:

```ts
{
  '@type': 'Course',
  '@id': `${url}#course`,
  name: courseName,
  description: courseDescription,
  provider: { '@id': `${siteUrl}/#organization` },
  instructor: { '@id': `${siteUrl}/preparadora-oposiciones/#person` },
  hasCourseInstance: createOnlineCourseInstance(url),
  inLanguage: 'es',
  url,
}
```

## 7. Plan de verificacion

Despues de implementar cambios en fases posteriores:

```bash
npm run build
```

Verificaciones manuales:

- Confirmar un unico H1 por pagina.
- Confirmar canonical absoluto correcto.
- Confirmar `robots`:
  - `index, follow` en paginas SEO.
  - `noindex, nofollow` o `noindex, follow` en contacto/legales, segun decision.
- Confirmar JSON-LD parseable en `dist/**/*.html`.
- Confirmar que ninguna imagen pierde `alt`, `width` o `height`.
- Confirmar que los title de las paginas objetivo tienen 60 caracteres o menos.
- Confirmar meta descriptions entre 145 y 155 caracteres.
- Validar schemas con Schema.org Validator.
- Validar tipos soportados por Google con Rich Results Test.

Script de auditoria recomendado:

```js
const fs = require('fs');
const path = require('path');
const root = path.resolve('dist');

function walk(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(file));
    else if (entry.name.endsWith('.html')) out.push(file);
  }
  return out;
}

for (const file of walk(root)) {
  const html = fs.readFileSync(file, 'utf8');
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  const hasCanonical = /<link\s+rel="canonical"/i.test(html);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];

  for (const schema of schemas) {
    JSON.parse(schema[1]);
  }

  if (h1Count !== 1 || !hasCanonical) {
    console.log({ file, h1Count, hasCanonical });
  }
}
```

## 8. Fuentes consultadas

- Schema.org `courseMode`: https://schema.org/courseMode
- Schema.org `CourseInstance`: https://schema.org/CourseInstance
- Google Course structured data: https://developers.google.com/search/docs/appearance/structured-data/course
- Google FAQPage structured data: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Google cambios en FAQ rich results: https://developers.google.com/search/blog/2023/08/howto-faq-changes
