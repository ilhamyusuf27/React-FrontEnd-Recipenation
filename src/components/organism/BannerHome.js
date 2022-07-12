import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TitleHome from '../mollecule/TitleHome';
import ImageBanner from '../atoms/ImageBanner';

function BannerHome() {
	return (
		<>
			<Row>
				<Col xl={6}>
					<TitleHome />
				</Col>
				<Col xl={6}>
					<ImageBanner />
				</Col>
			</Row>
		</>
	);
}

export default BannerHome;
