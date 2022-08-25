import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarHeader from "../components/organism/NavbarHeader";
import FooterProfile from "../components/organism/FooterProfile";
import axios from "../axios/axios";

import PhotoProfile from "../components/mollecule/PhotoProfile";
import MenuProfile from "../components/atoms/MenuProfile";
import CardMyRecipes from "../components/organism/CardMyRecipes";

function Profile() {
	const [data, setData] = useState([]);
	const [userData, setUserData] = useState([]);
	// const [userAvatar, setUserAvatar] = useState('');
	const user = JSON.parse(localStorage.getItem("data"));
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/login");
		} else {
			const { user_id } = JSON.parse(localStorage.getItem("data"));
			axios
				.post("recipe/id", {
					user_id,
				})
				.then((res) => {
					setData(res.data?.result);
				})
				.catch((err) => {
					console.log(err);
				});

			axios
				.get(`users/${user_id}`)
				.then((res) => {
					setUserData(res?.data?.result[0]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	const handleUpload = (e) => {
		const { user_id } = JSON.parse(localStorage.getItem("data"));
		const formData = new FormData();
		formData.append("user_id", user_id);
		formData.append("photo_profil", e.target.files[0]);
		console.log(user_id);
	};

	return (
		<>
			<div className="w-100 h-100">
				<Container>
					<NavbarHeader />
				</Container>
				<PhotoProfile handleUpload={handleUpload} userData={userData} />
				<div className="d-flex justify-content-center mb-5">
					<h2 className="profile-name">{user?.name}</h2>
				</div>
				<div className="d-flex justify-content-center mb-5">
					<Button variant="outline-secondary" disabled>
						Edit Profile
					</Button>
				</div>
				<div className="mt-5">
					<MenuProfile />
					<hr className="w-100" />
				</div>
				<div>
					<CardMyRecipes data={data} />
				</div>
				<FooterProfile />
			</div>
		</>
	);
}

export default Profile;
