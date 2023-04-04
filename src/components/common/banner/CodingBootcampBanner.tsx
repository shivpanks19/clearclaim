import React from 'react';
import Image from 'next/image';
import useDisclosure from '@/hooks/useDisclosure';
import RegistrationForm from '@/components/common/RegistrationForm';


const CodingBootcampSection: React.FC<CodingBootcampSectionProps> = ({ imgSrc }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div className="relative flex flex-col lg:flex-row xl:w-76 mb-12 md:mb-28 mx-5 md:mx-auto mt-48 md:mt-0 md:pl-64 items-center">
			<Image
				src={imgSrc}
				className='coding_bootcamp absolute md:left-0 -top-32 md:-top-6'
				width={388}
				height={314}
				alt='Coding Bootcamp'
			/>
			<div className="textSection flex flex-col lg:flex-row items-center gap-5 md:gap-12 w-full md:py-16 md:pl-40 md:pr-8 pt-44 h-74 md:h-auto xs:pt-56 px-5 md:px-0 bg-tertiary rounded">
				<div className="textSection">
					<p className="text-lg md:text-3xl font-semibold text-white mb-4 text-center md:text-left">Attend Live Coding Bootcamp</p>
					<p className="text-sm md:text-base text-white text-center md:text-left">Register Now to attend coding Bootcamp on Full Stack Development & get 2 Placement Drives</p>
				</div>
				<button className="border-0 bg-white flex-none rounded mb-5 md:mb-0 w-full md:w-64">
					<p
						className="text-sm md:text-base text-primary font-medium py-2 md:py-4"
						onClick={onOpen}
					> Reserve my seat</p>
				</button>
			</div>
			<RegistrationForm
				isOpen={isOpen}
				onClose={onClose}
			/>
		</div>
	)
};

type CodingBootcampSectionProps = {
	imgSrc: string;
};

export default CodingBootcampSection;