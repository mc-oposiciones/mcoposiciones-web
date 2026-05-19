## FASE 9 — PÁGINAS LEGALES, COOKIES Y ANALYTICS

### Prompt 9-A — Páginas legales y banner de cookies
---

Crea las páginas legales y el sistema de cookies para mcoposiciones.com. Todas 
las páginas legales deben usar el BaseLayout con noindex: true.

1. src/pages/politica-privacidad.astro
title: "Política de Privacidad | MC Oposiciones"
H1: "Política de Privacidad"

Genera el texto completo de política de privacidad conforme al RGPD español 
para una preparadora de oposiciones individual. Incluir estos apartados 
obligatorios con el contenido mínimo legal:
- Responsable del tratamiento: [Nombre completo de Mª Carmen] NIF: 
[XXXXXXXX], email: infomcoposiciones@gmail.com, teléfono: 642 170 664. Dejar 
el nombre y NIF como placeholders que la preparadora debe rellenar.
- Datos que se recogen: nombre, email, teléfono a través del formulario de 
contacto
- Finalidad del tratamiento: gestión de consultas sobre cursos y prestación del 
servicio de preparación
- Base legal: consentimiento del interesado (art. 6.1.a RGPD)
- Plazo de conservación: los datos se conservan mientras dure la relación 
comercial y durante el plazo legalmente exigido
- Destinatarios: no se ceden a terceros salvo obligación legal. Los datos del 
formulario de contacto son procesados por Formspree (formspree.io) como 
encargado del tratamiento
- Derechos: acceso, rectificación, supresión, oposición, limitación, portabilidad. 
Ejercicio enviando email a infomcoposiciones@gmail.com con asunto "Protección 
de datos"
- Reclamaciones: derecho a presentar reclamación ante la Agencia Española de 
Protección de Datos (aepd.es)

2. src/pages/aviso-legal.astro
title: "Aviso Legal | MC Oposiciones"
H1: "Aviso Legal"

Texto estándar de aviso legal para actividad educativa online en España con datos 
del titular, objeto del sitio, propiedad intelectual de los contenidos, limitación de 
responsabilidad por enlaces externos.

3. src/pages/politica-cookies.astro
title: "Política de Cookies | MC Oposiciones"
H1: "Política de Cookies"

Descripción de las cookies usadas:
- Cookies técnicas (necesarias): sesión, preferencias del usuario. No requieren 
consentimiento.
- Cookies analíticas: Google Analytics 4 (identificador _ga). Requieren 
consentimiento. Finalidad: análisis estadístico de uso del sitio.
Cómo aceptar o rechazar cookies. Enlace a la herramienta de gestión de cookies.

4. Crea el componente src/components/CookieBanner.astro

Diseño: banner fijo en la parte inferior de la pantalla, fondo oscuro, texto claro.
Texto: "Usamos cookies propias y de terceros (Google Analytics) para analizar el 
uso del sitio. Puedes aceptarlas o rechazarlas."
Dos botones: "Aceptar todas" y "Solo necesarias"

Comportamiento con JavaScript:
- Al cargar la página, comprobar si existe una cookie llamada 'cookie_consent' en 
localStorage
- Si existe con valor 'accepted': no mostrar el banner, activar GA4
- Si existe con valor 'rejected': no mostrar el banner, no activar GA4
- Si no existe: mostrar el banner
- Al hacer clic en "Aceptar todas": guardar 'accepted' en localStorage, ocultar el 
banner, activar GA4 dinámicamente
- Al hacer clic en "Solo necesarias": guardar 'rejected' en localStorage, ocultar el 
banner, no activar GA4

El componente CookieBanner debe importarse en el BaseLayout para que 
aparezca en todas las páginas.
---

### Prompt 9-B — Google Analytics 4 condicional
---

Implementa Google Analytics 4 de forma condicional en el BaseLayout.astro de 
mcoposiciones.com para cumplir con el RGPD.

La implementación debe funcionar así:
- El código de GA4 NO se carga en el HTML inicial de la página
- Solo se carga dinámicamente si el usuario ha aceptado las cookies (localStorage 
'cookie_consent' === 'accepted')
- El mismo mecanismo se usa tanto cuando el usuario acepta cookies por primera 
vez (el botón del banner activa GA4 inmediatamente) como en visitas posteriores 
(al cargar la página se comprueba localStorage y se activa GA4 si ya había 
aceptado)

Código a implementar en el BaseLayout (al final del body):
- Un script que al cargarse comprueba localStorage
- Si cookie_consent === 'accepted': inyectar dinámicamente el script de GA4 con 
el Measurement ID (dejar como placeholder: G-XXXXXXXXXX que el usuario 
sustituirá por su ID real)
- El Measurement ID real se obtiene en analytics.google.com creando una 
propiedad GA4

Configurar los siguientes eventos personalizados usando event listeners:
- Cuando se envíe el formulario de contacto (evento submit en el form de 
contacto): disparar gtag('event', 'form_submit', {event_category: 'contacto', 
event_label: 'formulario_contacto'})
- Cuando alguien haga clic en el número de teléfono: disparar gtag('event', 
'click_phone')
- Cuando alguien haga clic en el email: disparar gtag('event', 'click_email')
- Cuando alguien haga clic en un botón CTA hacia /contacto/: disparar gtag('event', 
'cta_click')

Todos estos event listeners deben verificar que gtag existe antes de ejecutarlo (por 
si el usuario no ha aceptado cookies).
---
---