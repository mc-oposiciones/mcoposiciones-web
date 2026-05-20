const siteUrl = 'https://mcoposiciones.com';

const organization = {
	'@type': 'EducationalOrganization',
	'@id': `${siteUrl}/#organization`,
	name: 'MC Oposiciones',
	url: siteUrl,
	logo: `${siteUrl}/logo-icon.png`,
	description:
		'Preparacion online para oposiciones de Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1.',
	telephone: '+34642170664',
	email: 'infomcoposiciones@gmail.com',
	sameAs: [
		'https://www.youtube.com/@mcoposiciones',
		'https://www.instagram.com/mcoposiciones',
		'https://www.tiktok.com/@mcoposiciones',
	],
};

const person = {
	'@type': 'Person',
	'@id': `${siteUrl}/preparadora-oposiciones/#person`,
	name: 'Maria Carmen',
	jobTitle: 'Preparadora de oposiciones AGE y Seguridad Social',
	url: `${siteUrl}/preparadora-oposiciones/`,
	worksFor: { '@id': `${siteUrl}/#organization` },
};

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
					'Preparacion online de oposiciones de Administrativo del Estado AGE C1 y Administrativo de la Seguridad Social C1 con clases en directo.',
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
				name: 'Maria Carmen, preparadora de oposiciones AGE y Seguridad Social',
				description:
					'Perfil de Maria Carmen, preparadora especializada en oposiciones de Administrativo del Estado y Seguridad Social.',
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
				inLanguage: 'es',
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
				educationalLevel: 'C1',
				inLanguage: 'es',
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
				about: [
					{ '@id': `${siteUrl}/oposiciones-administrativo-estado/#course` },
					{ '@id': `${siteUrl}/oposiciones-seguridad-social/#course` },
				],
				inLanguage: 'es',
			},
			{
				'@type': 'Course',
				'@id': `${siteUrl}/oposiciones-administrativo-estado/#course`,
				name: 'Preparacion oposiciones Administrativo del Estado AGE C1',
				description: 'Preparacion online para Administrativo del Estado AGE C1 con clases, temario, test, simulacros y ofimatica.',
				provider: { '@id': `${siteUrl}/#organization` },
				educationalLevel: 'C1',
				inLanguage: 'es',
			},
			{
				'@type': 'Course',
				'@id': `${siteUrl}/oposiciones-seguridad-social/#course`,
				name: 'Preparacion oposiciones Administrativo de la Seguridad Social C1',
				description: 'Preparacion online para Administrativo de la Seguridad Social C1 con temario especifico, test y supuesto practico.',
				provider: { '@id': `${siteUrl}/#organization` },
				educationalLevel: 'C1',
				inLanguage: 'es',
			},
		],
	};
}

export function createPricingPageSchema() {
	const url = `${siteUrl}/cursos-precios/`;
	const offers = [
		{ name: 'Curso Mensual', price: '100', url },
		{ name: 'Curso Completo', price: '475', url },
		{ name: 'Parte General', price: '250', url },
		{ name: 'Parte Especifica Seguridad Social', price: '300', url },
		{ name: 'Pack AGE + Seguridad Social', url: `${siteUrl}/preparar-age-y-seguridad-social/` },
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
