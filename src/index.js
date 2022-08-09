import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
   
   <Route path='/Home' render={() => <Home />} />
   <Route>
    <NavBar />
    <Route path='/randomRecipes' render={() => <App />} />
   </Route>
    
  </BrowserRouter>,
  document.getElementById('root')
);

