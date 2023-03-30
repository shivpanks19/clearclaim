import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutUsHero from '@/components/about-us/AboutUsHero';
import LifeAtTap from '@/components/about-us/LifeAtTap';
import AboutVision from '@/components/about-us/AboutVision';
import FounderWord from '@/components/about-us/FounderWord';
import Team from '@/components/about-us/Team';
import RecognitionSection from '@/components/index/Recognition';
import SocialButtonList from '@/components/common/SocialButtonList';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AboutUsService from '@/services/about-us';
import CourseService from '@/services/course';

import { Course } from '@/services/course/types';
import { AboutPageInformation } from '@/services/about-us/types';
import { ImageType } from '@/utils/types';

const Home: NextPage<AboutPageProps> = ({ aboutInfo, courseList }) => {

	return (
		<div className='relative'>
			<Head>
				{aboutInfo.metaTitle && (
					<title>{aboutInfo.metaTitle}</title>
				)}
				{aboutInfo.metaDescription && (
					<meta name='description' content={aboutInfo.metaDescription} />
				)}
			</Head>
			<SocialButtonList />
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<AboutUsHero
				headline={aboutInfo.headline}
				subHeadline={aboutInfo.subHeadline}
				heroImage={aboutInfo.heroImage}
			/>
			{/* Life */}
			<LifeAtTap
				headline={aboutInfo.lifeAtTapHeadline}
				subHeadline={aboutInfo.lifeAtTapSubHeadline}
				image={aboutInfo.lifeAtTapImage}
			/>

			{/* Offerings */}
			<AboutVision />

			{/* Team section */}
			<Team
				headline={aboutInfo.teamHeadline}
				subHeadline={aboutInfo.teamSubHeadline}
				teamPics={aboutInfo.teamPics}
			/>

			{/* Special */}
			<FounderWord
				headline={aboutInfo.founderWordHeadline}
				subHeadline={aboutInfo.founderWordSubHeadline}
				founderImage={aboutInfo.founderImage}
			/>

			{/* Recognition */}
			<RecognitionSection
				headline={aboutInfo.recognitionHeadline}
				subHeadline={aboutInfo.recognitionSubHeadline}
			/>

			{/* News */}
			{/* <NewsSection
				headline={aboutInfo.newsHeadline}
				subHeadline={aboutInfo.newsSubHeadline}
			/> */}

			{/* Footer */}
			<Footer />
		</div>
	);
}

type AboutPageProps = {
	aboutInfo: AboutPageInformation;
	heroImage: ImageType;
	lifeAtTapImage: ImageType;
	founderImage: ImageType;
	courseList: Course[];
}

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const aboutInfo = await AboutUsService.getAboutUsInformation(locale, '*');
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			aboutInfo: {
				...aboutInfo?.data?.attributes,
				heroImage: aboutInfo.data.attributes.heroImage?.data.attributes,
				lifeAtTapImage: aboutInfo.data.attributes.lifeAtTapImage?.data.attributes,
				founderImage: aboutInfo.data.attributes.founderImage?.data.attributes,
				teamPics: aboutInfo.data.attributes.teamPics?.data.map((img) => ({ id: img.id, ...img.attributes }))
			},
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		},
		revalidate: 60
	};
};

export default Home;