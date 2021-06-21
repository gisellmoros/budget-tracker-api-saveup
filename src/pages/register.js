import React, { useState, useEffect } from "react";
import {
	Card,
	Row,
	Col,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";
import Swal from "sweetalert2";
import './style.css'

export default function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		if (
			firstName !== "" &&
			lastName !== "" &&
			email !== "" &&
			password !== "" &&
			confirmPassword !== "" &&
			password === confirmPassword
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [firstName, lastName, email, password, confirmPassword]);

	function registerUser(e) {
		e.preventDefault();

		fetch("http://localhost:4000/api/users/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				confirmPassword: confirmPassword,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				Swal.fire({
					icon: "success",
					title: "Registered Successfully.",
					text: "Congratulations for registering!",
				});
			});
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	}

	return (
		<Row className="form mt-5">
			<Col xs={12} md={4} className="form m-auto mt-5">
				<Card>
					<Card.Body>
						<h3 className="text-center m-3">Register</h3>
						<form onSubmit={(e) => registerUser(e)}>
							<InputGroup className="mb-3 mt-5">
								<FormControl
									type="text"
									placeholder="First Name"
									value={firstName}
									onChange={(e) => {
										setFirstName(e.target.value);
									}}
								/>
								<InputGroup.Text>First Name</InputGroup.Text>
							</InputGroup>
							<InputGroup className="mb-3">
								<FormControl
									type="text"
									placeholder="Last Name"
									value={lastName}
									onChange={(e) => {
										setLastName(e.target.value);
									}}
								/>
								<InputGroup.Text>Last Name</InputGroup.Text>
							</InputGroup>
							<InputGroup className="mb-3">
								<FormControl
									type="email"
									placeholder="Email Address"
									type="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<InputGroup.Text>Email Address</InputGroup.Text>
							</InputGroup>
							<InputGroup className="mb-3">
								<FormControl
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
								<InputGroup.Text>Password</InputGroup.Text>
							</InputGroup>
							<InputGroup className="mb-3">
								<FormControl
									type="password"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => {
										setConfirmPassword(e.target.value);
									}}
								/>
								<InputGroup.Text>
									Confirm Password
								</InputGroup.Text>
							</InputGroup>
							{isActive ? (
								<Button variant="primary" type="submit" className='w-100'>
									Submit
								</Button>
							) : (
								<Button
									variant="primary"
									type="submit"
									className='w-100'
									disabled
								>Register
								</Button>
							)}
						</form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}