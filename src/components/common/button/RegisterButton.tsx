import React from "react";
import Button from '@/elements/Button';
import classNames from 'classnames';
import useDisclosure from '@/hooks/useDisclosure';
import RegistrationForm from '@/components/common/RegistrationForm';

const RegisterButton: React.FC<RegisterButtonProps> = ({ className }) => {
	const classNameList = className ? className.split(' ') : [];
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Button
				variant='bg-tertiary'
				rounded='rounded-sm'
				className={classNames('border-0 px-5 py-3 w-full', ...classNameList)}
				onClick={onOpen}
			>
				<p className="text-white text-sm lg:text-lg font-medium">
					Register Now
				</p>
			</Button>
			<RegistrationForm
				isOpen={isOpen}
				onClose={onClose}
			/>
		</>
	)
};

type RegisterButtonProps = {
	className?: string;
};

export default RegisterButton;