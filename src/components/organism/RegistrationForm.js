import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import InputText from '../atoms/InputText';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone_number, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errMsg, setErrMsg] = useState('');

	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		setIsLoading(true);
		axios
			.post('http://localhost:8000/registration', {
				name,
				email,
				phone_number,
				password,
				rePassword,
			})
			.then(() => {
				navigate('/login');
			})
			.catch((err) => {
				// console.log(err);
				setIsLoading(false);
				setIsError(true);
				setErrMsg(err?.response?.data);
			});
	};

	return (
		<>
			{isError ? (
				<Alert variant='danger' className='position-absolute text-center'>
					{errMsg}
				</Alert>
			) : null}
			<Form className='size-form' onSubmit={handleRegister}>
				<InputText label='Name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
				<InputText label='Email address*' type='email' placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
				<InputText label='Phone Number' type='text' placeholder='08xxxxxxxxxx' value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
				<InputText label='Create New Password' type='password' placeholder='Create New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
				<InputText label='New Password' type='password' placeholder='New Password' value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
				<Form.Check type='checkbox' label='I agree to terms & conditions' className='mb-4' />
				<div className='d-grid gap-2'>
					<Button variant='warning' type='submit' size='lg' className='px-2 btn-color mb-2' disabled={isLoading}>
						{isLoading ? 'Loading...' : 'Register'}
					</Button>
				</div>
			</Form>
		</>
	);
}

export default RegistrationForm;
