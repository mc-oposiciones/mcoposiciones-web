import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: z
		.object({
			title: z.string().min(1).max(110),
			description: z.string().min(120).max(260),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			author: z.string().default('Mª Carmen'),
			category: z.enum([
				'Oposiciones AGE',
				'Oposiciones Seguridad Social',
				'Preparacion y Estudio',
				'Convocatorias 2026',
			]),
			h1: z.string().min(1),
			excerpt: z.string().min(1),
			image: z.string().optional(),
			imageAlt: z.string().optional(),
		})
		.superRefine((data, ctx) => {
			if (data.image && !data.imageAlt) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					path: ['imageAlt'],
					message: 'imageAlt es obligatorio cuando image esta presente.',
				});
			}
		}),
});

export const collections = { blog };
