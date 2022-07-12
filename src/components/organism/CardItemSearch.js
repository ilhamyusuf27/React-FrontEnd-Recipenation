import React from 'react';
import { Col, Card } from 'react-bootstrap';

function CardItemSearch({ item }) {
	return (
		<>
			<a href={`/recipe/${item?.recipe_id}`} target='_blank' className='link-display'>
				<Col>
					<Card className='card-container'>
						<Card.Img variant='top' src={`http://localhost:8000/images/recipes/${item?.recipe_images?.substring(15, item?.recipe_images?.length)}`} className='card-image-search' />
						<Card.Body>
							<Card.Title>{item?.title?.length > 20 ? item?.title?.substring(0, 20) + '...' : item?.title}</Card.Title>
							<Card.Text>{item?.ingredients?.length > 100 ? item?.ingredients.substring(0, 100) + '...' : item?.ingredients}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</a>
		</>
	);
}

export default CardItemSearch;
