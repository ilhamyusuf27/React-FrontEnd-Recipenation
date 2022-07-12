import React from 'react';

function Footer() {
	return (
		<>
			<div className='footer-container'>
				<div className='d-flex flex-column justify-content-center align-items-center h-75'>
					<h2>Eat, Cook, Repeat</h2>
					<p>Share your best recipe by uploading here !</p>
				</div>
				<ul className='footer-navbar d-flex justify-content-center'>
					<li className='px-2'>Product</li>
					<li className='px-2'>Company</li>
					<li className='px-2'>Learn More</li>
					<li className='px-2'>Get in Touch</li>
				</ul>
			</div>
		</>
	);
}

export default Footer;
