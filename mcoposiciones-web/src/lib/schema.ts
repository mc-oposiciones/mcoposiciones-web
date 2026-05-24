const siteUrl = 'https://mcoposiciones.com';

type FAQItem = {
	question: string;
	answer: string;
};

const organization = {
	'@type': ['Organization', 'EducationalOrganization'],
	'@id': `${siteUrl}/#organization`,
	name: 'MC Oposiciones',
	url: siteUrl,
	logo: {
		'@type': 'ImageObject',
		url: `${siteUrl}/logo-icon.png`,
	},
	description:
		'Preparación online para oposiciones de Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social C1. Clases en directo, grupos reducidos y seguimiento cercano.',
	telephone: '+34642170664',
	email: 'infomcoposiciones@gmail.com',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+34-642-170-664',
		contactType: 'customer service',
		availableLanguage: 'Spanish',
	},
	sameAs: [
		'https://www.youtube.com/@mcoposiciones',
		'https://www.instagram.com/mcoposiciones',
		'https://www.tiktok.com/@mcoposiciones',
	],
};

const person = {
	'@type': 'Person',
	'@id': `${siteUrl}/preparadora-oposiciones/#person`,
	name: 'Mª Carmen',
	jobTitle: 'Preparadora de Oposiciones',
	description:
		'Preparadora especializada en oposiciones de Administrativo del Estado (AGE C1) y Administrativo de la Seguridad Social C1. Clases online en directo con grupos reducidos.',
	url: `${siteUrl}/preparadora-oposiciones/`,
	image: `${siteUrl}/maria-carmen.jpg`,
	worksFor: { '@id': `${siteUrl}/#organization` },
	sameAs: [
		'https://www.youtube.com/@mcoposiciones',
		'https://www.instagram.com/mcoposiciones',
		'https://www.tiktok.com/@mcoposiciones',
	],
};

function createFAQNode(faqItems: FAQItem[], pageId = `${siteUrl}/#faq`) {
	return {
		'@type': 'FAQPage',
		'@id': pageId,
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

export function withFAQSchema<T extends { '@graph'?: unknown[] }>(schema: T, faqItems: FAQItem[]) {
	if (!faqItems.length) return schema;
	const graph = schema['@graph'] ?? [];
	const webPage = graph.find((node) => {
		if (!node || typeof node !== 'object') return false;
		const type = (node as { '@type'?: unknown })['@type'];
		return type === 'WebPage';
	}) as { '@id'?: string } | undefined;
	const pageId = webPage?.['@id']?.replace(/#webpage$/, '#faq') ?? `${siteUrl}/#faq`;
	return {
		...schema,
		'@graph': [...graph, createFAQNode(faqItems, pageId)],
	};
}

export function createHomeSchema() {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			organization,
			person,
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}/#website`,
				url: siteUrl,
				name: 'MC Oposiciones',
				publisher: { '@id': `${siteUrl}/#organization` },
				inLanguage: 'es',
			},
			{
				'@type': 'WebPage',
				'@id': `${siteUrl}/#webpage`,
				url: `${siteUrl}/`,
				name: 'Preparadora de Oposiciones AGE y Seguridad Social Online',
				description:
					'Preparación online de oposiciones de Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1 con clases en directo.',
				isPartOf: { '@id': `${siteUrl}/#website` },
				about: [{ '@id': `${siteUrl}/#organization` }, { '@id': `${siteUrl}/preparadora-oposiciones/#person` }],
				inLanguage: 'es',
			},
		],
	};
}

export function createPersonSchema() {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			organization,
			person,
			{
				'@type': 'WebPage',
				'@id': `${siteUrl}/preparadora-oposiciones/#webpage`,
				url: `${siteUrl}/preparadora-oposiciones/`,
				name: 'Mª Carmen, preparadora de oposiciones AGE y Seguridad Social',
				description:
					'Perfil de Mª Carmen, preparadora especializada en oposiciones de Administrativo del Estado y Seguridad Social.',
				about: { '@id': `${siteUrl}/preparadora-oposiciones/#person` },
				inLanguage: 'es',
			},
		],
	};
}

export function createPreparadoraLandingSchema({
	url,
	name,
	description,
	courseName,
	price = '100',
}: {
	url: string;
	name: string;
	description: string;
	courseName: string;
	price?: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			organization,
			person,
			{
				'@type': 'WebPage',
				'@id': `${url}#webpage`,
				url,
				name,
				description,
				about: [{ '@id': `${siteUrl}/#organization` }, { '@id': `${siteUrl}/preparadora-oposiciones/#person` }],
				inLanguage: 'es',
			},
			{
				'@type': 'Course',
				'@id': `${url}#course`,
				name: courseName,
				description,
				provider: { '@id': `${siteUrl}/#organization` },
				instructor: { '@id': `${siteUrl}/preparadora-oposiciones/#person` },
				educationalLevel: 'C1',
				teaches: courseName,
				courseMode: 'online',
				inLanguage: 'es',
				url,
				offers: {
					'@type': 'Offer',
					price,
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					url,
				},
			},
		],
	};
}

