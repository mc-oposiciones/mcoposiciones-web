## FASE 11 — CHECKLIST DE LANZAMIENTO

Ejecutar este checklist antes de anunciar públicamente la nueva web.

### URLs y contenido
- Todas las páginas están publicadas y devuelven código 200
- Los PDFs abren correctamente: /resources/tema1age.pdf y 
/resources/tema2ss.pdf
- Los tres vídeos de YouTube cargan correctamente en /clases-muestra/ 
(comprobar que el lazy loading funciona)
- El formulario de contacto envía correctamente: hacer una prueba real enviando 
un mensaje y verificar que llega al email infomcoposiciones@gmail.com
- El número de teléfono tiene enlace tel: que funciona en móvil
- El email tiene enlace mailto: que funciona

### SEO
- Google Search Console: añadir la propiedad https://mcoposiciones.com, 
verificar con registro TXT en el DNS, enviar el sitemap /sitemap.xml
- Verificar el sitemap en el navegador: https://mcoposiciones.com/sitemap.xml 
debe mostrar todas las páginas
- Verificar el robots.txt: https://mcoposiciones.com/robots.txt
- Verificar schema markup de las páginas principales en 
https://validator.schema.org/ (pegar la URL de cada página)
- Verificar los rich results en https://search.google.com/test/rich-results 
(especialmente el FAQ y los Course schemas)
- Comprobar que cada página tiene meta title único y diferente al de las demás
- Comprobar que no hay H1 duplicados entre páginas

### Rendimiento
- PageSpeed Insights en escritorio: debe superar 90 en 
https://mcoposiciones.com/
- PageSpeed Insights en móvil: debe superar 80
- No hay errores en la consola del navegador (abrir DevTools > Console en cada 
página principal)

### Legal y RGPD
- El banner de cookies aparece al visitar el sitio por primera vez en modo incógnito
- Al hacer clic en "Aceptar", el banner desaparece y GA4 se activa
- Al hacer clic en "Solo necesarias", GA4 no se activa
- Los tres enlaces legales del footer funcionan: /politica-privacidad/, /aviso-legal/, 
/politica-cookies/
- El formulario de contacto tiene el checkbox de privacidad obligatorio y no se 
puede enviar sin marcarlo

### Diseño y usabilidad
- La web se ve correctamente en iPhone (Safari, 375px de ancho)
- La web se ve correctamente en Android (Chrome, 360px de ancho)
- La web se ve correctamente en escritorio (Chrome, 1440px)
- El menú hamburguesa en móvil funciona y cierra al hacer clic en un enlace
- El dropdown de Cursos en escritorio funciona al pasar el ratón
- No hay overflow horizontal en móvil (no aparece barra de scroll horizontal)
- Los textos son legibles: mínimo 16px en móvil

### Confianza y conversión
- Las 27 reseñas de Google aparecen correctamente en la home y en la página de 
la preparadora (widget Trustindex funcionando)
- Los tres botones CTA del hero de la home llevan a la URL correcta
- El Pack AGE+SS tiene el badge "EXCLUSIVO" visible en el menú dropdown y en la 
página
---