import { NextPage } from 'next';
// import Head from 'next/head';

import Stat from '@/components/common/Stat';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomeHero from '@/components/index/HomeHero';
import DemoVideo from '@/components/index/DemoVideo';
import Offerings from '@/components/index/Offerings';
import WhyTaxPlus from '@/components/index/WhyTaxPlus';
import FooterFaqList from '@/components/index/FooterFaqList';
import BusinessProcess from '@/components/index/BusinessProcess';
import ReviewList from '@/components/index/review-list/ReviewList';
import { reviewList, faqList } from '@/data/staticData';

const Home: NextPage<HomePageProps> = () => {

	return (
		<div className='relative'>
			{/* <Head>
					<title>{homeInfo.metaTitle}</title>
					<meta name='description' content={homeInfo.metaDescription} />
			</Head> */}
			<Navbar
			/>

			{/* Hero */}
			<HomeHero
				headline='Save up to 50% on your Taxes'
				subHeadline='Plan your taxes early to minimise the tax liability and maximise the savings with the assistance of our expert and qualified Tax Consultants.  '
			/>

			{/* Why Tax + */}
			<WhyTaxPlus />

			{/* Business Process */}
			<BusinessProcess />

			{/* Demo video */}
			<DemoVideo headline='Clear Claim is the best choice' />

			{/* Stat */}
			<Stat
				amountRecovered={12600000}
				customers={100}
				experts={50}
			/>

			{/* Review */}
			<ReviewList reviewList={reviewList} />
			
			{/* Offerings */}
			<Offerings />

			{/* Footer Faq */}
			<FooterFaqList
				headline='People also ask'
				faqList={faqList}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}

type HomePageProps = {
}

export default Home;