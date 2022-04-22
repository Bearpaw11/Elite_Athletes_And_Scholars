import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
          <Redirect to="home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
