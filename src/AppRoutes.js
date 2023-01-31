import React from 'react';
import { Route , Switch} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';

export const AppRoutes = () => {
    return (
    <Switch>
<Route exact path="/" component={Index} />
<Route exact path="/home" component={Home} />  
<Route  component={NotFound} /> 
</Switch>

    )
}