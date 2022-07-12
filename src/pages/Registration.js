import React, { useEffect } from 'react';

import { Row, Col, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BgSide from '../components/atoms/BgSide';

import TitleForm from '../components/mollecule/TitleForm';

import RegistrationForm from '../components/organism/RegistrationForm';

function Registration() {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('token')) navigate('/');
	}, []);
	return (
		<>
			<div className='overflow-hidden'>
				<Row>
					<Col xl={6} className='remove-padding'>
						<BgSide />
					</Col>
					<Col xl={6} className='remove-padding'>
						<div className='form d-flex flex-column justify-content-center align-items-center position-relative'>
							<TitleForm title='Let’s Get Started !' desc='Create new account to access all features' />

							<RegistrationForm />
							<p>
								Already have account? <a href='/login'>Log in Here</a>
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Registration;
