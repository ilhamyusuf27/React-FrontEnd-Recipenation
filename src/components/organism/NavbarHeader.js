import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import userIcon from "../../Asset/images/user-icon.svg";
import { Context } from "../../context/context";

function NavbarHeader() {
	const context = useContext(Context);
	const navigate = useNavigate();
	console.log(context);

	const handleLogOut = () => {
		localStorage.clear();
		window.location.href = "/";
	};

	return (
		<>
			<Navbar bg="none" expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/add-recipe">Add Recipe</Nav.Link>
							<Nav.Link href="/profile">Profile</Nav.Link>
						</Nav>
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								{context.isLogin ? (
									<NavDropdown title={context.item.name} id="basic-nav-dropdown">
										<NavDropdown.Item href="/edit-profile" className="text-muted" disabled>
											Edit Profile
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item onClick={handleLogOut}>Log Out</NavDropdown.Item>
									</NavDropdown>
								) : (
									<Button variant="outline-dark" href="/login">
										Login
									</Button>
								)}
							</Navbar.Text>
						</Navbar.Collapse>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarHeader;
