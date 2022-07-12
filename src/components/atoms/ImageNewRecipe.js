import React from 'react';

function ImageNewRecipe({ item }) {
	return (
		<>
			<div className='new-recipe-img-container'>
				<img src={'http://localhost:8000/images/recipes/' + item[0]?.recipe_images?.substring(15, item[0].recipe_images.length)} className='image-new-recipe' alt='ini gambar' />
			</div>
		</>
	);
}

export default ImageNewRecipe;
