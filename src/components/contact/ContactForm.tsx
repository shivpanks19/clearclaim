import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from 'next/router';
import EnquiryService from "@/services/enquiry";

const ContactForm: React.FC<ContactFormProps> = () => {
	const router = useRouter();
	const [message, setMessage] = useState('');

	useEffect(() => {
		return (() => {
			setMessage('')
		})
	}, [])

	const resetMessage = () => {
		setTimeout(() => {
			setMessage('')
		}, 3000)
	};

	const submitHandler = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();
		event.stopPropagation();
		const contactForm = document.getElementById('contact-form') as HTMLFormElement;
		const formData = new FormData(contactForm);
		const data = {};
		// Display the key/value pairs
		/* @ts-ignore */
		for (const [key, value] of formData.entries()) {
			data[key] = value;
		};

		EnquiryService.postContactUsForm(data)
			.then(() => {
				setMessage('Thank you for reaching out! We will get back to you soon!');
				router.query.CONTACT_SUCCESS = 'true';
				router.push(router);
			})
			.catch(() => {
				setMessage('Something went wrong! Please try again, or contact us.');
			})
			.finally(()=>{
				resetMessage();
				contactForm.reset();
			})
	};

	return (
		<form className='md:grid md:grid-cols-2 gap-10' action="" id='contact-form' method='POST' onSubmit={submitHandler}>
			<div className="inputGrp mb-5 md:col-span-2 flex flex-col">
				<label htmlFor="fullname" className='text-primary md:text-xl font-semibold'>Your Name:</label>
				<input type="text" id='fullname' className="fullname px-2 h-14 text-2xl rounded border" name='fullname' />
			</div>
			<div className="inputGrp mb-5 flex flex-col">
				<label htmlFor="email" className='text-primary md:text-xl font-semibold'>Email ID:</label>
				<input type="email" id='email' className="fullname px-2 h-14 text-2xl rounded border" name='email' />
			</div>
			<div className="inputGrp mb-5 flex flex-col">
				<label htmlFor="phone" className='text-primary md:text-xl font-semibold'>Phone No.:</label>
				<input type="phone" id='phone' className="fullname px-2 h-14 text-2xl rounded border" name='phone' />
			</div>
			<div className="inputGrp mb-5 md:col-span-2 flex flex-col">
				<label htmlFor="message" className='text-primary md:text-xl font-semibold'>Message:</label>
				<textarea name="message" id="message" className="fullname px-2 h-22 text-2xl rounded border" cols={30} rows={5}></textarea>
			</div>
			<input type="submit" value={message?.length > 0 ? message : 'Send us a message'} className='w-full bg-tertiary text-white font-medium px-20 py-3 rounded col-span-2 cursor-pointer' />
		</form>
	)
};

type ContactFormProps = {};

export default ContactForm;