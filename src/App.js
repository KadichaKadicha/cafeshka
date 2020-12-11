import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Header from "../../cafeshka/src/comp/header";
import Menu from "../../cafeshka/src/comp/menu"
import Home from "../../cafeshka/src/comp/home"
import './index.css'
import DishDetails from "../../cafeshka/src/comp/dishDetails";
const App = () => {
    return (
        <BrowserRouter >
         <Header />
         <Switch>
             <Route exact path="/" component={()=> <Home />}/>
             <Route exact path="/menu" component={()=> <Menu />}/>
             <Route exact path="/menu/:id" component={()=> <DishDetails />}/>
         </Switch>
        </BrowserRouter>
    );
};

export default App;