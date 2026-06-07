import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'de'],
	defaultLocale: 'en',
	localePrefix: 'never', // optional safety (can also live in middleware setup)

	pathnames: {
		'/': '/',
		'/portfolio': '/portfolio',
		'/pathnames': '/pathnames'
	}
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(routing);
