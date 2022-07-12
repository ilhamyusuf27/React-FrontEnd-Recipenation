import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Form, Row, Col, Button } from 'react-bootstrap';
import userIcon from '../../Asset/images/user-icon.svg';
import { Context } from '../../context/context';

function NavbarHeader() {
	const context = useContext(Context);
	console.log(context);
	return (
		<>
			{/* <Navbar className='navbar'>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Row className='w-100'>
						<Col xl={10}>
							<Nav className='me-auto'>
								<Nav.Link href='/'>Home</Nav.Link>
								<Nav.Link href='/add-recipe'>Add Recipe</Nav.Link>
								<Nav.Link href='/profile'>Profile</Nav.Link>
							</Nav>
						</Col>
						<Col xl={2}>
							<Nav className='me-auto d-flex justify-content-end'>
								<Nav.Link href='/login'>
									<img src={userIcon} className='login-icon' />
									<span className='px-3'>Login</span>
								</Nav.Link>
							</Nav>
						</Col>
					</Row>
				</Navbar.Collapse>
			</Navbar> */}
			<Navbar bg='none' expand='lg'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							<Nav.Link href='/add-recipe'>Add Recipe</Nav.Link>
							<Nav.Link href='/profile'>Profile</Nav.Link>
						</Nav>
						<Navbar.Collapse className='justify-content-end'>
							<Navbar.Text>
								<img src={userIcon} className='login-icon' />
								{context.isLogin ? <a href='/profile'>{context.item.name}</a> : <a href='/login'>Login</a>}
							</Navbar.Text>
						</Navbar.Collapse>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarHeader;
