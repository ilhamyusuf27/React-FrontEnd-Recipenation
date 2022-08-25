import React from "react";
import { Container, Form, Table, Row, Col, Button } from "react-bootstrap";
import NavbarHeader from "../components/organism/NavbarHeader";

function EditProfile() {
	return (
		<>
			<NavbarHeader />
			<Container className="d-flex justify-content-center mt-5">
				<Table className="w-75">
					<tbody className="border-table">
						<tr>
							<td className="border-table pt-3 ps-5 fw-bold">Edit Profile</td>
							<td className="pt-4 ps-3">
								<Form>
									<Form.Group className="mb-3" controlId="email">
										<Row>
											<Col xl={3} className="d-flex justify-content-end align-items-center m-0">
												<Form.Label className="fw-bold">Name</Form.Label>
											</Col>
											<Col xl={7} className="">
												<Form.Control type="text" placeholder="Masukan Nama" />
											</Col>
										</Row>
									</Form.Group>

									<Form.Group className="mb-3" controlId="phone-number">
										<Row>
											<Col xl={3} className="d-flex justify-content-end align-items-center m-0">
												<Form.Label className="fw-bold">Phone Number</Form.Label>
											</Col>
											<Col xl={7} className="">
												<Form.Control type="text" placeholder="Masukan Nomor Telepon" />
											</Col>
										</Row>
									</Form.Group>

									<Form.Group className="mb-3" controlId="email">
										<Row>
											<Col xl={3} className="d-flex justify-content-end align-items-center m-0">
												<Form.Label className="fw-bold">Email</Form.Label>
											</Col>
											<Col xl={7} className="">
												<Form.Control type="text" placeholder="Masukan Nomor Telepon" />
											</Col>
										</Row>
									</Form.Group>
									<Button variant="warning" type="submit" className="text-white mb-4">
										Submit
									</Button>
								</Form>
							</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</>
	);
}

export default EditProfile;
