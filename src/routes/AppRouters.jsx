import React from "react";
import { BrowserRouter as Router,  Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/config-firebase";
import { login } from "../actions/auth";
import AuthRouters from "./AuthRouters";
import AuthRouter from "./AuthRouters";
import PublicRouter from "./PublicRouters";
import PrivateRouter from "./PrivateRouters";
import AppScreen from "../pages/AppScream";


const AppRouters = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);

      } else {
        setLog(false);
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <AuthRouters />
        {/*<Route exact path="/auth/" component={AuthRouters} />*/}
        <PublicRouter path="/auth" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/" log={log} component={AppScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouters;
