import { getServiceItems } from '@/lib/service';

import Service from './Service';

const ServicePage = async ({ locale }: { locale: string }) => {
	const services = await getServiceItems(locale);

	if (!services.length) return null;

	return <Service services={services} />;
};

export default ServicePage;
