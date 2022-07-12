import React from 'react';
import { Button } from 'react-bootstrap';

function SectionContent(props) {
	const { title, content, recipe_id } = props;
	return (
		<>
			<div className='w-100 d-flex align-items-center justify-content-center recipe-content'>
				<div className='w-75'>
					<h3 className='mb-4'>{title}</h3>
					<hr className='mb-4 w-25' />
					<p className='mb-4'>{content}</p>
					<Button variant='warning' className='px-4 py-2' href={`/recipe/${recipe_id}`}>
						Learn More
					</Button>
				</div>
			</div>
		</>
	);
}

export default SectionContent;
