import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FormComment({ comment, setComment, handleSend }) {
	return (
		<>
			<Form.Control as='textarea' rows={5} placeholder='Comment :' className='comment-box mb-3' value={comment} onChange={(e) => setComment(e.target.value)} />
			<div className='d-flex justify-content-center'>
				<Button variant='warning' className='comment-button' onClick={handleSend}>
					Send
				</Button>
			</div>
		</>
	);
}

export default FormComment;
