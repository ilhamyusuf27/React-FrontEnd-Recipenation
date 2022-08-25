import React from "react";
import { Form } from "react-bootstrap";
import profile from "../../Asset/images/profile.jpg";

function PhotoProfile({ handleUpload, userData }) {
	return (
		<>
			<div className="profile-container d-flex justify-content-center mt-5 mb-4">
				<Form.Control type="file" id="file" className="input-image" onChange={handleUpload} />
				<Form.Label className="mb-3 input-image-user d-flex align-items-center justify-content-center" for="file">
					<div className="text-center">
						<img src={userData?.photo_profil ?? profile} alt="profile" className="photo-profile" />
					</div>
				</Form.Label>
			</div>
		</>
	);
}

export default PhotoProfile;
