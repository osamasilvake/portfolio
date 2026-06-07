import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../src/generated/prisma';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const profileDataEn = {
	locale: 'en',
	intro: 'I am a self-taught front end developer from Pakistan,',
	specialties: 'specializing in React.js, Next.js, Vue.js, Typescript',
	passion: 'I am passionate about building cool websites and I love sharing the things I learn with my audience.',
	buttonTitle: 'Contact Me',
	yearsExperience: '2 Years',
	satisfactionRate: '98%',
	satisfactionLabel: 'Client Satisfaction'
};

const profileDataDe = {
	locale: 'de',
	intro: 'Ich bin ein selbstgelernter Front-End-Entwickler aus Pakistan,',
	specialties: 'spezialisiert auf React.js, Next.js, Vue.js, Typescript',
	passion: 'Ich bin leidenschaftlich daran interessiert, coole Websites zu bauen und mein Wissen zu teilen.',
	buttonTitle: 'Kontakt',
	yearsExperience: '2 Jahre',
	satisfactionRate: '98%',
	satisfactionLabel: 'Kundenzufriedenheit'
};

const services = [
	{
		key: 'webDeveloper',
		locale: 'en',
		title: 'Web Developer',
		description: 'Building modern, responsive web applications using React.js, Next.js and TypeScript.',
		iconName: 'LuLayoutDashboard',
		size: 'h-6 w-7',
		order: 1
	},
	{
		key: 'uxUiDesign',
		locale: 'en',
		title: 'UX/UI Design',
		description: 'Designing clean and intuitive user interfaces with a focus on user experience.',
		iconName: 'CgWebsite',
		size: 'h-8 w-6',
		order: 2
	},
	{
		key: 'webConsulting',
		locale: 'en',
		title: 'Web Consulting',
		description: 'Providing expert advice on web technologies, architecture and best practices.',
		iconName: 'RiPresentationFill',
		size: 'h-8 w-6',
		order: 3
	},
	{
		key: 'webDeveloper',
		locale: 'de',
		title: 'Web Entwickler',
		description: 'Entwicklung moderner, responsiver Webanwendungen mit React.js, Next.js und TypeScript.',
		iconName: 'LuLayoutDashboard',
		size: 'h-6 w-7',
		order: 1
	},
	{
		key: 'uxUiDesign',
		locale: 'de',
		title: 'UX/UI Design',
		description: 'Gestaltung sauberer und intuitiver Benutzeroberflächen mit Fokus auf Benutzererfahrung.',
		iconName: 'CgWebsite',
		size: 'h-8 w-6',
		order: 2
	},
	{
		key: 'webConsulting',
		locale: 'de',
		title: 'Web Beratung',
		description: 'Expertenberatung zu Webtechnologien, Architektur und bewährten Praktiken.',
		iconName: 'RiPresentationFill',
		size: 'h-8 w-6',
		order: 3
	}
];

async function main() {
	await prisma.profileContent.upsert({
		where: { locale: 'en' },
		update: profileDataEn,
		create: profileDataEn
	});
	await prisma.profileContent.upsert({
		where: { locale: 'de' },
		update: profileDataDe,
		create: profileDataDe
	});

	for (const service of services) {
		await prisma.serviceItem.upsert({
			where: { key_locale: { key: service.key, locale: service.locale } },
			update: service,
			create: service
		});
	}
}

main()
	.catch(console.error)
	.finally(() => prisma.$disconnect());
