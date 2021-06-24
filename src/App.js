import React, { useState } from 'react'
import Header from './components/Header'
import Register from 'pages/register'
import Login from 'pages/login'
import Categories from 'pages/categories'
import Dashboard from 'pages/maindashboard'
import Logout from 'pages/logout'
import './App.css'
import {UserProvider} from 'userContext'
import {Route,Switch} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import NavBar from 'components/AppNavBar'


function App () {

  const [user,setUser] = useState({
    email: localStorage.getItem('email'),
    isAdmin: localStorage.getItem('isAdmin') === "false"
 })

const unsetUser = () => {
    localStorage.clear()
  }

return(

  <UserProvider value={{user,setUser,unsetUser}}>
    <Router>
      <NavBar/>
        <Container>
            <Switch>
              <Route exact path='/' component={Header}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/categories' component={Categories}/>
              <Route exact path='/maindashboard' component={Dashboard}/>
              <Route exact path='/logout' component={Logout}/>
            </Switch>
        </Container>
  </Router>
</UserProvider>
  )

}

export default App;