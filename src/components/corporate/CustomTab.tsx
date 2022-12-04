import React, { ReactElement } from 'react';
import { useTab } from '@chakra-ui/react'

const CustomTab: React.FC<CustomTabProps> = React.forwardRef((props, ref) => {
	/* @ts-ignore */
	const tabProps = useTab({ ...props, ref })
	const isSelected = !!tabProps['aria-selected']

	return (
		<div className={`bg-white mb-2 w-full p-5 rounded cursor-pointer ${isSelected && 'border-l-4 border-yellow text-white bg-corporate'}`} {...tabProps}>
			{tabProps.children}
		</div>
	)
})

type CustomTabProps = {
	children: ReactElement;
};

export default CustomTab;
