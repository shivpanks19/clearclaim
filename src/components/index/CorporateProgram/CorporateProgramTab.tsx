import React, { ReactElement } from 'react';
import { useTab } from '@chakra-ui/react'

const CorporateProgramTab: React.FC<CorporateProgramTabProps> = React.forwardRef((props, ref) => {
	/* @ts-ignore */
	const tabProps = useTab({ ...props, ref })
	const isSelected = !!tabProps['aria-selected']

	return (
		<div className={`bg-white mb-2 w-full p-5 rounded cursor-pointer ${isSelected && 'border-l-4 border-yellow text-white bg-corporate'}`} {...tabProps}>
			{tabProps.children}
		</div>
	)
})

type CorporateProgramTabProps = {
	children: ReactElement;
};

CorporateProgramTab.displayName = 'Corporate Program Tab';

export default CorporateProgramTab;
