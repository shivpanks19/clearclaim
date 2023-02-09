import React, { FormEvent } from "react";
import Image from 'next/image';
import { toast } from 'react-toastify';
import RegistrationService from "@/services/registration";
import SectionHeadline from "@/components/common/SectionHeadline";
import {
	Modal,
	Stack,
	ModalOverlay,
	ModalContent,
	Radio,
	RadioGroup,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	fullname: string,
	email: string,
	phone: string,
	graduationYear: string,
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
	const [modeOfStudy, setModeOfStudy] = React.useState('Online');
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => {
		RegistrationService.postRegistrationForm(data);
	};


	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size='xl'>
				<ModalOverlay />
				<ModalContent rounded={'3xl'}>
					<ModalCloseButton />
					<ModalBody paddingY={8} paddingX={10} paddingRight={52} className=" relative overflow-hidden">
						<SectionHeadline
							title='Register Yourself'
							subtitle='Book your Free Seat'
							className='mb-6'
						/>
						<form className='flex flex-col gap-3' action="" id='registration-form' method='POST' onSubmit={handleSubmit(onSubmit)}>
							<FormControl className='mb-6' variant="floating" id="fullname" isRequired >
								<Input className='h-24' placeholder=" " {...register("fullname")} />
								<FormLabel>Name</FormLabel>
							</FormControl>
							<FormControl className='mb-6' variant="floating" id="email" isRequired >
								<Input className='h-24' placeholder=" " type='email' {...register("email")} />
								<FormLabel>Email Id:</FormLabel>
							</FormControl>
							<FormControl className='mb-6' variant="floating" id="phone" isRequired >
								<Input className='h-24' placeholder=" " {...register("phone")} />
								<FormLabel>Phone</FormLabel>
							</FormControl>
							<FormControl className='mb-6' variant="floating" id="graduationYear" isRequired >
								<Input className='h-24' placeholder=" " type='number' {...register("graduationYear")} />
								<FormLabel>Graduation</FormLabel>
							</FormControl>
							<RadioGroup className='mb-6' onChange={setModeOfStudy} value={modeOfStudy}>
								<p className="text-aphonic">Preferred mode of learning?</p>
								<Stack direction='row'>
									<Radio value='Online'>Online</Radio>
									<Radio value='Offline'>Offline</Radio>
								</Stack>
							</RadioGroup>
							<input type="submit" value="Take me in!" className='w-full bg-tertiary text-white font-medium px-5 py-3 rounded col-span-2' />
						</form>
						<div className="absolute -right-16 -bottom-16">
							<Image
								src='/img/girl_jump.png'
								width='247'
								height='539'
								alt='Girl Jump'
							/>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
};

type RegistrationFormProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default RegistrationForm;