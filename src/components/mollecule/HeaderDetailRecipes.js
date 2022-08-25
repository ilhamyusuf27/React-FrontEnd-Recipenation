/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import imageDefault from "../../Asset/images/default_0.jpg";

function HeaderDetailRecipe({ recipe }) {
	return (
		<>
			<h1 className="mb-5">{recipe.title}</h1>
			<img src={recipe.recipe_images ?? imageDefault} className="detail-image" alt="image" />
		</>
	);
}

export default HeaderDetailRecipe;
