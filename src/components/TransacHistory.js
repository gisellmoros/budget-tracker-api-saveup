import React, { useState } from 'react';
import './style.css';
import { Container, Card, Row, Col, Table, Tab, Tabs } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TransacHistory({
	transactions,
	onDeleteTransaction,
	entries,
}) {
	const [key, setKey] = useState('all');

	const incomeEntries = entries.filter(entry => entry.type === 'income');
	const expenseEntries = entries.filter(entry => entry.type === 'expense');

	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<h4 className='text-center mt-3'>Transaction History</h4>
						<Tabs
							id='controlled-tab-example'
							activeKey={key}
							onSelect={k => setKey(k)}
							className='m-auto'
						>
							<Tab eventKey='all' title='All'>
								<Table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Category</th>
											<th>Type</th>
											<th>Amount</th>
											<th>Action</th>
										</tr>
									</thead>
									{entries.map(data => (
										<tbody key={data._id}>
											<td>{data.name}</td>
											<td>{data.category}</td>
											<td>{data.type}</td>
											<td>Php {data.amount.toFixed(2)}</td>
											<button
												class='mx-1 btn btn-outline-danger'
												onClick={() => onDeleteTransaction(data._id)}
											>
												<DeleteIcon />
											</button>
										</tbody>
									))}
								</Table>
							</Tab>
							<Tab eventKey='income' title='Income'>
								<Table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Category</th>
											<th>Type</th>
											<th>Amount</th>
											<th>Action</th>
										</tr>
									</thead>
									{incomeEntries.map(data => (
										<tbody key={data._id}>
											<td>{data.name}</td>
											<td>{data.category}</td>
											<td>{data.type}</td>
											<td>Php {data.amount.toFixed(2)}</td>
											<button
												class='mx-1 btn btn-outline-danger'
												onClick={() => onDeleteTransaction(data._id)}
											>
												<DeleteIcon />
											</button>
										</tbody>
									))}
								</Table>
							</Tab>
							<Tab eventKey='expense' title='Expense'>
								<Table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Category</th>
											<th>Type</th>
											<th>Amount</th>
											<th>Action</th>
										</tr>
									</thead>
									{expenseEntries.map(data => (
										<tbody key={data._id}>
											<td>{data.name}</td>
											<td>{data.category}</td>
											<td>{data.type}</td>
											<td>Php {data.amount.toFixed(2)}</td>
											<button
												class='mx-1 btn btn-outline-danger'
												onClick={() => onDeleteTransaction(data._id)}
											>
												<DeleteIcon />
											</button>
										</tbody>
									))}
								</Table>
							</Tab>
						</Tabs>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
