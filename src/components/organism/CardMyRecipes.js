import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import imageDefault from "../../Asset/images/default_0.jpg";

function CardMyRecipes({ data }) {
	return (
		<>
			<Container>
				<div className="item-container">
					<Row>
						{data.map((e) => (
							<>
								<Col xl={3} md={4} sm={6}>
									<a href={`/recipe/${e.recipe_id}`}>
										<Card className="bg-dark text-white item-size mb-4">
											<Card.Img crossOrigin="anonymous" src={e.recipe_images ?? imageDefault} className="card-image" />
											<Card.ImgOverlay className="d-flex align-items-end">
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
