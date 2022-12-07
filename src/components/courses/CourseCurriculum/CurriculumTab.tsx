import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { useTab, useMultiStyleConfig } from '@chakra-ui/react'

const CurriculumTab: React.FC<CurriculumTabProps> = React.forwardRef((props, ref) => {
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
					'bg-tertiary text-white w-full p-6 h-22 cursor-pointer': true,
					'border-l-8 border-yellow text-price-yellow bg-why-us-selected': isSelected,
					'rounded-tl': topTab,
					'rounded-bl': bottomTab
				})
			}
			{...tabProps}
		>
			{tabProps.children}
		</div >
	)
})

type CurriculumTabProps = {
	children: ReactElement;
	topTab?: boolean;
	bottomTab?: boolean;
};

export default CurriculumTab;
