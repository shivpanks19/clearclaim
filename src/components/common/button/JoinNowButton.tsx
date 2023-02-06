import React from "react";
import Text from '@/elements/Text';
import Button from '@/elements/Button';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';

const JoinNowButton: React.FC<JoinNowButtonProps> = ({ className }) => {
	const { t } = useTranslation();
	const classNameList = className ? className.split(' ') : [];
	return (
		<Button
			buttonStyleClass='outlineButton'
			variant='bg-transparent'
			rounded='rounded-sm'
			className={classNames('px-5 py-3 grow', ...classNameList)}
		>
			<Text
				variant='text-secondary'
				fontSize='text-lg'
				fontWeight='font-medium'
			>
				{t('Join Now for FREE')}
			</Text>
		</Button>
	)
};

type JoinNowButtonProps = {
	className?: string;
};

export default JoinNowButton;