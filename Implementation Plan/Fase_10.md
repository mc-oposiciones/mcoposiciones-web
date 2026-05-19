## FASE 10 — DESPLIEGUE AUTOMÁTICO EN GITHUB PAGES

### Prompt 10-A — GitHub Actions y configuración de dominio
---

Configura el despliegue automático de mcoposiciones.com en GitHub Pages 
usando GitHub Actions.

1. Crea el archivo .github/workflows/deploy.yml con la configuración oficial de 
Astro para GitHub Pages:
- Trigger: push a la rama main
- Pasos: checkout, setup Node.js 20, instalar dependencias con npm ci, build con 
npm run build, desplegar a GitHub Pages con las actions oficiales 
(actions/configure-pages, actions/upload-pages-artifact, actions/deploy-pages)
- El artefacto a subir es la carpeta dist/ que genera Astro al hacer build

2. Verificar que astro.config.mjs tiene:
- site: 'https://mcoposiciones.com'
- No usar base: '/nombre-repo/' porque el dominio es personalizado. Con dominio 
personalizado el base debe ser '/' o no especificarse.

3. Crear el archivo public/CNAME con el contenido:
mcoposiciones.com
Este archivo le dice a GitHub Pages cuál es el dominio personalizado. Es 
obligatorio para que el dominio propio funcione con GitHub Pages.

4. Dame las instrucciones paso a paso para:
a. Crear el repositorio en GitHub (nombre recomendado: mcoposiciones-web)
b. Inicializar git localmente y conectar con el repositorio remoto
c. Hacer el primer push con todos los archivos del proyecto
d. En GitHub, ir a Settings > Pages y configurar: Source → GitHub Actions (no 
Branch)
e. Cómo verificar que el despliegue ha funcionado correctamente (dónde ver el log 
de GitHub Actions)
f. Cómo configurar el DNS del dominio mcoposiciones.com para que apunte a 
GitHub Pages: qué registros DNS exactos hay que añadir o modificar en el panel 
del registrador del dominio (registros A para las 4 IPs de GitHub Pages y registro 
CNAME para www)

5. Cómo publicar un nuevo artículo del blog después del despliegue inicial:
- Crear el archivo .md en src/content/blog/
- git add, git commit -m "nuevo artículo: [título]", git push
- GitHub Actions se encarga automáticamente del build y despliegue en ~2-3 
minutos
---
---