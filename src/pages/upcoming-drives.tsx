import { GetStaticProps, NextPage } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DriveHero from '@/components/drive/DriveHero';
import DriveList from '@/components/drive/DriveList';
import DriveBanner from '@/components/drive/DriveBanner';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DriveService from '@/services/upcoming-drives';
import CourseService from '@/services/course';

import { Course } from '@/services/course/types';
import { Drive } from '@/services/upcoming-drives/types';
import { UpcomingDrivesInformation } from '@/services/upcoming-drives/types';

const UpcomingDrives: NextPage<UpcomingDrivesProps> = ({ drivePageInfo, driveList, drivePagination, courseList }) => {

	return (
		<div>
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<DriveHero
				headline={drivePageInfo.headline}
				subHeadline={drivePageInfo.subHeadline}
				heroImage={drivePageInfo.heroImage}
				conductedDrives={drivePageInfo.conductedDrives}
				upcomingDrives={drivePageInfo.upcomingDrives}
			/>

			{/* Drives list */}
			<DriveList
				headline={drivePageInfo.driveHeadline}
				subHeadline={drivePageInfo.driveSubHeadline}
				drivePagination={drivePagination}
				driveList={driveList}
			/>

			{/* Drive Banner */}
			<DriveBanner />

			{/* Footer */}
			<Footer />
		</div>
	);
}

type UpcomingDrivesProps = {
	drivePageInfo: UpcomingDrivesInformation;
	driveList: Drive[];
	courseList: Course[];
	drivePagination: Record<string, number>;
}

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const drivePageInfo = await DriveService.getDrivePageInformation(locale, '*');
	const driveList = await DriveService.getDriveList(locale, '*');
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			drivePageInfo: {
				...drivePageInfo?.data?.attributes,
				heroImage: drivePageInfo.data.attributes.heroImage?.data.attributes,
			},
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			driveList: driveList.data.map((drive) => ({
				...drive.attributes,
				id: drive.id,
				driveImage: drive.attributes.driveImage?.data.attributes,
			})),
			drivePagination: driveList.meta.pagination,
			...(await serverSideTranslations(locale, ['common', 'home']))
		},
		revalidate: 60
	};
};

export default UpcomingDrives;