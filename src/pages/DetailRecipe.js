import React, { useEffect, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import NavbarHeader from '../components/organism/NavbarHeader';
import Footer from '../components/organism/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import HeaderDetailRecipe from '../components/mollecule/HeaderDetailRecipes';
import DetailRecipeContent from '../components/organism/DetailRecipeContent';
import CommentSection from '../components/organism/CommentSection';

function DetailRecipe() {
	const params = useParams();

	const [recipe, setRecipe] = useState([]);
	const [comment, setComment] = useState('');
	useEffect(() => {
		axios
			.post('http://localhost:8000/recipe/recipe-id', {
				recipe_id: params.id,
			})
			.then((res) => setRecipe(res?.data?.result[0]))
			.catch((error) => console.log(error));
	}, []);

	const handleSend = (e) => {
		e.preventDefault();
		axios
			.post(`localhost:8000/recipe/${params.id}/comment`, {
				content: comment,
			})
			.catch((error) => console.log(error));
	};

	console.log('test');
	return (
		<>
			<div>
				<Container>
					<NavbarHeader />
					<div>
						<div className='text-center mb-5'>
							<HeaderDetailRecipe recipe={recipe} />
						</div>
						<DetailRecipeContent recipe={recipe} />
					</div>
					<CommentSection />
				</Container>
				<Footer />
			</div>
		</>
	);
}

export default DetailRecipe;
