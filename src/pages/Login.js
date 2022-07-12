import React, { useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import BgSide from '../components/atoms/BgSide';

import TitleForm from '../components/mollecule/TitleForm';

import LoginForm from '../components/organism/LoginForm';

function Login() {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('token')) {
			window.location.href('/');
		}
	}, []);

	return (
		<>
			<div className='overflow-hidden'>
				<Row>
					<Col xl={6} className='remove-padding'>
						<BgSide />
					</Col>
					<Col xl={6} className='remove-padding'>
						<div className='form d-flex flex-column justify-content-center align-items-center'>
							<TitleForm title='Welcome' desc='Log in into your exiting account' />
							<LoginForm />

							<div className='size-form mb-3'>
								<div className='d-flex justify-content-end'>
									<a href='#'>Forgot Password?</a>
								</div>
							</div>
							<p>
								Don't have an account?<a href='/register'>Sign Up</a>
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Login;
