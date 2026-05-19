FASE 1 — INICIALIZACIÓN DEL PROYECTO ASTRO

Prompt 1-A — Inicialización y estructura base
Pega este prompt completo en la IA:

Actúa como un desarrollador web experto en Astro, Tailwind CSS y SEO técnico. 
Voy a construir el sitio web mcoposiciones.com desde cero con Astro para 
desplegarlo en GitHub Pages. El sitio es de una preparadora de oposiciones 
llamada Mª Carmen que prepara Administrativo del Estado (AGE C1) y 
Administrativo de la Seguridad Social (SS C1).

Dame los comandos exactos para ejecutar en la terminal, en este orden:

Inicializar un nuevo proyecto Astro con el template "minimal" (sin starter blog) 
usando el comando oficial. Nombre del directorio: mcoposiciones-web.
Instalar las siguientes dependencias dentro del directorio del proyecto:

@astrojs/tailwind (integración oficial de Tailwind con Astro)
@astrojs/sitemap (para generar sitemap.xml automáticamente)
tailwindcss
@tailwindcss/typography (para estilar el contenido Markdown del blog)

Mostrar el contenido exacto del archivo astro.config.mjs configurado con:

site: 'https://mcoposiciones.com'
base: '/' (dominio personalizado, no subpath)
integraciones: tailwind() y sitemap() activas
Redirecciones 301 desde las rutas ancla antiguas: /#cursos hacia /cursos-precios, 
/#sobre-mi hacia /preparadora-oposiciones, /#contacto hacia /contacto

Mostrar el contenido del archivo tailwind.config.mjs con:

content apuntando a todos los archivos .astro, .md y .mdx del proyecto
Plugin @tailwindcss/typography activado
Extensión del tema con las fuentes personalizadas: 'display' para Montserrat, 
'body' para Inter

Mostrar la estructura de carpetas completa que debe quedar en el proyecto con 
todos los archivos y directorios que vamos a crear, para que yo tenga el mapa 
antes de empezar. Incluir: src/layouts/, src/components/, src/pages/, 
src/pages/blog/, src/content/blog/, src/styles/, public/, public/fonts/, 
public/resources/, .github/workflows/

Crear el archivo src/styles/global.css con:

Import de Tailwind (@tailwind base, components, utilities)
@font-face para Montserrat y Source Sans Pro cargadas localmente desde 
/public/fonts/ con font-display: swap
Variables CSS para colores del tema: color primario azul oscuro (#1E3A8A), color 
secundario blanco, color acento a definir
Clase .prose personalizada para los artículos del blog

Prompt 1-B — Configuración de Content Collections

Siguiendo la estructura del proyecto mcoposiciones-web en Astro, crea el archivo 
src/content/config.ts que define la colección del blog con Zod para validación.

La colección se llama 'blog' y cada artículo de blog debe tener el siguiente 
frontmatter obligatorio:

title: string (entre 50 y 60 caracteres recomendados, es el meta title)
description: string (entre 140 y 160 caracteres, es la meta description)
pubDate: date
updatedDate: date (opcional)
author: string (por defecto 'Mª Carmen')
category: enum con los valores: 'Oposiciones AGE', 'Oposiciones Seguridad 
Social', 'Preparacion y Estudio', 'Convocatorias 2026'
h1: string (el H1 visible en la página, puede ser diferente y más largo que el title)
excerpt: string (resumen de 2-3 líneas para la tarjeta del listado del blog)
image: string (opcional, ruta a imagen destacada)
imageAlt: string (obligatorio si image está presente)

Muéstrame el archivo config.ts completo.