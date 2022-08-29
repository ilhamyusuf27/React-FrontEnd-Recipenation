/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavbarHeader from "../components/organism/NavbarHeader";
import Footer from "../components/organism/Footer";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";

import HeaderDetailRecipe from "../components/mollecule/HeaderDetailRecipes";
import DetailRecipeContent from "../components/organism/DetailRecipeContent";

function DetailRecipe() {
	const params = useParams();

	const [recipe, setRecipe] = useState([]);
	useEffect(() => {
		axios
			.post("recipe/recipe-id", {
				recipe_id: params.id,
			})
			.then((res) => setRecipe(res?.data?.result[0]))
			.catch((error) => console.log(error));
	}, []);

	// const handleSend = (e) => {
	// 	e.preventDefault();
	// 	axios
	// 		.post(`recipe/${params.id}/comment`, {
	// 			content: comment,
	// 		})
	// 		.catch((error) => console.log(error));
	// };

	return (
		<>
			<div>
				<Container>
					<NavbarHeader />
					<div>
						<div className="text-center mb-5">
							<HeaderDetailRecipe recipe={recipe} />
						</div>
						<DetailRecipeContent recipe={recipe} />
					</div>
					{/* <CommentSection /> */}
				</Container>
				<Footer />
			</div>
		</>
	);
}

export default DetailRecipe;
