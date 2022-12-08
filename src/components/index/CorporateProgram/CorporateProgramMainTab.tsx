import React, { ReactElement } from 'react';
import { useTab } from '@chakra-ui/react'

const CorporateProgramMainTab: React.FC<CorporateProgramTabProps> = React.forwardRef((props, ref) => {
	/* @ts-ignore */
	const tabProps = useTab({ ...props, ref })
	const isSelected = !!tabProps['aria-selected']

	return (
		<div className={`bg-white mb-2 w-full p-5 cursor-pointer ${isSelected && 'text-corporate bg-corporate-light'}`} {...tabProps}>
			{tabProps.children}
		</div>
	)
})

type CorporateProgramTabProps = {
	children: ReactElement;
};

CorporateProgramMainTab.displayName = 'Corporate Program Main Tab';

export default CorporateProgramMainTab;
