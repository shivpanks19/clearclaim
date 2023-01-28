import { GetStaticProps, NextPage } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHeroSection from '@/components/contact-us/ContactHero';
import ContactOptionSection from '@/components/contact-us/ContactOption';
import ContactFindUsSection from '@/components/contact-us/ContactFindUs';
import ContactUsService from '@/services/contact-us';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactUsPage: NextPage<ContactUsPageProps> = ({
	address,
	email,
	phone,
	ytLink,
	fbLink,
	igLink
}) => {
	return (
		<div>
			<Navbar />

			{/* Course Hero */}
			<ContactHeroSection />

			{/* Contact Map */}
			<ContactOptionSection
				address={address}
				email={email}
				phone={phone}
			/>

			{/* Contact Form */}
			<ContactFindUsSection
				ytLink={ytLink}
				fbLink={fbLink}
				igLink={igLink}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}

type ContactUsPageProps = {
	address: string;
	email: string;
	phone: string;
	ytLink: Record<string, string>;
	fbLink: Record<string, string>;
	igLink: Record<string, string>;
};

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const contactUsInfo = await ContactUsService.getContactUsInformation(locale);

	return {
		props: {
			...contactUsInfo?.data?.attributes,
			...(await serverSideTranslations(locale, ['common', 'home']))
		},
		revalidate: 60
	};
};

export default ContactUsPage;