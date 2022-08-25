import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function CardPopularRecipe({ item }) {
	return (
		<>
			<Row className='mx-5 mb-4'>
				{item.map((e) => (
					<Col xl={4}>
						<a href={'recipe/' + e.recipe_id}>
							<Card className='bg-dark text-white card-size'>
								<Card.Img crossOrigin='anonymous' src={e.recipe_images} className='card-image' />
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
