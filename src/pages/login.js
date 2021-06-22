import React, { useState, useEffect, useContext } from "react";
import UserContext from 'userContext'
import { InputGroup, Button, Row, Col, Card, FormControl } from "react-bootstrap";
import Swal from "sweetalert2";
import { Email, Lock } from "@material-ui/icons";
import { Button as LoginBtn } from '@material-ui/core';
import './style.css'


export default function Login() {
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		if (email !== "" && password !== "") {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password])

	function loginUser(e) {
		e.preventDefault()

		fetch("http://localhost:4000/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			//console.log(data)
		if(data.accessToken) {
				localStorage.setItem('token',data.accessToken)
			Swal.fire({
		icon: "success",
		title: "Logged in Successfully.",
		text: "You are now logged in to SaveUp!"
	})

fetch('http://localhost:4000/api/users/', {

		headers: {
			Authorization: `Bearer ${data.accessToken}`
		}
	})
	.then(res => res.json())
	.then(data => {
		//console.log(data)
		localStorage.setItem('email',data.email)
		localStorage.setItem('isAdmin',data.isAdmin)
		//setWillRedirect(true)

		setUser({
			email: data.email,
			isAdmin: data.isAdmin
		})
	})
		} else {
			Swal.fire({
				icon: "error",
				title: "Login Failed.",
				text: "You are already logged in."
			})
		}
	})
setEmail("")
setPassword("")

}

return(
	<Row className="form mt-5">
	<Col xs={12} md={4} className="m-auto mt-5">
		<Card className="login-form">
			<Card.Body>
				<h3 className="text-center mt-3 mb-4">Login</h3>
				<form onSubmit={(e) => loginUser(e)}>
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
								<InputGroup.Text><Email color='primary'/></InputGroup.Text>
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
								<InputGroup.Text><Lock color='primary'/></InputGroup.Text>
							</InputGroup>
					{isActive ? (
						<LoginBtn 
						variant="contained" 
						type="submit" 
						className="w-100"
						color="primary">
							Login
						</LoginBtn>
					) : (
						<LoginBtn 
						variant="contained" 
						type="submit" 
						className="w-100"
						color="primary"
						disabled>
							Login
						</LoginBtn>
					)}
				</form>
			</Card.Body>
		</Card>
	</Col>
</Row>
)

}