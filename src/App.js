import {useState} from 'react'
import Register from 'pages/register'
import Login from 'pages/login'
import Categories from 'pages/addCategories'
import Expenses from 'pages/expense'
import 'App.css'
import {UserProvider} from 'userContext'
import {Route,Switch} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import NavBar from 'components/AppNavBar'

function App () {

  const [user,setUser] = useState({
    email: localStorage.getItem('email'),
    isAdmin: localStorage.getItem('isAdmin') === "true"
 })

return(
  <UserProvider value={{user,setUser}}>
    <Router>
      <NavBar/>
        <Container>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/categories' component={Categories}/>
              <Route exact path='/expenses' component={Expenses}/>
            </Switch>
        </Container>
  </Router>
</UserProvider>
  )

}

export default App;