import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./stylesheet/main.scss";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./common/PrivateRoute";

function App() {
  return (
    <div>
     <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path={"/login"} exact component={Login}/>
          <PrivateRoute path={"/"} component={Dashboard}/>
        </Switch>
      </AuthProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
