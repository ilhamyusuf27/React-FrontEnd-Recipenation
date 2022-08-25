import React from 'react';

function ImageNewRecipe({ item }) {
	return (
		<>
			<div className='new-recipe-img-container'>
				<img src={item[0]?.recipe_images} className='image-new-recipe' alt='ini gambar' />
			</div>
		</>
	);
}

export default ImageNewRecipe;
