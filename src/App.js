import React from 'react';
import classes from './App.module.css';
import Layout from './Containers/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import { Route, Redirect, Switch } from 'react-router-dom';
import Cart from './Containers/Cart/Cart';

class App extends React.Component{

  state = {
    cart: [],
    index: 0
  }

  addToCart = (name, ingredients, price) => {
    const tempCart = this.state.cart;
    tempCart.push({name: name, ingredients: [...ingredients], price: price, id: this.state.index})
    this.setState({cart: tempCart, index: this.state.index+1});
  }

  onDelete = (id) => {
    if(window.confirm('Delete burger from Cart?')){
    const tempCart = this.state.cart;
    const index = tempCart.findIndex(burger => burger.id === id);
    tempCart.splice(index,1);
    this.setState({cart: tempCart});
    }
  }

  render(){
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/burgerBuilder' render={(props) => <BurgerBuilder addToCart={this.addToCart} {...props}/> }/>
            <Route path='/cart' render={(props) => <Cart cart={this.state.cart} onDelete={this.onDelete} {...props}/>}/>
            <Redirect from='/' to='/burgerBuilder'/>
          </Switch>
        </Layout>
      </div>
    );
  }
  
}

export default App;
