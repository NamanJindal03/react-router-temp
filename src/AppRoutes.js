import React from 'react';
import { Route , Router } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';

export const AppRoutes = () => {
    return (
    <Router>
<Route exact path="/" component={Index} />
<Route exact path="/home" component={Home} />  
<Route  component={NotFound} /> 
</Router>

    )
}