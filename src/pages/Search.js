import axios from "../axios/axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import NavbarHeader from "../components/organism/NavbarHeader";
import CardItemSearch from "../components/organism/CardItemSearch";

function Search() {
	let search = window.location.search;
	let params = new URLSearchParams(search);
	let getKeyword = params.get("k");

	const [item, setItem] = useState([]);
	const [isError, setIsError] = useState(false);
	const [msg, setMsg] = useState("");
	useEffect(() => {
		axios
			.post("recipes/find", {
				title: getKeyword,
			})
			.then((res) => setItem(res?.data))
			.catch((err) => {
				setIsError(true);
				setMsg(err.response.data);
			});
	}, []);
	return (
		<>
			<Container>
				<NavbarHeader />
				<div className="m-5">
					<h1 className="mb-5">Hasil Pencarian '{getKeyword}'</h1>
					{isError ? (
						<h1 className="text-center">{msg}</h1>
					) : (
						<Row xs={1} md={2} lg={3} className="g-4">
							{item.map((item) => (
								<CardItemSearch item={item} />
							))}
						</Row>
					)}
				</div>
			</Container>
		</>
	);
}

export default Search;
