import { prisma } from '@/lib/prisma';

export function getServiceItems(locale: string = 'en') {
	return prisma.serviceItem.findMany({
		where: { locale },
		orderBy: { order: 'asc' }
	});
}
