import React, {useState,useEffect} from 'react'
import {uniqueId} from '../utils'
import './style.css'
import {Container,Card, Form, Row, Col} from 'react-bootstrap'
import {Select, MenuItem} from '@material-ui/core'
import TransacHistory from './TransacHistory'
import Swal from 'sweetalert2';

export default function TransactionForm({onNewTransaction}) {
	const [nameValue, setNameValue] = useState("")
	const [amountValue, setAmountValue] = useState("")
	const [categoryValue, setCategoryValue] = useState("")
	const [categories, setCategories] = useState([])


	const addTransaction = (type,e) => {
		 e.preventDefault()
		const data = { name: nameValue, category: categoryValue, amount: parseInt(amountValue), type: type }
		
		fetch('http://localhost:4000/api/entries', {
			method:'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: nameValue,
				category: categoryValue,
				amount: parseInt(amountValue),
				type: type
			})
			})
			.then(res => res.json())
			.then(data => {
				//console.log(data)
				Swal.fire({

					icon: 'success',
					title: 'Your transaction has been added'
				})
		})
		//onNewTransaction(data)

		// console.log(data)
		setNameValue("")
		setAmountValue("")
		setCategoryValue("")
	}

	useEffect(() => {
		fetch('http://localhost:4000/api/categories',{
			headers:{
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setCategories(data)
		})
	},[])
			
	return (
		<Row>
		<Col className="m-auto mt-3">
		<Card>
		<Card.Body>
			<h4 className="text-center">Add New Transaction</h4>
			<Form className="transaction-form" onSubmit={(e) => TransactionForm(e)}>
			<Form.Group>
								<Form.Label className="mt-3">
									Name
								</Form.Label>
								<Form.Control
									type="text" 
									value={nameValue}
									onChange={(e) => setNameValue(e.target.value)}
									required
								/>
							</Form.Group>
				<Form.Group>
				<Form.Label className="mt-3">
									Category
								</Form.Label>
								<Select
									fullWidth
							value={categoryValue}
							onChange={(e) =>setCategoryValue(e.target.value)}
							>
							{categories.map(category => <MenuItem value={category.name}>{category.name}</MenuItem>)}
								</Select>
							</Form.Group>

					<Form.Group>
								<Form.Label className="mt-3">
									Amount
								</Form.Label>
								<Form.Control
									type="number" 
						value={amountValue}
						onChange={(e)=> setAmountValue(e.target.value)}
								/>
							</Form.Group>
				<div>
					<button className='income-btn' onClick={(e) => addTransaction("income",e)}>Add Income</button>
					<button className='expense-btn' onClick={(e) => addTransaction("expense",e)}>Add Expense</button>
				</div>
			</Form>
			</Card.Body>
			</Card>
			</Col>
			</Row>
	

		)
}