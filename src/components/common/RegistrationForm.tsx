import React, { FormEvent, useState, useEffect } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import RegistrationService from "@/services/registration";
import SectionHeadline from "@/components/common/SectionHeadline";
import { AiOutlineClose } from 'react-icons/ai';

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
	const [message, setMessage] = useState('');

	const router = useRouter();

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const closeMessage = (message) => {
		setTimeout(() => {
			message.classList.add('opacity-0');
			sleep(1000).then(() => {
				setMessage('')
				onClose();
			})
		}, 2500)
	};

	useEffect(() => {
		return (() => {
			setMessage('');
		})
	}, [])

	const submitHandler = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();
		event.stopPropagation();
		const contactForm = document.getElementById('registration-form') as HTMLFormElement;
		const formData = new FormData(contactForm);
		const data = {};
		// Display the key/value pairs
		/* @ts-ignore */
		for (const [key, value] of formData.entries()) {
			data[key] = value;
		};

		RegistrationService.postRegistrationForm(data)
			.then(() => {
				setMessage('Thank you for registration!');
				router.query.REGISTRATION_SUCCESS = 'true';
				router.push(router);
			})
			.catch(() => {
				setMessage('Something went wrong! Please try again, or contact us.');
			})
			.finally(() => {
				const message = document.querySelector('.message');
				closeMessage(message);
				contactForm.reset();
			})
	};

	return (
		<>{isOpen && (
			<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-144 z-30 mx-auto rounded-3xl'>
				<p className={`message p-12 text-center bg-white transition-all opacity-100 text-xl font-bold rounded-2xl shadow ${!message && 'hidden'}`}>{message}</p>
				{!message && (
					<div className='rounded-3xl relative bg-white shadow py-4' >
						<button className='border-0 absolute right-8 top-8 z-40' onClick={() => { console.log('closing'); onClose() }}><AiOutlineClose size={24} /></button>
						<div >
							<div className="relative overflow-hidden xs:pr-44 pb-100 md:pb-0 py-3 px-8">
								<SectionHeadline
									title='Register Yourself'
									subtitle='Book your Free Seat'
									className='mb-6'
								/>
								<form className='flex flex-col gap-3 pr-2' action="" id='registration-form' method='POST' onSubmit={submitHandler}>
									<div className='mb-6 relative' id="fullname">
										<input required id="fullname" className=' mt-3 border border-tertiary border-2 rounded-lg text-lg p-4 w-full pr-2' placeholder=" " />
										<label className='absolute top-0 left-4 text-tertiary bg-white px-1' htmlFor="fullname">Name</label>
									</div>
									<div className='mb-6 relative' id="email">
										<input required id="email" className=' mt-3 border border-tertiary border-2 rounded-lg text-lg p-4 w-full pr-2' placeholder=" " />
										<label className='absolute top-0 left-4 text-tertiary bg-white px-1' htmlFor="email">Email</label>
									</div>
									<div className='mb-6 relative' id="phone">
										<input required id="phone" className=' mt-3 border border-tertiary border-2 rounded-lg text-lg p-4 w-full pr-2' placeholder=" " />
										<label className='absolute top-0 left-4 text-tertiary bg-white px-1' htmlFor="phone">Phone</label>
									</div>
									<div className="relative mb-6">
										<select className="block w-full py-2 pl-3 pr-10 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300" required>
											<option value="" disabled selected>Select an option</option>
											<option value='2016'>2016</option>
											<option value='2017'>2017</option>
											<option value='2018'>2018</option>
											<option value='2019'>2019</option>
											<option value='2020'>2020</option>
											<option value='2021'>2021</option>
											<option value='2022'>2022</option>
											<option value='2023'>2023</option>
											<option value='2024'>2024</option>
											<option value='2025'>2025</option>
											<option value='2026'>2026</option>
										</select>
									</div>
									<div className="">
										<p className="text-aphonic">Preferred mode of learning?</p>
										<div className="flex gap-4">
											<div className="">
												<input required checked type="radio" name='modeOfStudy' id='online' value='Online' />
												<label htmlFor="online"> Online</label>
											</div>
											<div className="">
												<input required type="radio" name='modeOfStudy' id='offline' value='Offline' />
												<label htmlFor="offline"> Offline</label>
											</div>
										</div>
									</div>
									<input required type="submit" value="Take me in!" className='border-0 w-full bg-tertiary text-white font-medium px-5 py-3 rounded col-span-2' />
								</form>
								<div className="absolute right-16 -bottom-10 md:-right-16 md:-bottom-16 w-44 md:w-64">
									<Image
										src='/img/girl_jump.png'
										width='247'
										height='539'
										alt='Girl Jump'
									/>
								</div>
							</div>
						</div >
					</div >
				)}
			</div >
		)}
		</>
	)
};

type RegistrationFormProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default RegistrationForm;