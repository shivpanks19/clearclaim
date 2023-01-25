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
			className='px-5 md:px-20 py-3 w-full text-sm md:text-lg text-white font-medium '
		>
			<p>
				{t('Register Now')}
			</p>
		</Button>
	)
};

type RegisterButtonProps = {};

export default RegisterButton;