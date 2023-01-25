import React from "react";

import Text from '@/elements/Text';
import Button from '@/elements/Button';
import { useTranslation } from 'next-i18next';

const WorkshopButton: React.FC<WorkshopButtonProps> = () => {
	const { t } = useTranslation();

	return (
		<Button
			buttonStyleClass='outlineButton'
			variant='bg-transparent'
			rounded='rounded-sm'
			className='px-3 md:px-7 py-3 w-full mb-3 md:mb-0'
		>
			<Text
				variant='text-secondary'
				fontSize='text-xs'
				fontWeight='font-medium'
			>
				{t('Attend a FREE Workshop')}
			</Text>
		</Button>
	)
};

type WorkshopButtonProps = {
};

export default WorkshopButton;