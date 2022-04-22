import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'
import Resources from './Pages/Resources'
import Products from './Pages/Products'
import Contact from './Pages/Contact'

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
        <Route path="/resources" exact>
          <Resources />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
