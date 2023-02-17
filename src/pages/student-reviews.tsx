import { GetStaticProps, NextPage } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ReviewSection from '@/components/common/review-list/ReviewList';
import RecruiterSection from '@/components/common/RecruiterList';
import ReviewHeroSection from '@/components/student-reviews/ReviewHero';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';
import PlacementList from '@/components/common/placement-list/PlacementList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import StudentReviewPageService from '@/services/student-reviews-page';
import PlacementService from '@/services/placement';
import ReviewService from '@/services/review';
import RecruiterService from '@/services/recruiter';

import { Placement } from '@/services/placement/types';
import { Review } from '@/services/review/types';
import { Recruiter } from '@/services/recruiter/types';
import { ImageType } from '@/utils/types';

const StudentReviewPage: NextPage<StudentReviewPageProps> = ({
	headline,
	subHeadline,
	heroImage,
	placementList,
	reviewList,
	recruiterList,
	achievementHeadline,
	achievementSubHeadline,
	recruiterHeadline,
	recruiterSubHeadline,
	reviewHeadline,
	reviewSubHeadline
}) => {
	return (
		<div>
			<Navbar />

			{/* Review Hero */}
			<ReviewHeroSection
				headline={headline}
				subHeadline={subHeadline}
				heroImage={heroImage}
			/>

			{/* Achievements */}
			<PlacementList
				headline={achievementHeadline}
				subHeadline={achievementSubHeadline}
				placementList={placementList}
				showReadMore={false}
			/>

			{/* Student Reviews */}
			<ReviewSection
				headline={reviewHeadline}
				subHeadline={reviewSubHeadline}
				reviewList={reviewList}
				showReadMore={false}
			/>

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/coding_bootcamp_1.png'
			/>

			{/* Recruiters */}
			<RecruiterSection
				headline={recruiterHeadline}
				subHeadline={recruiterSubHeadline}
				recruiterList={recruiterList}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
};

type StudentReviewPageProps = {
	headline: string;
	subHeadline: string;
	heroImage: ImageType;
	achievementHeadline: string;
	achievementSubHeadline: string;
	reviewHeadline: string,
	reviewSubHeadline: string,
	recruiterHeadline: string,
	recruiterSubHeadline: string,
	placementList: Placement[];
	reviewList: Review[];
	recruiterList: Recruiter[];
};

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const studentReviewPageInfo = await StudentReviewPageService.getStudentReviewPageInformation(locale, '*');
	const placementList = await PlacementService.getPlacementList(locale, '*');
	const reviewList = await ReviewService.getReviewList(locale, '*');
	const recruiterList = await RecruiterService.getRecruiterList(locale, '*');
	return {
		props: {
			...studentReviewPageInfo.data.attributes,
			heroImage: studentReviewPageInfo.data.attributes.heroImage?.data.attributes,
			placementList: placementList.data.map((placement) => ({
				...placement.attributes,
				id: placement.id,
				companyImage: placement.attributes.companyImage?.data.attributes,
				studentImage: placement.attributes.studentImage?.data.attributes,
			})),
			reviewList: reviewList.data.map((review) => ({
				...review.attributes,
				id: review.id,
				studentImage: review.attributes.studentImage?.data.attributes,
			})),
			recruiterList: recruiterList.data.map((recruiter) => ({
				...recruiter.attributes,
				id: recruiter.id,
				recruiterImage: recruiter.attributes.recruiterImage?.data[0].attributes,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		},
		revalidate: 60
	};
};

export default StudentReviewPage;