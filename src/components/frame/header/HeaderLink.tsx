'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

import { Link } from '@/i18n/routing';

const HeaderLink = ({ href, title }: ComponentProps<typeof Link>) => {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			aria-current={isActive ? 'page' : undefined}
			className={`py-3 transition-colors inline-block
			 ${
					isActive
						? 'text-green-400 dark:text-green-600 border-b-2 border-b-green-400 dark:border-b-green-600'
						: 'dark:text-108'
				}`}>
			{title}
		</Link>
	);
};
export default HeaderLink;
