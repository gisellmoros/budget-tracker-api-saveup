import React, { useState, useEffect } from "react";
import Expense from "components/Expense";
import TransacHistory from "components/TransacHistory";
import TransactionForm from "components/TransactionForm";
import { uniqueId } from "../utils";
import './style.css'

const transactionData = [];
export default function Balance() {
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [transactions, setTransactions] = useState(transactionData);

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

		//console.log(income, expense)
		setIncome(income)
		setExpense(expense)
	}

	const newTransactionHandler = item => {
		let newTransactions = [...transactions,item]
		setTransactions(newTransactions)
		console.log('New here',newTransactions)
	}

	const deleteTransactionHandler = id => {
		console.log(id)
		const newTransactions = transactions.filter((item) => item.id != id)
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
			<Expense income={income} expense={expense} />
			<TransacHistory 
			transactions={transactions}
			onDeleteTransaction={deleteTransactionHandler} />
			<TransactionForm onNewTransaction={newTransactionHandler}/>
		</>
	);
}