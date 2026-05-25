import { getCollection } from 'astro:content';

const site = 'https://mcoposiciones.com';
const lastmod = new Date().toISOString().slice(0, 10);

const staticUrls = [
	{ path: '/', priority: '1.0', lastmod },
	{ path: '/oposiciones-administrativo-estado/', priority: '0.9', lastmod },
	{ path: '/oposiciones-seguridad-social/', priority: '0.9', lastmod },
	{ path: '/preparadora-age/', priority: '0.9', lastmod },
	{ path: '/preparadora-seguridad-social/', priority: '0.9', lastmod },
	{ path: '/preparar-age-y-seguridad-social/', priority: '0.9', lastmod },
	{ path: '/preparadora-oposiciones/', priority: '0.9', lastmod },
	{ path: '/cursos-precios/', priority: '0.8', lastmod },
	{ path: '/blog/', priority: '0.8', lastmod },
	{ path: '/clases-muestra/', priority: '0.7', lastmod },
];

export async function GET() {
	const posts = await getCollection('blog');
	const postUrls = posts.map((post) => ({
		path: `/blog/${post.id}/`,
		priority: '0.8',
		lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
	}));
	const urls = [...staticUrls, ...postUrls];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `  <url>
    <loc>${site}${url.path}</loc>
    <lastmod>${url.lastmod}</lastmod>
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
