import React, {useState} from 'react'
import {
  Form as BTForm,
  FormGroup,
  Col,
  Button,
  FormControl,
  InputGroup
} from 'react-bootstrap'
import './expense'


export default function CreateExpenseEntry() {

  const[name,setName] = useState("")
  const[amount, setAmount] = useState(0)
  const[expenses,setExpenses] = useState([])

  const handleName = (e) => {
    console.log('Name',e.target.value)
    setName(e.target.value)
  }

  const handleAmount = (e) => {
    console.log('Amount',e.target.value)
    setAmount(e.target.value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if(name !== "" && amount > 0) {
        const expense = {name,amount}
        setExpenses([expense])
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Input.",
      })
    }

  }


return (

  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
      <label className="mt-2">
        Name of Expense
      </label>
      <Col xs={12} md={4} className="m-auto mt-5">
        <InputGroup>
        <FormControl
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense"
          value={name}
          onChange={handleName}
          />
        </InputGroup>
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <label sm={2}>
        Php Amount
      </label>
      <Col xs={12} md={4} className="m-auto mt-5">
        <InputGroup>
        <FormControl
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
          />
       </InputGroup>
      </Col>
    </FormGroup>
    <Button type="submit" color="primary">
      Add
    </Button>
  </BTForm>
  )


}