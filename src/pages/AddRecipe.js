import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarHeader from "../components/organism/NavbarHeader";
import Footer from "../components/organism/Footer";

import iconUpload from "../Asset/icon/icon_upload.png";

function AddRecipe() {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [recipeImage, setRecipeImage] = useState(null);
	const [nameImage, setNameImage] = useState("");
	// const [linkVideo, setLinkVideo] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/login");
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		const { user_id } = JSON.parse(localStorage.getItem("data"));
		const formData = new FormData();
		formData.append("user_id", user_id);
		formData.append("title", title);
		formData.append("ingredients", ingredients);
		formData.append("recipe_images", recipeImage);
		// formData.append("video_link", linkVideo);
		// console.log(formData.getAll(title));

		axios
			.post("https://recipenation-app.herokuapp.com/recipes/add", formData, {
				headers: {
					"content-type": "multipart/form-data",
				},
			})
			.then((res) => {
				setIsLoading(false);
				Swal.fire({
					icon: "success",
					title: "Succseed",
					text: res?.data,
				}).then((result) => (result.isConfirmed ? navigate("/") : null));
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div>
				<Container>
					<NavbarHeader />
					<Form className="px-5 mb-5 mt-5">
						<Form.Control
							type="file"
							id="file"
							className="input-image"
							onChange={(e) => {
								setRecipeImage(e.target.files[0]);
								setNameImage(e.target.files[0].name);
							}}
						/>
						<Form.Label className="mb-3 input-image-button d-flex align-items-center justify-content-center" for="file">
							<div className="text-center">
								{nameImage?.length ? (
									nameImage
								) : (
									<>
										<img src={iconUpload} alt="Icon Upload" className="mb-2" />
										<p>Upload File</p>
									</>
								)}
							</div>
						</Form.Label>
						<Form.Control type="text" placeholder="Name" className="input-grey input-size mb-3" value={title} onChange={(e) => setTitle(e.target.value)} />
						<Form.Control as="textarea" rows={5} placeholder="Ingredients" className="input-size input-grey mb-3" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
						{/* <Form.Control type='text' placeholder='Video' className='input-size input-grey mb-3' value={linkVideo} onChange={(e) => setLinkVideo(e.target.value)} /> */}
						<div className="text-center mt-5 button-submit-recipe">
							<Button variant="warning" size="lg" className="button-submit-recipe-width" onClick={handleSubmit}>
								{isLoading ? "Loading..." : "Post"}
							</Button>
						</div>
					</Form>
				</Container>
				<Footer />
			</div>
		</>
	);
}

export default AddRecipe;
