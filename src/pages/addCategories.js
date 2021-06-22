import React, {useState,useEffect,useContext} from 'react'
import {Form,Button,Dropdown,Row,Col} from 'react-bootstrap'
import Swal from 'sweetalert2'
import UserContext from "userContext"
import {Select, MenuItem} from '@material-ui/core'


export default function Categories () {
	const { user } = useContext(UserContext)
	const [name,setName] = useState("")
	const [type, setType] = useState("")
	const [isActive,setIsActive] = useState(true)

	useEffect(()=> {
	if((name !== "" && type !== "")){
		setIsActive(true) 
	} else {
		setIsActive(false)
	}
},[name,type])

	function addCategory (e) {
		e.preventDefault ()

		fetch('http://localhost:4000/api/categories',{
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${localStorage.getItem("token")}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			type: type,
		})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
		Swal.fire({
		icon: "success",
		title: "Category created successfully.",
		text: "Category List is now updated!"
	})

		})
	setName("")
	setType("")
	}

	return(
<Row className="mt-5">
<Col xs={12} md={4} className="m-auto mt-5">

			<h3 className="text-center">Create Category</h3>
			<Form onSubmit={e => addCategory(e)}>
		<Form.Group>
			<Form.Label>Category Name</Form.Label>
			<Form.Control 
			type="text" 
			placeholder="Enter Category Name" 
			value={name} 
			onChange={e=>{setName(e.target.value)}}required/>
		</Form.Group>
		<Form.Group>
			<Select 
			className="w-100" 
			displayEmpty
			value={type}
			onChange={e=>{setType(e.target.value)}}required 
			>
				<MenuItem value="">Select a Category</MenuItem>
				<MenuItem value="Income">Income</MenuItem>
				<MenuItem value="Expense">Expense</MenuItem>
			</Select>
		</Form.Group>
		{
			user.email
			?
			<Button variant="primary" type="submit">Create Category</Button>
			:
			<Button variant="primary" type="submit" disabled>Create Category</Button>
		}
	</Form>
	</Col>
</Row>
		)




}