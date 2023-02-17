import React from "react";

const CourseDetailFooterTop: React.FC<CourseDetailFooterTopProps> = () => {
	return (
		<p className="bg-footer-bg text-white text-xl py-3 font-medium text-center border-b-2 border-white flex align-middle justify-center">
			<span className='text-4xl'>
				&#x1F449;
			</span>
			&nbsp; Have queries? Call us at +91 9412345678 &nbsp;
			<span className='text-4xl'>
				&#x1F448;
			</span>
		</p>
	)
};

type CourseDetailFooterTopProps = {
};

export default CourseDetailFooterTop;