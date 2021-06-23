import React, {useContext} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
import UserContext from 'userContext'

export default function NavBar() {

	const {user} = (useContext(UserContext))

	return (

		<Navbar bg="light" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
						<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
						<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
						<Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
						<Nav.Link as={NavLink} to="/maindashboard">Dashboard</Nav.Link>
			</Navbar.Collapse>

		</Navbar>

		)

}
