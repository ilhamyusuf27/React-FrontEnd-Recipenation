import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavbarHeader from "../components/organism/NavbarHeader";
import SectionTilte from "../components/atoms/SectionTitle";
import Footer from "../components/organism/Footer";
import CardPopularRecipe from "../components/mollecule/CardPopularRecipe";
import PaginationItem from "../components/mollecule/PaginationItem";

import NewRecipeContent from "../components/mollecule/NewRecipeContent";

import BannerHome from "../components/organism/BannerHome";

import axios from "../axios/axios";

function Home() {
	const [item, setItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(6);

	useEffect(() => {
		const getRecipe = async () => {
			await axios.get("recipe/trending").then((res) => {
				setItems(res.data.result);
			});
		};

		getRecipe();
	}, []);

	const indexOfLastPage = currentPage * itemPerPage;
	const indexOfFirstPage = indexOfLastPage - itemPerPage;
	const currentItem = item.slice(indexOfFirstPage, indexOfLastPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<div className="bg-color ">
				<Container>
					<NavbarHeader />
					<BannerHome />
					<div className="mt-5 content-container">
						<SectionTilte title="New Recipe" />
						<NewRecipeContent item={item} />
					</div>
					<div className="popular-container">
						<SectionTilte title="Popular Recipe" />
						<CardPopularRecipe item={currentItem} />
					</div>
					<PaginationItem itemPerPage={itemPerPage} totalItem={item.length} paginate={paginate} currentPage={currentPage} />
				</Container>
				<Footer />
			</div>
		</>
	);
}

export default Home;
