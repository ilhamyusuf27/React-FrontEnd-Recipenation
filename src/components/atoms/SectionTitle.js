import React from 'react';

function SectionTitle(props) {
	const { title } = props;
	return (
		<>
			<div className='title-container mb-5'>
				<h2>{title}</h2>
			</div>
		</>
	);
}

export default SectionTitle;