export function createCoursePageSchema({
	url,
	pageName,
	pageDescription,
	courseName,
	courseDescription,
	price = '100',
}: {
	url: string;
	pageName: string;
	pageDescription: string;
	courseName: string;
	courseDescription: string;
	price?: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			organization,
			person,
			{
				'@type': 'WebPage',
				'@id': `${url}#webpage`,
				url,
				name: pageName,
				description: pageDescription,
				about: { '@id': `${url}#course` },
				inLanguage: 'es',
			},
			{
				'@type': 'Course',
				'@id': `${url}#course`,
				name: courseName,
				description: courseDescription,
				provider: { '@id': `${siteUrl}/#organization` },
				instructor: { '@id': `${siteUrl}/preparadora-oposiciones/#person` },
				educationalLevel: 'C1',
				teaches: courseName,
				courseMode: 'online',
				inLanguage: 'es',
				url,
				offers: {
					'@type': 'Offer',
					price,
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					url,
				},
			},
		],
	};
}

export function createDualCoursePageSchema({
	url,
	pageName,
	pageDescription,
}: {
	url: string;
	pageName: string;
	pageDescription: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			organization,
			person,
			{
				'@type': 'WebPage',
				'@id': `${url}#webpage`,
				url,
				name: pageName,
				description: pageDescription,
				about: { '@id': `${url}#course` },
				inLanguage: 'es',
			},
			{
				'@type': 'Course',
				'@id': `${url}#course`,
				name: 'Pack Preparación Conjunta AGE y Seguridad Social',
				description:
					'Preparación conjunta online para oposiciones de Administrativo del Estado y Seguridad Social. Aprovecha el temario común y amplía opciones sin duplicar el estudio.',
				provider: { '@id': `${siteUrl}/#organization` },
				instructor: { '@id': `${siteUrl}/preparadora-oposiciones/#person` },
				teaches: 'Oposiciones AGE C1 y Seguridad Social C1',
				courseMode: 'online',
				inLanguage: 'es',
				url,
			},
		],
	};
}

export function createPricingPageSchema() {
	const url = `${siteUrl}/cursos-precios/`;
	const courses = [
		{
			name: 'Preparación Oposiciones Administrativo del Estado AGE C1',
			description: 'Preparación online de AGE C1 con clases en directo.',
			url: `${siteUrl}/oposiciones-administrativo-estado/`,
		},
		{
			name: 'Preparación Oposiciones Administrativo Seguridad Social C1',
			description: 'Preparación online de Seguridad Social C1.',
			url: `${siteUrl}/oposiciones-seguridad-social/`,
		},
		{
			name: 'Pack Preparación Conjunta AGE y Seguridad Social',
			description: 'Preparación conjunta de AGE y Seguridad Social.',
			url: `${siteUrl}/preparar-age-y-seguridad-social/`,
		},
	];
	const offers = [
		{ name: 'AGE mensual', price: '100', url },
		{ name: 'AGE curso completo', price: '475', url },
		{ name: 'AGE parte general', price: '250', url },
		{ name: 'AGE parte específica', price: '300', url },
		{ name: 'Seguridad Social mensual', price: '100', url },
		{ name: 'Seguridad Social curso completo', price: '475', url },
		{ name: 'Seguridad Social parte general', price: '250', url },
		{ name: 'Seguridad Social parte específica', price: '300', url },
		{ name: 'Pack AGE + Seguridad Social mensual', price: '150', url: `${siteUrl}/preparar-age-y-seguridad-social/` },
		{ name: 'Pack AGE + Seguridad Social curso completo', price: '650', url: `${siteUrl}/preparar-age-y-seguridad-social/` },
	];

	return {
		'@context': 'https://schema.org',
		'@graph': [
			organization,
			{
				'@type': 'WebPage',
				'@id': `${url}#webpage`,
				url,
				name: 'Cursos y precios de oposiciones AGE y Seguridad Social',
				description: 'Planes y precios para preparar Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1.',
				about: { '@id': `${siteUrl}/#organization` },
				inLanguage: 'es',
			},
			{
				'@type': 'ItemList',
				'@id': `${url}#course-list`,
				name: 'Cursos de oposiciones AGE y Seguridad Social',
				itemListElement: courses.map((course, index) => ({
					'@type': 'ListItem',
					position: index + 1,
					url: course.url,
					item: {
						'@type': 'Course',
						'@id': `${course.url}#course`,
						name: course.name,
						description: course.description,
						url: course.url,
						provider: { '@id': `${siteUrl}/#organization` },
					},
				})),
			},
			...offers.map((offer) => ({
				'@type': 'Offer',
				name: offer.name,
				price: offer.price,
				priceCurrency: 'EUR',
				availability: 'https://schema.org/InStock',
				url: offer.url,
				seller: { '@id': `${siteUrl}/#organization` },
			})),
		],
	};
}
