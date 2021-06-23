import React from 'react'
import '../pages/style.css'
import {Container,Card} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';

export default function TransacHistory({transactions,onDeleteTransaction}) {
	return (
		<Container>
		<Card className="mt-3">
		<h4>Transaction History</h4>
		<ul className="transactions"> 
		{
			transactions.map((data)=> 
				<li key={data.id}>
				<div>{data.name}</div>
				<div>
				<span>Php{data.amount}</span>
				<button onClick={() => onDeleteTransaction(data.id)}><DeleteIcon/></button>
				</div>
				</li>
				)
		}
		</ul>
		</Card>
		</Container>

		)
}