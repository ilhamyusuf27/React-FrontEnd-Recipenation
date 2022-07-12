import React from 'react';
import { Form } from 'react-bootstrap';

function PhotoProfile({ handleUpload, userData }) {
	return (
		<>
			<div className='profile-container d-flex justify-content-center mt-5 mb-4'>
				<Form.Control type='file' id='file' className='input-image' onChange={handleUpload} />
				<Form.Label className='mb-3 input-image-user d-flex align-items-center justify-content-center' for='file'>
					<div className='text-center'>
						<img src={`http://localhost:8000/images/user/${userData?.photo_profil?.substring(13, userData?.photo_profil?.length)}`} alt='profile' className='photo-profile' />
					</div>
				</Form.Label>
			</div>
		</>
	);
}

export default PhotoProfile;
