import React from "react";
import Image from "next/image";
import SectionHeadline from "@/components/common/SectionHeadline";
import TaxPlusCard from "@/components/index/TaxPlusCard";
import SurakshaCard from "@/components/index/SurakshaCard";

const Offerings: React.FC = () => {

	return (
		<div className='relative bg-darkblue px-7 lg:pb-32'>
			<SectionHeadline title='Tax+ offerings' white={true} className='pt-6 mb-9' />
			<div className="absolute top-64 xl:-top-24 right-0 w-1/2 mb-4">
				<Image
					src='/img/home/offerings_bg_artifact.png'
					width={800}
					height={535}
					alt='Video Bg Artifact'
				/>
			</div>
			<div className="absolute bottom-0 xl:bottom-24 left-0 w-1/2 mb-4">
				<Image
					src='/img/home/offerings_bg_artifact.png'
					width={800}
					height={535}
					alt='Video Bg Artifact'
				/>
			</div>
			<div className="md:w-216 flex flex-col md:flex-row justify-between gap-10 mx-auto z-20">
				<TaxPlusCard />
				<SurakshaCard />
			</div>
		</div>

	)
};

export default Offerings;