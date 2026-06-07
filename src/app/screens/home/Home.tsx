import Image from 'next/image';
import { getLocale } from 'next-intl/server';

import ProfilePage from '@/app/screens/home/profile/ProfilePage';
import osama from '@/assets/images/osamiainew.png';

import ServicePage from './service/ServicePage';

const Home = async () => {
	const locale = await getLocale();

	return (
		<main className="max-w-201 mx-auto">
			<h1 className="text-center mt-16 dark:text-108">Muhammad Usama</h1>

			<div className="flex justify-between flex-col-reverse mt-14 sm:mt-20 mb-16 lg:gap-5 xl:gap-20 lg:flex-row">
				<ServicePage locale={locale} />

				<div className="pt-10 pb-5 lg:pt-0">
					<Image src={osama} alt="Muhammad usama" className="w-80 h-auto animate-fade-in" priority />
				</div>

				<ProfilePage locale={locale} />
			</div>
		</main>
	);
};

export default Home;
