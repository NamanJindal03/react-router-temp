import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';


export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" element = { <Index/>} />
            <Route exact path="/home" element = { <Home/>} /> 
            <Route element={<NotFound/>}/> 

        </Switch>
    

    )
}