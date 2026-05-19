## FASE 8 — FORMULARIOS, RESEÑAS Y LEAD MAGNET

### Prompt 8-A — Componente Lead Magnet
---

Crea el componente src/components/LeadMagnet.astro para 
mcoposiciones.com.

El componente es un banner CTA que aparece al final de los artículos del blog (ya 
está incluido en la plantilla del artículo, solo hay que crearlo).

Diseño: fondo con gradiente azul oscuro, texto en blanco, botón de contraste. No 
usar imágenes.

Contenido:
- Título: "¿Cuánto sabes ya sobre las oposiciones de Administrativo?"
- Subtítulo: "Haz el test diagnóstico gratuito y descubre tu nivel real en 5 minutos"
- Botón: "Hacer el test gratuito" → abre en una nueva pestaña el enlace a un Google 
Form o Typeform (dejar el href con un comentario TODO: sustituir por la URL del 
test cuando esté creado)
- Texto bajo el botón: "Sin registro previo. 10 preguntas. Resultado inmediato."

El componente también debe incluir, comentado, el código preparado para 
integrar el script de suscripción de Mailchimp o Brevo cuando esté configurado. El 
comentario debe explicar exactamente dónde pegar el embed code que 
proporcionan estas plataformas.

Nota para el desarrollador (en comentario): el test se puede crear gratuitamente 
en Typeform (typeform.com) o en Google Forms (forms.google.com). Una vez 
creado, sustituir el href del botón por la URL del formulario. Si se usa Typeform, 
también existe la opción de embebido como modal que se abre al hacer clic en el 
botón.
---
---