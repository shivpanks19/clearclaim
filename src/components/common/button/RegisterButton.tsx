import React from "react";
import Text from '@/elements/Text';
import Button from '@/elements/Button';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { useDisclosure } from '@chakra-ui/react';
import RegistrationForm from '@/components/common/RegistrationForm';

const RegisterButton: React.FC<RegisterButtonProps> = ({ className }) => {
	const { t } = useTranslation();
	const classNameList = className ? className.split(' ') : [];
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Button
			variant='bg-tertiary'
			rounded='rounded-sm'
			className={classNames('px-5 py-3 w-full', ...classNameList)}
			onClick={onOpen}
		>
			<p className="text-white text-sm lg:text-lg font-medium">
				{t('Register Now')}
			</p>
			<RegistrationForm
				isOpen={isOpen}
				onClose={onClose}
			/>
		</Button>
	)
};

type RegisterButtonProps = {
	className?: string;
};

export default RegisterButton;