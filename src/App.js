import React from 'react';
import classes from './App.module.css';
import Layout from './Containers/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import { Route, Redirect, Switch } from 'react-router-dom';
import Cart from './Containers/Cart/Cart';
import Orders from './Containers/Orders/Orders';
import Auth from './Containers/Auth/Auth';
import { fetchAuthState } from './Store/Actions/AuthActions';
import { connect } from 'react-redux';
import { fetchCartState } from './Store/Actions/CartActions';

class App extends React.Component{

  componentDidMount = () => {
    this.props.fetchAuthState(JSON.parse(localStorage.getItem('AuthState')));
  }

  render(){
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/burgerBuilder' render={(props) => <BurgerBuilder {...props}/> }/>
            <Route path='/cart' render={(props) => <Cart  {...props}/>}/>
            <Route path='/orders' render={(props) => <Orders  {...props}/>}/>
            <Route path='/auth' render={(props) => <Auth  {...props}/>}/>
            <Redirect from='/' to='/burgerBuilder'/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const stateToProps = state => {
  return{
    userId: state.authReducer.userId
  }
}

const dispatchToProps = dispatch => {
  return{
    fetchAuthState: (authData) => dispatch(fetchAuthState(authData)),
    fetchCartState: (cartData) => dispatch(fetchCartState(cartData))
  }
}

export default connect(stateToProps, dispatchToProps)(App);
