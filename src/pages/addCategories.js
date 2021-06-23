import React, {useState,useEffect,useContext} from 'react'
import {Form,Button,Row,Col, Card} from 'react-bootstrap'
import Swal from 'sweetalert2'
import UserContext from "userContext"
import {Select, MenuItem} from '@material-ui/core'


export default function Entry () {
	const { user } = useContext(UserContext)
	const [name,setName] = useState("")
	const [type, setType] = useState("")
	const [amount,setAmount] = useState(0)
	const [isActive,setIsActive] = useState(true)
	

	useEffect(()=> {
	if((name !== "" && type !== "")){
		setIsActive(true) 
	} else {
		setIsActive(false)
	}
},[name,type])

	function addEntry (e) {
		e.preventDefault ()
		let token = localStorage.getItem('token')

		fetch('http://localhost:4000/api/categories/',{
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${localStorage.getItem("token")}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			type: type
		})
		})
		.then(res => res.json())
		.then(data => {
			if(data._id) {
				console.log('Data from Line 38',data)
				Swal.fire({
				icon: "success",
				title: "Entry created successfully.",
				text: "Entry List is now updated!"
				})
			} else {
				Swal.fire({

					icon: 'error',
					title: 'Course Creation Failed.',

				})
			}
			
		 })
	setName("")
	setType("")
	setAmount("")
	}

	return(
<Row className="mt-5">
<Col xs={12} md={4} className="m-auto mt-3">
<Card className="category-form">
<Card.Body>

			<h3 className="text-center mt-2">Add Entry</h3>
			
			<Form onSubmit={e => addEntry(e)}>
		<Form.Group>
			<Form.Label className="mt-3">Transaction Name</Form.Label>
			<Form.Control 
			type="text" 
			placeholder="Your transaction here" 
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
				<MenuItem value="">Select a Category Type</MenuItem>
				<MenuItem value="Income">Income</MenuItem>
				<MenuItem value="Expense">Expense</MenuItem>
			</Select>
		</Form.Group>
		<Form.Group>
			<Form.Label className="mt-3">Amount</Form.Label>
			<Form.Control 
			type="number" 
			placeholder="0.00" 
			value={amount}  
			onChange={e=>{setAmount(e.target.value)}}required/>
		</Form.Group>
		{
			user.email
			?
			<Button variant="primary" type="submit">Submit Entry</Button>
			:
			<Button variant="primary" type="submit" disabled>Submit Entry</Button>
		}
	</Form>
	</Card.Body>
	</Card>
	</Col>
</Row>
		)




}