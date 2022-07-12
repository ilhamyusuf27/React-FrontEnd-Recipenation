import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavbarHeader from '../components/organism/NavbarHeader';
import SectionTilte from '../components/atoms/SectionTitle';
import SectionContent from '../components/mollecule/SectionContent';
import Footer from '../components/organism/Footer';
import TestingComp from '../components/organism/TestingComp';

import axios from 'axios';
import { Context, ProviderContext, useAppContext } from '../context/context';

function Home() {
	// const [item, setItems] = useState([]);
	// useEffect(() => {
	// 	axios.get('http://localhost:8000/recipe/trending').then((res) => {
	// 		setItems(res.data.result);
	// 	});
	// }, []);

	// const valueItem = {
	// 	item,
	// };
	// const context = useContext(Context);
	// console.log(context);
	// const linkImage = 'http://localhost:8000/images/recipes/';

	// useEffect(() => {
	// const getRecipe = async () => {
	// 	await
	// 	});
	// };
	// getRecipe();
	// }, []);

	return (
		<ProviderContext>
			<div className='bg-color lp-container'>
				<Container className='w-100'>
					<NavbarHeader />
					<TestingComp title='Testing Props' />
					<div className='mt-5 content-container'>
						<SectionTilte title='New Recipe' />
						<Row className='h-100'>
							<Col xl={6} className='h-100'>
								<div className='new-recipe-img-container'>
									{/* <img src={linkImage + item[0]?.recipe_images?.substring(15, item[0].recipe_images.length)} className='image-new-recipe' alt='ini gambar' /> */}
								</div>
							</Col>
							<Col xl={6} className='h-100'>
								{/* <SectionContent title={item[0]?.title} content={item[0]?.ingredients} /> */}
							</Col>
						</Row>
					</div>
					<div className='popular-container mb-5'>
						<SectionTilte title='Popular Recipe' />
						<Row>
							{/* {item.map((e) => ( */}
							<Col xl={4}>
								<Card className='bg-dark text-white card-size mb-4'>
									{/* <Card.Img crossOrigin='anonymous' src={linkImage + e.recipe_images.substring(15, e.recipe_images.length)} className='card-image' /> */}
									<Card.ImgOverlay className='d-flex align-items-end'>{/* <Card.Title>{e.title}</Card.Title> */}</Card.ImgOverlay>
								</Card>
							</Col>
							{/* ))} */}
						</Row>
					</div>
				</Container>
				<Footer />
			</div>
		</ProviderContext>
	);
}

export default Home;
