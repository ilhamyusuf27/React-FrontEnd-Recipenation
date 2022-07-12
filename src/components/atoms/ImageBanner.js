import React from 'react';

import landingPage from '../../Asset/images/landing-page.svg';

function ImageBanner() {
	return (
		<>
			<div className='img-container'>
				<img src={landingPage} className='lp-image' />
			</div>
		</>
	);
}

export default ImageBanner;
