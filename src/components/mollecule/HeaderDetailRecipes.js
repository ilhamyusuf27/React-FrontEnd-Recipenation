import React from 'react';

function HeaderDetailRecipe({ recipe }) {
	return (
		<>
			<h1 className='mb-5'>{recipe.title}</h1>
			<img src={recipe.recipe_images} className='detail-image' />
		</>
	);
}

export default HeaderDetailRecipe;
