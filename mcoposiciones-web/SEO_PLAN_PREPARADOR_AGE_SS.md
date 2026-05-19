# Plan SEO - Preparadora AGE y Seguridad Social

Objetivo principal: aparecer en Google cuando una persona busque una preparadora o preparación online para Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1.

## 1. Posicionamiento SEO objetivo

### Keywords principales

- preparadora oposiciones administrativo del estado
- preparador oposiciones administrativo del estado
- preparadora AGE
- preparador AGE
- preparadora oposiciones seguridad social
- preparador oposiciones seguridad social
- preparar oposiciones administrativo del estado online
- preparar administrativo seguridad social online

### Keywords secundarias

- curso administrativo del estado C1
- curso administrativo seguridad social C1
- academia oposiciones AGE online
- academia oposiciones seguridad social online
- preparacion oposiciones AGE y seguridad social
- preparadora oposiciones online grupos reducidos
- oposiciones AGE 2026 preparacion
- oposiciones seguridad social 2026 preparacion

## 2. Arquitectura de landings

La web actual ya tiene una buena base, pero falta atacar con precision la intencion "busco preparador/preparadora".

### Landings existentes a reforzar

- `/`: marca + propuesta general.
- `/oposiciones-administrativo-estado/`: curso/preparacion AGE.
- `/oposiciones-seguridad-social/`: curso/preparacion Seguridad Social.
- `/preparadora-oposiciones/`: autoridad personal de Maria Carmen.
- `/preparar-age-y-seguridad-social/`: diferenciador estrategico.
- `/cursos-precios/`: conversion.

### Landings nuevas recomendadas

1. `/preparadora-age/`
   - Keyword principal: preparadora AGE.
   - Intencion: encontrar una persona que prepare Administrativo del Estado.
   - CTA: pedir informacion sobre grupos AGE.

2. `/preparadora-seguridad-social/`
   - Keyword principal: preparadora oposiciones Seguridad Social.
   - Intencion: encontrar preparacion especifica para SS.
   - CTA: pedir informacion sobre grupos SS.

3. `/preparador-oposiciones-administrativo-del-estado/`
   - Keyword principal: preparador oposiciones administrativo del estado.
   - Puede redirigirse o canonicalizarse hacia `/preparadora-age/` si no queremos duplicar contenido.

4. `/preparador-oposiciones-seguridad-social/`
   - Keyword principal: preparador oposiciones seguridad social.
   - Puede redirigirse o canonicalizarse hacia `/preparadora-seguridad-social/`.

Recomendacion: crear dos landings fuertes (`/preparadora-age/` y `/preparadora-seguridad-social/`) y trabajar variantes masculinas dentro del copy, no duplicar cuatro paginas si el contenido queda repetido.

## 3. Schema tecnico

### Lo que hay que mantener

- `WebSite`
- `WebPage`
- `EducationalOrganization`
- `Person`
- `Course`
- `Offer`
- `FAQPage`
- `BreadcrumbList`
- `BlogPosting`

### Lo que hay que corregir

- Evitar depender de `AggregateRating` sobre `Organization` para intentar conseguir estrellas en SERP.
- Google considera las reviews sobre la propia empresa como self-serving cuando la entidad controla la pagina. Esto puede hacer que ignore las estrellas para `Organization` o `LocalBusiness`.
- Mantener las reseñas visibles para conversion y confianza, pero no venderlas internamente como garantia de rich snippets.

### Implementacion recomendada

1. Crear un helper de schemas reutilizable.
2. Inyectar `@graph` por pagina en vez de objetos sueltos dispersos.
3. Home:
   - `WebSite`
   - `EducationalOrganization`
   - `Person`
   - `WebPage`
4. Paginas de oposicion:
   - `WebPage`
   - `Course`
   - `Offer`
   - `FAQPage`
   - `BreadcrumbList`
5. Blog:
   - `BlogPosting`
   - `BreadcrumbList`
   - `Person` como autora si procede.

## 4. Contenido necesario

### Mejoras en landings actuales

Cada landing principal debe responder con claridad:

- Para quien es esta preparacion.
- Que oposicion se prepara.
- Que incluye el curso.
- Como trabaja Maria Carmen.
- Diferencias frente a academia masificada.
- Prueba social visible.
- Preguntas frecuentes reales.
- CTA claro.

### Nuevos articulos de blog recomendados

