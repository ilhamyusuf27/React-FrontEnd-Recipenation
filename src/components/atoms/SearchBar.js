import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
	const navigate = useNavigate();
	const [item, setItem] = useState('');
	const handleSearch = (e) => {
		navigate(`/search?k=${item}`);
	};

	return (
		<>
			<Form className='d-flex align-items-center w-70' onSubmit={handleSearch}>
				<BiSearch className='icon-color' />
				<Form.Control type='text' placeholder='Search Recipe' className='input-search shadow-none p-2' value={item} onChange={(e) => setItem(e.target.value)} />
			</Form>
		</>
	);
}

export default SearchBar;
