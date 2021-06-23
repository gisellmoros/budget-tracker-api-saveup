import React, {useState} from 'react'
import {uniqueId} from '../utils'
import '../pages/style.css'

export default function TransactionForm({onNewTransaction}) {
	const [nameValue, setNameValue] = useState("")
	const [amountValue, setAmountValue] = useState("")

	const addTransaction = (type,e) => {
		e.preventDefault()
		const data = { id: uniqueId(), name: nameValue, amount: parseInt(amountValue), type: type }

		onNewTransaction(data)

		setNameValue("")
		setAmountValue("")
	}

	return (
		<div>
			<h4>Add New Transaction</h4>
			<form>
				<label>
				Name
					<div>
						<input 
						type="text" 
						value={nameValue}
						onChange={(e) => setNameValue(e.target.value)}/>
					</div>
				</label>
					<label>
					Amount
					<div>
						<input 
						type="number" 
						value={amountValue}
						onChange={(e)=> setAmountValue(e.target.value)}/>
					</div>
				</label>
				<div>
					<button onClick={(e) => addTransaction("income",e)}>Add Income</button>
					<button onClick={(e) => addTransaction("expense",e)}>Add Expense</button>
				</div>
			</form>
		</div>

		)
}