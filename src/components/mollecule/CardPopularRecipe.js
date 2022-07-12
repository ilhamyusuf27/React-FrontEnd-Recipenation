import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function CardPopularRecipe({ item }) {
	return (
		<>
			<Row className='mx-5'>
				{item.map((e) => (
					<Col xl={4}>
						<a href={'recipe/' + e.recipe_id}>
							<Card className='bg-dark text-white card-size mb-4'>
								<Card.Img crossOrigin='anonymous' src={'http://localhost:8000/images/recipes/' + e.recipe_images.substring(15, e.recipe_images.length)} className='card-image' />
								<Card.ImgOverlay className='d-flex align-items-end'>
									<Card.Title>{e.title}</Card.Title>
								</Card.ImgOverlay>
							</Card>
						</a>
					</Col>
				))}
			</Row>
		</>
	);
}

export default CardPopularRecipe;
