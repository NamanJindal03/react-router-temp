import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';
import '../styles/App.css';
import { NavBar } from './NavBar';
import { Home } from '../Pages/Home';
import { Index } from '../Pages/Index';
import { NotFound } from '../Pages/NotFound';

const App = () => {

  return (
    <BrowserRouter>
      <div id="main">
        <Home/>
        <Index/>
        <NotFound/>
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>

  )
}


export default App;
