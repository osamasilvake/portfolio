import { prisma } from '@/lib/prisma';

export function getProfileContent(locale: string = 'en') {
	return prisma.profileContent.findUnique({
		where: { locale }
	});
}
