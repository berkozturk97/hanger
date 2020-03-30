import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import LoginRegister from './pages/login-and-register/login-register';



function App() {
  return (
    <div>
      <Header />
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/shop' component={ShopPage} />
         <Route path='/signIn' component={LoginRegister} />
      </Switch>   
    </div>
  );
}

export default App;
