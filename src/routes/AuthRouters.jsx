import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScream from '../pages/LoginScream';
import RegisterScream from '../pages/RegisterScream';



const AuthRouters = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/login" component={LoginScream}/>
      <Route exact  path="/register" component={RegisterScream}/>
    </Switch>
  </Router>
  )
}

export default AuthRouters
