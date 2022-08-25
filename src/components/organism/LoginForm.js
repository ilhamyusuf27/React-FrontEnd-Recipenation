import axios from "../../axios/axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InputText from "../atoms/InputText";
// require('dotenv').config();

function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	console.log();
	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoading(true);
		axios
			.post(`login`, {
				email,
				password,
			})
			.then((res) => {
				localStorage.setItem("token", res?.data?.token);
				localStorage.setItem("data", JSON.stringify(res?.data?.data));
				window.location.href = "/";
			})
			.catch((err) => {
				setIsError(true);
				setIsLoading(false);
				setErrMsg(err.response.data);
			});
	};
	return (
		<>
			{isError ? (
				<Alert variant="danger" className="position-absolute text-center">
					{errMsg}
				</Alert>
			) : null}
			<Form className="size-form" onSubmit={handleLogin}>
				<InputText label="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<InputText label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<Form.Check type="checkbox" label="I agree to terms & conditions" className="mb-4" />
				<div className="d-grid gap-2">
					<Button variant="warning" type="submit" size="lg" className="p-3 btn-color mb-2" disabled={isLoading}>
						{isLoading ? "Loading..." : "Log In"}
					</Button>
				</div>
			</Form>
		</>
	);
}

export default LoginForm;
