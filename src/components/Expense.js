import React from 'react';
import {Container,Card} from 'react-bootstrap'


export default function Expense({ income, expense }) {
	return (
		<Container>
		<Card>
		<Card.Body>
			<h2>Your Balance</h2>
			<div>Php{income - expense}</div>
			<div>
				<div>
					<h2>Income</h2>
					<div>Php{income}</div>
				</div>
				<div>
					<h2>Expense</h2>
					<div>Php{expense}</div>
				</div>
			</div>
			</Card.Body>
			</Card>
		</Container>
	);
}