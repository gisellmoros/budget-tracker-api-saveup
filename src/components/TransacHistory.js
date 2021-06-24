import React from 'react'
import './style.css'
import {Container,Card,Row, Col,Table} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';


export default function TransacHistory({transactions,onDeleteTransaction,entries}) {
	return (
		<Container>
		<Row className="mt-5">
		<Col xs={12} md={6} className="m-auto mt-3">
		<Card>
		
		<h4 className="text-center mt-3">Transaction History</h4>
			<Table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Category</th>
					<th>Amount</th>
					<th>Action</th>
				</tr>
			</thead>
			{
				entries.map((data)=> 
				<tbody key={data._id}>
				<td>{data.name}</td>
				<td>{data.category}</td>
				<td>Php {data.amount}</td>
				<button class="mx-1 btn btn-outline-danger"onClick={() => onDeleteTransaction(data._id)}><DeleteIcon/></button>
				</tbody>
				)
			}
		</Table>
		</Card>
		</Col>
		</Row>
		</Container>

		)
}