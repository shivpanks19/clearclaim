import React from "react";
import classNames from "classnames";

const Loader: React.FC<LoaderProps> = ({ percentage, text, label }) => {
	return (
		<div className="flex flex-col">
			{label && (
				<p className="italic mb-2">
					{label}
				</p>
			)}
			<div className='bg-loader-gray relative rounded-lg w-full'>
				<div className={classNames(`bg-tertiary abosolute rounded-lg p-1.5 pl-7 left-0 `, `${percentage}`)}>
					{text && (
						<p className="text-white font-medium">
							{text}
						</p>
					)}
				</div>
			</div>
		</div>
	)
};

type LoaderProps = {
	percentage: string;
	text?: string;
	label?: string;
};

export default Loader;