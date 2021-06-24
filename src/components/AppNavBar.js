import React, {useContext} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
import UserContext from 'userContext'

export default function NavBar() {

	const {user} = (useContext(UserContext))

	return (

		<Navbar bg="dark" variant="dark" expand="lg">
		<Nav className="container-fluid">
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav.Item>
				<Navbar.Brand>
					<Nav.Link as={NavLink} to="/">Save Up</Nav.Link>
				</Navbar.Brand>
			</Nav.Item>
			<Nav.Item className="ml-auto">
				<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={NavLink} to="/maindashboard">Dashboard</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
			</Nav.Item>
		</Navbar.Collapse>
			</Nav>
		</Navbar>

		)

}
