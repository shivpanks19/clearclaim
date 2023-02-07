import React from 'react';
import Image from 'next/image';

const TestimonialCard: React.FC<TestimonialCardProps> = () => {
	return (
		<div className="w-76 mx-auto flex mb-28 justify-between">
			<div className="testimonial bg-lightblue h-10 border w-1/5 hover:w-2/5 transition-all"></div>
			<div className="testimonial bg-lightblue h-10 border w-1/5 hover:w-2/5 transition-all"></div>
			<div className="testimonial bg-lightblue h-10 border w-1/5 hover:w-2/5 transition-all"></div>
			<div className="testimonial bg-lightblue h-10 border w-1/5 hover:w-2/5 transition-all"></div>
			<div className="testimonial bg-lightblue h-10 border w-1/5 hover:w-2/5 transition-all"></div>
		</div>
	)
};

type TestimonialCardProps = {
};

export default TestimonialCard;