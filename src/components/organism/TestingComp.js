import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchBar from '../../components/atoms/SearchBar';
import landingPage from '../../Asset/images/landing-page.svg';
import { Context } from '../../context/context';

function TestingComp({ title }) {
	const context = useContext(Context);
	return (
		<>
			<Row>
				<Col xl={6}>
					<div className='text-container'>
						<h1 className='title-lp'>{title}</h1>
						<div className='search-container px-4 py-2 w-100'>
							<SearchBar />
						</div>
					</div>
				</Col>
				<Col xl={6}>
					<div className='img-container'>
						<img src={landingPage} className='lp-image' />
					</div>
				</Col>
			</Row>
		</>
	);
}

export default TestingComp;
