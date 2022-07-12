import React from 'react';
import SearchBar from '../atoms/SearchBar';

function TitleHome() {
	return (
		<>
			<div className='text-container'>
				<h1 className='title-lp'>
					Discover Recipe
					<br />& Delicious Food
				</h1>
				<div className='search-container px-4 py-2 w-100'>
					<SearchBar />
				</div>
			</div>
		</>
	);
}

export default TitleHome;
