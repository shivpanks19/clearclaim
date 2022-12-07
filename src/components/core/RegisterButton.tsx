import React from "react";

import Text from '@/elements/Text';
import Button from '@/elements/Button';
import { useTranslation } from 'next-i18next';

const RegisterButton: React.FC<RegisterButtonProps> = () => {
	const { t } = useTranslation();

	return (
		<Button
			variant='bg-tertiary'
			rounded='rounded-sm'
			className='px-20 py-3'
		>
			<Text
				variant='text-secondary'
				fontSize='text-lg'
				fontWeight='font-medium'
				className='text-white'
			>
				{t('Register Now')}
			</Text>
		</Button>
	)
};

type RegisterButtonProps = {};

export default RegisterButton;