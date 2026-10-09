import type { CollectionEntry } from 'astro:content';

export const isBlogPreviewEnabled =
	import.meta.env.DEV && Boolean(process.env.BLOG_PREVIEW_SLUG);

export const isBlogPostVisible = (post: CollectionEntry<'blog'>) =>
	!post.data.draft ||
	(isBlogPreviewEnabled && post.id === process.env.BLOG_PREVIEW_SLUG);
