import React from 'react';
import FormComment from '../mollecule/FormComment';

function CommentSection() {
	return (
		<>
			<div className='mb-5'>
				<FormComment />
			</div>
			<div className='mb-5'>
				<h3>Comment</h3>
				<div></div>
			</div>
		</>
	);
}

export default CommentSection;
