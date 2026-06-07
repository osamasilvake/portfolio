import type { IconType } from 'react-icons';
import { CgWebsite } from 'react-icons/cg';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiPresentationFill } from 'react-icons/ri';

import type { ServiceItem } from './Service.interface';

const iconMap: Record<string, IconType> = {
	LuLayoutDashboard,
	CgWebsite,
	RiPresentationFill
};

interface ServiceProps {
	services: ServiceItem[];
}

const Service = ({ services }: ServiceProps) => {
	return (
		<div className="w-full pt-8 lg:pt-0 lg:w-72">
			{services.map((service) => {
				const Icon = iconMap[service.iconName];
				return (
					<article key={service.id} className="pr-1 pb-11">
						<div className="flex items-center gap-3">
							{Icon && <Icon aria-hidden="true" className={`${service.size} dark:text-108`} />}
							<h3 className="font-bold dark:text-108">{service.title}</h3>
						</div>
						<p className="ml-1 mt-1 dark:text-108 text-justify">{service.description}</p>
					</article>
				);
			})}
		</div>
	);
};

export default Service;
