import React, { ReactElement } from 'react';
import classNames from 'classnames';

const Container: React.FC<ContainerProps> = ({ children, id, className, center }) => {
	return (
		<section
			id={id}
			className={classNames('fit-width', { 'mx-auto': center }, ...className.split(' '))}
		>
			{children}
		</section>
	);
};

type ContainerProps = {
	id?: string
	className?: string
	center?: boolean
	children: ReactElement | ReactElement[]
}

Container.defaultProps = {
	id: '',
	className: '',
	center: true,
};

export default Container;
