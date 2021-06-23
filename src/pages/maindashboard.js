import React, { useState, useEffect } from "react";
import Expense from "components/Expense";
import TransacHistory from "components/TransacHistory";
import TransactionForm from "components/TransactionForm";
import {uniqueId} from '../utils'
import {Container} from 'react-bootstrap'

const transactionData = [
{ id: uniqueId(), name: "Salary", amount: 5000, type: "income" },
{ id: uniqueId(), name: "Cash", amount: 3000, type: "income" },
{ id: uniqueId(), name: "Grocery", amount: 1000, type: "expense" },
{ id: uniqueId(), name: "Grocery", amount: 1000, type: "expense" }
]

export default function Balance() {
	const [name, setName] = useState("")
	const [type, setType] = useState("")
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [transactions, setTransactions] = useState([]);


	useEffect(() => {
		fetch('http://localhost:4000/api/categories',{
			headers:{
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			//console.log(data)
		})
	},[])
	
	const expenseCalculation = () => {
		let income = 0,
			expense = 0;

		transactionData.forEach((data) => {
			if (data.type === "income") {
				income += data.amount
			} else if (data.type === "expense") {
				expense += data.amount
			}
		});

		//console.log(income,expense)
		setIncome(income)
		setExpense(expense)
	}

	const newTransactionHandler = item => {
		let newTransactions = [...transactions,item]
		setTransactions(newTransactions)
		console.log('New transactions here',newTransactions)
	}

	const deleteTransactionHandler = id => {
		//console.log(id)
		const newTransactions = transactions.filter((item) => item.id !== id)
		setTransactions(newTransactions)
	}

	useEffect(() => {
		expenseCalculation()
	},[]);

	useEffect(() => {
		expenseCalculation()
	},[transactions]);

	return (
		<>
		<Container>
			<Expense income={income} expense={expense} />
			<TransacHistory 
			transactions={transactions}
			onDeleteTransaction={deleteTransactionHandler} />
			<TransactionForm onNewTransaction={newTransactionHandler}/>
		</Container>
		</>
	);
}