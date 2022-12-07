import React from "react";

const Loader: React.FC<LoaderProps> = ({ percentage, text, label }) => {
	return (
		<>
			{label && (
				<p className="italic mb-2">
					{label}
				</p>
			)}
			<div className='bg-loader-gray relative rounded-lg mb-6 w-full'>
				<div className={`bg-tertiary abosolute rounded-lg p-1.5 pl-7 left-0 w-${percentage}`}>
					{text && (
						<p className="text-white font-medium">
							{text}
						</p>
					)}
				</div>
			</div>
		</>

	)
};

type LoaderProps = {
	percentage: string;
	text?: string;
	label?: string;
};

export default Loader;