Prioridad alta:

1. `Mejor preparador oposiciones AGE: como elegir bien`
2. `Preparador vs academia para Administrativo del Estado`
3. `Como preparar Administrativo del Estado desde cero`
4. `Como preparar Administrativo de la Seguridad Social desde cero`
5. `Preparar AGE online: ventajas, metodo y errores comunes`
6. `Preparar Seguridad Social online: guia completa`

Prioridad media:

7. `Cuantas horas estudiar para Administrativo del Estado`
8. `Como organizar el temario comun de AGE y Seguridad Social`
9. `Test Administrativo del Estado: como entrenarlos`
10. `Supuesto practico Seguridad Social: metodo de estudio`

## 5. Enlazado interno

### Paginas pilar

- `/oposiciones-administrativo-estado/`
- `/oposiciones-seguridad-social/`
- `/preparadora-age/`
- `/preparadora-seguridad-social/`
- `/preparar-age-y-seguridad-social/`
- `/cursos-precios/`

### Reglas de enlazado

- Todo articulo sobre AGE debe enlazar a `/oposiciones-administrativo-estado/` y, cuando encaje, a `/preparadora-age/`.
- Todo articulo sobre Seguridad Social debe enlazar a `/oposiciones-seguridad-social/` y, cuando encaje, a `/preparadora-seguridad-social/`.
- La home debe enlazar de forma visible a las landings de preparadora AGE y preparadora Seguridad Social.
- Las paginas de curso deben enlazar a clases de muestra, precios, contacto y reseñas.

## 6. SEO local y reputacion

Aunque el servicio sea online, Google Business puede ayudar a marca y confianza.

Tareas humanas:

- Completar Google Business Profile con la URL final cuando migremos.
- Publicar posts periodicos en Google Business sobre grupos, clases y convocatorias.
- Pedir reseñas a alumnos reales mencionando, de forma natural, AGE o Seguridad Social.
- Responder todas las reseñas con texto especifico, no generico.
- Unificar NAP: nombre, email, telefono y URL en web, Google Business y redes.

## 7. Autoridad externa

Objetivo: conseguir enlaces reales y menciones de calidad.

Ideas:

- Perfil en directorios educativos fiables.
- Colaboraciones con blogs de oposiciones.
- Apariciones en podcasts/canales de estudio.
- Recursos gratuitos enlazables: calendario de estudio, checklist AGE, checklist SS.
- YouTube como soporte SEO: videos con titulos alineados a las landings.

## 8. Medicion

Antes de migrar a produccion:

- Configurar Google Search Console.
- Configurar GA4 real.
- Enviar sitemap.
- Comprobar indexacion de robots y canonical.
- Validar rich results en las paginas principales.

KPIs:

- Impresiones por queries "preparadora AGE" y "preparadora Seguridad Social".
- Clics organicos a landings principales.
- CTR por pagina.
- Posicion media por keyword objetivo.
- Contactos desde organico.

## 9. Reparto de trabajo

### Puede hacerlo Codex

- Crear landings nuevas.
- Reescribir titles, descriptions, H1 y estructura H2.
- Limpiar e implementar schema con `@graph`.
- Mejorar enlazado interno.
- Crear articulos markdown base.
- Revisar sitemap, robots, canonical y OG.
- Preparar checklist de migracion SEO.
- Crear componentes reutilizables para bloques SEO.

### Debe hacerlo el humano

- Confirmar datos legales y fiscales.
- Confirmar precios finales, fechas y plazas.
- Confirmar si se pueden usar nombre, foto y testimonios concretos de alumnos.
- Revisar tono comercial y promesas.
- Dar acceso o datos definitivos de GA4 y Search Console.
- Pedir y gestionar reseñas reales.
- Validar que las afirmaciones sobre convocatorias estan actualizadas.

## 10. Orden de ejecucion recomendado

1. Limpiar schema actual y crear helper SEO.
2. Crear landings `/preparadora-age/` y `/preparadora-seguridad-social/`.
3. Reforzar las paginas existentes de AGE y SS con copy orientado a preparacion online y preparadora personal.
4. Mejorar enlazado interno desde home, blog y paginas de curso.
5. Crear 4 articulos SEO iniciales enfocados a "preparador/preparadora".
6. Validar build, sitemap y rich results.
7. Publicar en staging y revisar en Search Console tras migracion.
