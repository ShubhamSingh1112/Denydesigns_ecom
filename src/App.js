
import React from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Product_list } from './pages/Product_list';
import { Product } from './pages/Product';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Product_list" component={Product_list} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Product" component={Product} />
      </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
