import { GetStaticProps, NextPage } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RecruiterSection from '@/components/common/RecruiterList';
import RecordHeroSection from '@/components/records/RecordHero';
import SalarySection from '@/components/records/SalarySection';
import NewsSection from '@/components/common/NewsSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RecordPageService from '@/services/record-page';
import RecruiterService from '@/services/recruiter';
import CourseService from '@/services/course';

import { Course } from '@/services/course/types';
import { Recruiter } from '@/services/recruiter/types';
import { Placement } from '@/services/placement/types';
import { ImageType } from '@/utils/types';
import { SalaryCardType } from '@/services/record-page/types';

const RecordPage: NextPage<RecordPageProps> = ({
	headline,
	subHeadline,
	heroImage,
	recruiterHeadline,
	recruiterSubHeadline,
	salaryHeadline,
	salarySubHeadline,
	newsHeadline,
	newsSubHeadline,
	recruiterList,
	salaryCardList,
	courseList
}) => {
	return (
		<div>
			<Navbar
				courseList={courseList}

			/>

			{/* Record Hero */}
			<RecordHeroSection
				headline={headline}
				subHeadline={subHeadline}
				heroImage={heroImage}
			/>

			{/* Recruiters */}
			<RecruiterSection
				headline={recruiterHeadline}
				subHeadline={recruiterSubHeadline}
				recruiterList={recruiterList}
			/>

			{/* Salary */}
			<SalarySection
				headline={salaryHeadline}
				subHeadline={salarySubHeadline}
				salaryCardList={salaryCardList}
			/>

			{/* News */}
			<NewsSection
				headline={newsHeadline}
				subHeadline={newsSubHeadline}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
};

type RecordPageProps = {
	headline: string;
	subHeadline: string;
	heroImage: ImageType;
	recruiterHeadline: string,
	recruiterSubHeadline: string,
	salaryHeadline: string;
	salarySubHeadline: string;
	newsHeadline: string;
	newsSubHeadline: string;
	placementList: Placement[];
	recruiterList: Recruiter[];
	salaryCardList: SalaryCardType[];
	courseList: Course[];
};

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const recordPageInfo = await RecordPageService.getRecordPageInformation(locale, '*');
	const recruiterList = await RecruiterService.getRecruiterList(locale, '*');
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			...recordPageInfo.data.attributes,
			heroImage: recordPageInfo.data.attributes.heroImage?.data.attributes,
			recruiterList: recruiterList.data.map((recruiter) => ({
				...recruiter.attributes,
				id: recruiter.id,
				recruiterImage: recruiter.attributes.recruiterImage?.data[0].attributes,
			})),
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		},
		revalidate: 60
	};
};

export default RecordPage;
