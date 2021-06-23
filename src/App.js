import {useState} from 'react'
import Header from './components/Header'
import Register from 'pages/register'
import Login from 'pages/login'
import Categories from 'pages/addCategories'
import Dashboard from 'pages/maindashboard'
import 'App.css'
import {UserProvider} from 'userContext'
import {Route,Switch} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import NavBar from 'components/AppNavBar'
import {GlobalContextProvider} from './globalState'


function App () {

  const [user,setUser] = useState({
    email: localStorage.getItem('email'),
    isAdmin: localStorage.getItem('isAdmin') === "true"
 })

return(
  <GlobalContextProvider>
  <UserProvider value={{user,setUser}}>
    <Router>
      <NavBar/>
        <Container>
          <Header/>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/categories' component={Categories}/>
              <Route exact path='/maindashboard' component={Dashboard}/>
            </Switch>
        </Container>
  </Router>
</UserProvider>
</GlobalContextProvider>
  )

}

export default App;