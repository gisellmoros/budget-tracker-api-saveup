import React, { useState, useEffect } from "react";
import Expense from "components/Expense";
import TransacHistory from "components/TransacHistory";
import TransactionForm from "components/TransactionForm";
import { uniqueId } from "../utils";
import { Container, Row, Col } from "react-bootstrap";

const transactionData = [
	{
		id: uniqueId(),
		name: "Cash",
		category: "Salary",
		amount: 5000,
		type: "income",
	},
	{
		id: uniqueId(),
		name: "Allowance",
		category: "Savings",
		amount: 3000,
		type: "income",
	},
	{
		id: uniqueId(),
		name: "Grocery",
		category: "Food",
		amount: 1000,
		type: "expense",
	},
	{
		id: uniqueId(),
		name: "Grocery",
		category: "Food",
		amount: 1000,
		type: "expense",
	},
];

export default function Balance() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [type, setType] = useState("");
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [transactions, setTransactions] = useState([]);
	const [entries, setEntries] = useState([]);
	const [amount, setAmount] = useState(0);

	const expenseCalculation = () => {
		let income = 0,
			expense = 0;

		entries.forEach((data) => {
			if (data.type === "income") {
				income += data.amount;
			} else if (data.type === "expense") {
				expense += data.amount;
			}
		});

		//console.log(income,expense)
		setIncome(income);
		setExpense(expense);
	};

	useEffect(() => {
		expenseCalculation();
	}, [entries]);

	useEffect(() => {
		fetch("http://localhost:4000/api/entries", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEntries(data);
			});
	}, [name, category, amount]);

	const newTransactionHandler = (item) => {
		let newTransactions = [...transactions, item];
		setTransactions(newTransactions);
		console.log("New transactions here", newTransactions);
	};

	const deleteTransactionHandler = (_id) => {
		// console.log(_id)
		const newTransactions = entries.filter((item) => item._id !== _id);
		// console.log(newTransactions)
		setTransactions(newTransactions);
	};

	// useEffect(() => {
	// 	expenseCalculation()
	// },[transactions]);

	return (
		<>
			<Container>
				<Row>
					<Col xs={12} md={6} className="w-100">
					<Expense income={income} expense={expense} />
					</Col>
					<Col xs={12} md={6}>
					<TransactionForm
					onNewTransaction={newTransactionHandler}
					setEntries={setEntries}
					/>
					</Col>
				</Row>
				<TransacHistory
					transactions={transactions}
					onDeleteTransaction={deleteTransactionHandler}
					entries={entries}
				/>
			</Container>
		</>
	);
}