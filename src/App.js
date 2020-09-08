import React from 'react';
import classes from './App.module.css';
import Layout from './Containers/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import { Route, Redirect, Switch } from 'react-router-dom';
import Cart from './Containers/Cart/Cart';
import Orders from './Containers/Orders/Orders';

class App extends React.Component{

  render(){
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/burgerBuilder' render={(props) => <BurgerBuilder {...props}/> }/>
            <Route path='/cart' render={(props) => <Cart  {...props}/>}/>
            <Route path='/orders' render={(props) => <Orders  {...props}/>}/>
            <Redirect from='/' to='/cart'/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
