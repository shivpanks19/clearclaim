import React from "react";
import Button from '@/elements/Button';
import { useTranslation } from 'next-i18next';
import useDisclosure from '@/hooks/useDisclosure';
import RegistrationForm from '@/components/common/RegistrationForm';

const WorkshopButton: React.FC<WorkshopButtonProps> = () => {
	const { t } = useTranslation();
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (<>
		<Button
			buttonStyleClass='outlineButton'
			variant='bg-transparent'
			rounded='rounded-sm'
			className='px-3 md:px-7 py-3 w-full mb-3 md:mb-0'
			onClick={onOpen}
		>
			<p className="text-secondary text-xs md:text-base font-medium">
				{t('Attend a FREE Workshop')}
			</p>
		</Button>
		<RegistrationForm
			isOpen={isOpen}
			onClose={onClose}
		/>
	</>
	)
};

type WorkshopButtonProps = {
};

export default WorkshopButton;