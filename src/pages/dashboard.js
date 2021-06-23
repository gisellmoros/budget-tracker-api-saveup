import React, {useState,useEffect,useContext} from 'react'
import {Row,Col,Table,Container,Button} from 'react-bootstrap'
import {GlobalContextProvider} from '../globalState'
import Categories from './addCategories'
import UserContext from 'userContext'


export default function Dashboard () {
  const {user} = useContext(UserContext)
  const [allComponents, setAllComponents] = useState([])

  useEffect(()=>{
        fetch('http://localhost:4000/api/categories',{

          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }

        })
        .then(res => res.json())
        .then(data => {

         // console.log(data)
          setAllComponents(data.map(category => {
            return  (
            <tr>
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.type}</td>
            </tr>
            )

          }))
        })
      },[user])
    //console.log(allComponents)

  return (
     <Container className="mt-5">
     <Button className="mb-3">
     New Transaction
     </Button>
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Category Name</th>
      <th>Type</th>
      <th>Income</th>
      <th>Expense</th>
    </tr>
  </thead>
  <tbody>
    {setAllComponents}
  </tbody>
</Table>
</Container>
    )
}


