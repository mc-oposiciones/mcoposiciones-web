const siteUrl = 'https://mcoposiciones.com';

const organization = {
	'@type': 'EducationalOrganization',
	'@id': `${siteUrl}/#organization`,
	name: 'MC Oposiciones',
	url: siteUrl,
	logo: `${siteUrl}/logo.png`,
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
