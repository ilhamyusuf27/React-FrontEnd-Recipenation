import React from 'react';

function TitleForm(props) {
	const { title, desc } = props;
	return (
		<>
			<h1 className='title mb-2'>{title}</h1>
			<p className='description mb-2'>{desc}</p>
			<hr className='mb-2' />
		</>
	);
}

export default TitleForm;
