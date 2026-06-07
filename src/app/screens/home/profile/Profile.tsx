'use client';

import Button from '@/components/common/button/Button';
import { ButtonVariantEnum } from '@/components/common/button/Button.enum';
import { ProfileContent } from '@/generated/prisma';

import { ProfileType } from './Profile.enum';

interface ProfileProps {
	content: ProfileContent;
}

const Profile = ({ content }: ProfileProps) => {
	const mailtoLink = `mailto:${ProfileType.EMAIL}`;

	return (
		<div className="w-full lg:w-72">
			<div aria-labelledby="profile-introduction">
				<h2 id="profile-introduction" className="sr-only">
					Profile Introduction
				</h2>
				<p className="mb-3 dark:text-108 text-justify">
					{content.intro}
					<strong className="dark:text-108">{content.specialties}</strong>
				</p>
				<p className="dark:text-108 text-justify">{content.passion}</p>
			</div>

			<div className="mt-12 mb-12">
				<Button
					label="button"
					isDisabled={false}
					variant={ButtonVariantEnum.OUTLINED_IN_DEFAULT}
					onClickHandler={() => (window.location.href = mailtoLink)}>
					{content.buttonTitle}
				</Button>
			</div>

			<div className="flex gap-5" aria-label="profile-statistics">
				<div>
					<h2 className="font-bold text-xl dark:text-108 w-28">{content.yearsExperience}</h2>
					<p className="dark:text-108 pt-1 text-sm w-28">{content.satisfactionLabel}</p>
				</div>
				<div>
					<h2 className="font-bold text-xl dark:text-108">{content.satisfactionRate}</h2>
					<p className="dark:text-108 pt-1 text-sm">{content.satisfactionLabel}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
