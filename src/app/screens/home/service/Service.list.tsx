import { CgWebsite } from 'react-icons/cg';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiPresentationFill } from 'react-icons/ri';

import { Service } from './Service.interface';

export const ServiceList: Service[] = [
	{
		Icon: LuLayoutDashboard,
		key: 'webDeveloper',
		size: 'h-6 w-7'
	},
	{
		Icon: CgWebsite,
		key: 'uxUiDesign',
		size: 'h-8 w-6'
	},
	{
		Icon: RiPresentationFill,
		key: 'webConsulting',
		size: 'h-8 w-6'
	}
];
