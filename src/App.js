import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ProviderContext } from "./context/context";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AddRecipe from "./pages/AddRecipe";
import DetailRecipe from "./pages/DetailRecipe";
import Profile from "./pages/Profile";
import Testing from "./pages/Testing";
import Search from "./pages/Search";
import EditProfile from "./pages/EditProfile";

function App() {
	axios.interceptors.request.use(
		function (config) {
			if (localStorage.getItem("token")) {
				config.headers = {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				};
			}
			return config;
		},
		function (error) {
			// Do something with request error
			return Promise.reject(error);
		}
	);

	return (
		<ProviderContext>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Registration />} />
						<Route path="add-recipe" element={<AddRecipe />} />
						<Route path="profile" element={<Profile />} />
						<Route path="testing" element={<Testing />} />
						<Route path="recipe/:id" element={<DetailRecipe />} />
						<Route path="search" element={<Search />} />
						<Route path="edit-profile" element={<EditProfile />} />
						{/* <Route path='*' element={<NotFound />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</ProviderContext>
	);
}

export default App;
