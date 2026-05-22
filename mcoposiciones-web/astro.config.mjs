// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://mcoposiciones.com',
	base: '/',
	redirects: {
		'/#cursos': { status: 301, destination: '/cursos-precios/' },
		'/#sobre-mi': { status: 301, destination: '/preparadora-oposiciones/' },
		'/#contacto': { status: 301, destination: '/contacto/' },
	},
});
