import React from 'react';
import Logo from '../../Asset/images/logo.svg';

function BgSide() {
	return (
		<>
			<div className='side-bg px-5 d-flex justify-content-center align-items-center'>
				<img src={Logo} />
			</div>
		</>
	);
}

export default BgSide;
