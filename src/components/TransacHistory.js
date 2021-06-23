import React from 'react'
import '../pages/style.css'

export default function TransacHistory({transactions,onDeleteTransaction}) {
	return (
		<div>
		<h4>Transaction History</h4>
		<ul> 
		{
			transactions.map((data)=> 
				<li key={data.id}>{data.name} ${data.amount}<button onClick={() => onDeleteTransaction(data.id)}>Delete</button></li>)
		}
		</ul>
		</div>

		)
}