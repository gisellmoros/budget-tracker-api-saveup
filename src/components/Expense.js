import React from 'react';
import {Container,Card, Row, Col} from 'react-bootstrap'
import './style.css'


export default function Expense({ income, expense }) {
	return (
		<Card className="expense-card">
		<Card.Body>
			<h3 className="text-center">Your Balance</h3>
			<Row className='balance-val text-center'>
			<Col>
				Php {(income - expense).toFixed(2)}
			</Col>
			</Row>
			<Row>
				<Col className='col col-income'>
					<h4>Income</h4>
					<div className='income-text'>Php {(income).toFixed(2)}</div>
				</Col>
				<Col className='col col-expense'>
					<h4>Expense</h4>
					<div className='expense-text'>Php {(expense).toFixed(2)}</div>
				</Col>
			</Row>
			</Card.Body>
			</Card>
	
	);
}