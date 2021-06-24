import React from 'react';
import {Container,Card, Row, Col} from 'react-bootstrap'
import './style.css'


export default function Expense({ income, expense }) {
	return (
		<Card className="expense-card">
		<Card.Body>
			<h3 className="text-center">Your Balance</h3>
			<div className='balance-val text-center'>Php {income - expense}</div>
			<div>
				<div className='col col-income'>
					<h4>Income</h4>
					<div className='income-text'>Php {income}</div>
				</div>
				<div className='col col-expense'>
					<h4>Expense</h4>
					<div className='expense-text'>Php {expense}</div>
				</div>
			</div>
			</Card.Body>
			</Card>
	
	);
}