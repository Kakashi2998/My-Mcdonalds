import React from 'react';
import classes from './App.module.css';
import Layout from './Containers/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import { Route, Redirect, Switch } from 'react-router-dom';
import Cart from './Containers/Cart/Cart';
import Orders from './Containers/Orders/Orders';

class App extends React.Component{

  state = {
    cart: [],
    index: 0
  }

  render(){
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/burgerBuilder' render={(props) => <BurgerBuilder addToCart={this.addToCart} {...props}/> }/>
            <Route path='/cart' render={(props) => <Cart cart={this.state.cart} onDelete={this.onDelete} {...props}/>}/>
            <Route path='/orders' component={Orders}/>
            <Redirect from='/' to='/burgerBuilder'/>
          </Switch>
        </Layout>
      </div>
    );
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

  // order = () => {
  //       // this.setState({loading: true})
  //       const date = new Date();
  //       const order = {
  //           address: "C-210, Arun Patios",
  //           orderDate: date.toISOString(),
  //           totalPrice: this.state.price,
  //           delivered: 0,
  //           orderedBurgers: [
  //               {
  //                   name: this.state.burgerName,
  //                   salad: this.state.ingredients[0].qty,
  //                   cheese: this.state.ingredients[1].qty,
  //                   sauce: this.state.ingredients[2].qty,
  //                   chicken: this.state.ingredients[3].qty,
  //                   alootikki: this.state.ingredients[4].qty,
  //                   price: this.state.price
  //               }
  //           ]
  //       }
  //       AxiosInstance.post("orders/123123/order", order)
  //           .then(response => {
  //               this.setState({
  //                   ingredients:  
  //                   [
  //                       {id: 1, type: 'Salad', qty: 0, price: 35},
  //                       {id: 2, type: 'Sauce', qty: 0, price: 42},
  //                       {id: 3, type: 'Cheese', qty: 0, price: 40},
  //                       {id: 4, type: 'Chicken', qty: 0, price: 60},
  //                       {id: 5, type: 'Aloo-Tikki', qty: 0, price: 35}
  //                   ],
  //                   burgerName: "New Burger",
  //                   price: 30,
  //                   isOrderable: false,
  //                   showModal: false,
  //                   loading: false
  //               })
  //               setTimeout(() => alert("Ordered Successfully!"), 500);
  //           }, error => {
  //               alert("Network Error")
  //               this.setState({loading: false})
  //           });
  //   }

  
}

export default App;
