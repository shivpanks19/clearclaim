import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CustomMainTab from '@/components/corporate/CustomMainTab';
import CorpBeginnerSection from '@/components/corporate/CorpBeginnerSection';
import CorpIntermediateSection from '@/components/corporate/CorpIntermediateSection';
import CorpAdvancedSection from '@/components/corporate/CorpAdvancedSection';

const CorporateProgramNav: React.FC<CorporateProgramNavProps> = () => {
	return (
		<Tabs
			isFitted
			variant='unstyled'
			className='w-76 mx-auto bg-corporate-light'
		>
			<TabList className='w-full flex justify-between'>
				<CustomMainTab>
					<div className="flex flex-col">
						<p className='text-xl'>Beginner</p>
						<p className='text-xs'>13 months</p>
					</div>
				</CustomMainTab>
				<CustomMainTab>
					<div className="flex flex-col">
						<p className='text-xl'>Intermediate</p>
						<p className='text-xs'>11 months</p>
					</div>
				</CustomMainTab>
				<CustomMainTab>
					<div className="flex flex-col">
						<p className='text-xl'>Advanced</p>
						<p className='text-xs'>09 months</p>
					</div>
				</CustomMainTab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<CorpBeginnerSection />
				</TabPanel>
				<TabPanel>
					<CorpIntermediateSection />
				</TabPanel>
				<TabPanel>
					<CorpAdvancedSection />
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
};

type CorporateProgramNavProps = {};

export default CorporateProgramNav;
