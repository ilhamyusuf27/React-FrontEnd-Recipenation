import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionContent from '../mollecule/SectionContent';
import ImageNewRecipe from '../atoms/ImageNewRecipe';

function NewRecipeContent({ item }) {
	return (
		<>
			<Row className='h-100'>
				<Col xl={6} className='h-100'>
					<ImageNewRecipe item={item} />
				</Col>
				<Col xl={6} className='h-100'>
					<SectionContent title={item[0]?.title} content={item[0]?.ingredients} recipe_id={item[0]?.recipe_id} />
				</Col>
			</Row>
		</>
	);
}

export default NewRecipeContent;
