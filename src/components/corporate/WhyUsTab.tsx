import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { useTab, useMultiStyleConfig } from '@chakra-ui/react'

const WhyUsTab: React.FC<WhyUsTabProps> = React.forwardRef((props, ref) => {
	/* @ts-ignore */
	const tabProps = useTab({ ...props, ref })
	const isSelected = !!tabProps['aria-selected']
	const { topTab, bottomTab } = props;
	const styles = useMultiStyleConfig('Tabs', tabProps)

	return (
		<div
			style={styles}
			className={
				classNames({
					'bg-white w-full p-5 h-22 cursor-pointer': true,
					'border-r-8 border-yellow text-white bg-why-us-selected': isSelected,
					'rounded-tl-2xl': topTab,
					'rounded-bl-2xl': bottomTab,
				})
			}
			{...tabProps}
		>
			{tabProps.children}
		</div >
	)
})

type WhyUsTabProps = {
	children: ReactElement;
	topTab?: boolean;
	bottomTab?: boolean;
};

export default WhyUsTab;
