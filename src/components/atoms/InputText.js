import React from 'react';
import { Form } from 'react-bootstrap';

function InputText(props) {
	const { label, type, placeholder, value, onChange } = props;
	return (
		<>
			<Form.Label className='mb-1'>{label}</Form.Label>
			<Form.Control type={type} placeholder={placeholder} className='input-size p-2 mb-2' value={value} onChange={onChange} />
		</>
	);
}

export default InputText;
