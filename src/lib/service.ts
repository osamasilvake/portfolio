import { prisma } from '@/lib/prisma';

export async function getServiceItems(locale: string = 'en') {
	return await prisma.serviceItem.findMany({
		where: { locale },
		orderBy: { order: 'asc' }
		// no cache - always fetch fresh from DB
	});
}
