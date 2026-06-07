import { getProfileContent } from '@/lib/profile';

import Profile from './Profile';

const ProfilePage = async ({ locale }: { locale: string }) => {
	const content = await getProfileContent(locale);
	// or a skeleton/fallback
	if (!content) return null;

	return <Profile content={content} />;
};

export default ProfilePage;
