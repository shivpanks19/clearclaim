import React from "react";
import Text from '@/elements/Text';
import Button from '@/elements/Button';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';

const RegisterButton: React.FC<RegisterButtonProps> = ({ className }) => {
	const { t } = useTranslation();
	const classNameList = className ? className.split(' ') : [];
	return (
		<Button
			variant='bg-tertiary'
			rounded='rounded-sm'
			className={classNames('px-5 py-3 w-full', ...classNameList)}
		>
			<p className="text-white text-sm lg:text-lg font-medium">
				{t('Register Now')}
			</p>
		</Button>
	)
};

type RegisterButtonProps = {
	className?: string;
};

export default RegisterButton;