import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import EasyMode from '../components/EasyMode';
import HardMode from '../components/HardMode';
import Home from '../components/Home';




const AppRouter = () =>(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
        <Route exact={true} path ="/"  component = {Home}/>
        <Route path = "/easy" component ={EasyMode}/>
        <Route path = "/hard" component ={HardMode}/>

    </Switch>
    </div>        
    </BrowserRouter>
);


export default AppRouter;