import React from 'react';

function HeaderDetailRecipe({ recipe }) {
	return (
		<>
			<h1 className='mb-5'>{recipe.title}</h1>
			<img src={'http://localhost:8000/images/recipes/' + recipe.recipe_images?.substring(15, recipe.recipe_images.length)} className='detail-image' />
		</>
	);
}

export default HeaderDetailRecipe;
