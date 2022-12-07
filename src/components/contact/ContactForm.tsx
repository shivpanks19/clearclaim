import React from "react";

const ContactForm: React.FC<ContactFormProps> = () => {
	return (
		<form className='grid grid-cols-2 gap-10 ' action="" method='POST'>
			<div className="inputGrp col-span-2 flex flex-col">
				<label htmlFor="fullname" className='text-primary text-xl font-semibold'>Your Name:</label>
				<input type="text" id='fullname' className="fullname px-2 h-14 text-2xl rounded border" name='fullname' />
			</div>
			<div className="inputGrp flex flex-col">
				<label htmlFor="email" className='text-primary text-xl font-semibold'>Email ID:</label>
				<input type="email" id='email' className="fullname px-2 h-14 text-2xl rounded border" name='fullname' />
			</div>
			<div className="inputGrp flex flex-col">
				<label htmlFor="phone" className='text-primary text-xl font-semibold'>Phone No.:</label>
				<input type="phone" id='phone' className="fullname px-2 h-14 text-2xl rounded border" name='fullname' />
			</div>
			<div className="inputGrp col-span-2 flex flex-col">
				<label htmlFor="message" className='text-primary text-xl font-semibold'>Message:</label>
				<textarea name="message" id="message" className="fullname px-2 h-22 text-2xl rounded border" cols={30} rows={5}></textarea>
			</div>
			<input type="submit" value="Send your message" className='w-22 bg-tertiary text-white px-20 py-3 rounded col-span-2' />
		</form>
	)
};

type ContactFormProps = {};

export default ContactForm;