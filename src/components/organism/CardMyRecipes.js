import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function CardMyRecipes({ data }) {
	return (
		<>
			<Container>
				<div className='item-container'>
					<Row>
						{data.map((e) => (
							<>
								<Col xl={3}>
									<a href={`/recipe/${e.recipe_id}`}>
										<Card className='bg-dark text-white item-size mb-4'>
											<Card.Img crossOrigin='anonymous' src={'http://localhost:8000/images/recipes/' + e.recipe_images.substring(15, e.recipe_images.length)} className='card-image' />
											<Card.ImgOverlay className='d-flex align-items-end'>
												<Card.Title>{e.title}</Card.Title>
											</Card.ImgOverlay>
										</Card>
									</a>
								</Col>
							</>
						))}
					</Row>
				</div>
			</Container>
		</>
	);
}

export default CardMyRecipes;
