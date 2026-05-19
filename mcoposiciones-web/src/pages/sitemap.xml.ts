import { getCollection } from 'astro:content';

const site = 'https://mcoposiciones.com';

const staticUrls = [
	{ path: '/', priority: '1.0' },
	{ path: '/oposiciones-administrativo-estado/', priority: '0.9' },
	{ path: '/oposiciones-seguridad-social/', priority: '0.9' },
	{ path: '/preparadora-age/', priority: '0.9' },
	{ path: '/preparadora-seguridad-social/', priority: '0.9' },
	{ path: '/preparar-age-y-seguridad-social/', priority: '0.9' },
	{ path: '/cursos-precios/', priority: '0.9' },
	{ path: '/blog/', priority: '0.8' },
	{ path: '/preparadora-oposiciones/', priority: '0.7' },
	{ path: '/clases-muestra/', priority: '0.7' },
];

export async function GET() {
	const posts = await getCollection('blog');
	const postUrls = posts.map((post) => ({
		path: `/blog/${post.id}/`,
		priority: '0.7',
	}));
	const urls = [...staticUrls, ...postUrls];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `  <url>
    <loc>${site}${url.path}</loc>
    <priority>${url.priority}</priority>
  </url>`,
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}
