## FASE 7 — SCHEMA MARKUP COMPLETO

Los schemas están distribuidos en las fases anteriores. Esta tabla de verificación 
resume cuál va en cada página:

/ (Home): EducationalOrganization con AggregateRating
/oposiciones-administrativo-estado/: Course + Offer + BreadcrumbList
/oposiciones-seguridad-social/: Course + Offer + BreadcrumbList
/preparar-age-y-seguridad-social/: Course (x2) + Offer + BreadcrumbList
/preparadora-oposiciones/: Person + BreadcrumbList
/cursos-precios/: Offer (x5) + BreadcrumbList
/clases-muestra/: BreadcrumbList
Cada artículo del blog: BlogPosting + BreadcrumbList
Páginas con FAQ (uso del componente FAQAccordion): FAQPage se genera 
automáticamente

Para verificar que el schema está correctamente implementado, tras el despliegue 
usar: https://validator.schema.org/ y pegar la URL de cada página principal.
---