// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mcoposiciones.com',
	base: '/',
	integrations: [
		sitemap({
			filter: (page) =>
				![
					'https://mcoposiciones.com/contacto/',
					'https://mcoposiciones.com/politica-privacidad/',
					'https://mcoposiciones.com/aviso-legal/',
					'https://mcoposiciones.com/politica-cookies/',
					'https://mcoposiciones.com/sitemap.xml',
				].includes(page),
			serialize(item) {
				const pathname = new URL(item.url).pathname;
				let priority = 0.7;

				if (pathname === '/') {
					priority = 1.0;
				} else if (
					[
						'/oposiciones-administrativo-estado/',
						'/oposiciones-seguridad-social/',
						'/preparar-age-y-seguridad-social/',
						'/cursos-precios/',
					].includes(pathname)
				) {
					priority = 0.9;
				} else if (pathname === '/blog/') {
					priority = 0.8;
				}

				return { ...item, priority };
			},
		}),
	],
	redirects: {
		'/#cursos': { status: 301, destination: '/cursos-precios/' },
		'/#sobre-mi': { status: 301, destination: '/preparadora-oposiciones/' },
		'/#contacto': { status: 301, destination: '/contacto/' },
	},
});
