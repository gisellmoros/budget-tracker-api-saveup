import React, {useState} from 'react'
import UserContext from 'userContext'
import {Container} from 'react-bootstrap'
import CreateExpenseEntry from './expense-form'


export default function Expenses() {
	const[expenses,setExpenses] = useState([])












	return ( 
    <Container className="text-center">
        <h3 className="display-6 mt-5">Expense</h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className="text-success">
              Php{' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        <CreateExpenseEntry/>
    </Container>
  )
}
