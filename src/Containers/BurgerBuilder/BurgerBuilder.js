import React from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import BurgerSummary from '../../Components/Burger/BurgerSummary/BurgerSummary';
import { Button, Drawer, Modal } from '@material-ui/core';
import classes from './BurgerBuilder.module.css'
import { connect } from 'react-redux';
import { addToCart } from '../../Store/Actions/CartActions';

class BurgerBuilder extends React.Component{

    state = {
        ingredients:  
        [
            {id: 1, type: 'Salad', value: 'salad', qty: 0, price: 35},
            {id: 2, type: 'Sauce', value: 'sauce', qty: 0, price: 42},
            {id: 3, type: 'Mayonaise', value: 'mayonaise', qty: 0, price: 35},
            {id: 4, type: 'Cheese', value: 'cheese', qty: 0, price: 40},
            {id: 5, type: 'Onions', value: 'onions', qty: 0, price: 35},
            {id: 6, type: 'Tomatoes', value: 'tomatoes', qty: 0, price: 35},
            {id: 7, type: 'Mushrooms', value: 'mushrooms', qty: 0, price: 35},
            {id: 8, type: 'Egg', value: 'egg', qty: 0, price: 35},
            {id: 9, type: 'Aloo-Tikki', value: 'alootikki', qty: 0, price: 35},
            {id: 10, type: 'Chicken', value: 'chicken', qty: 0, price: 60},

        ],
        burgerName: "New Burger",
        price: 30,
        isOrderable: false,
        showModal: false,
        loading: false,
        bottomDrawer: false,
    }


    addItem = (id) =>{
        let tempIngredients = [...this.state.ingredients];
        const index = tempIngredients
            .findIndex(ingredient => ingredient.id === id);
        tempIngredients[index].qty++;
        this.setState({ingredients: tempIngredients});
        this.isOrderable();
        this.updatePrice();
    }

    removeItem = (id) =>{
        let tempIngredients = [...this.state.ingredients];
        const index = tempIngredients
            .findIndex(ingredient => ingredient.id === id);
        tempIngredients[index].qty--;
        this.setState({ingredients: tempIngredients});
        this.isOrderable();
        this.updatePrice();
    }

    updatePrice = () => {
        let tempPrice = 30;
        this.state.ingredients.forEach(ingredient => {
            tempPrice += ingredient.qty * ingredient.price;
        })
        this.setState({price: tempPrice});
    }

    isOrderable = () => {
        let isOrderable = false;
        this.state.ingredients.forEach(ingredient => {
            if(ingredient.qty > 0){
                isOrderable = true;
                return;
            }
        })
        this.setState({isOrderable: isOrderable});
    }

    toggleModal = () => {
       this.setState((prevState) =>({showModal: !prevState.showModal}))
    }

    setBurgerName = (event) => {
        this.setState({burgerName: event.target.value})
    }

    toggleBottomDrawer = () => {
        this.setState({bottomDrawer: !this.state.bottomDrawer});
    }

    addToCart = () => {
        const ingredients = [];
        this.state.ingredients.map(ingredient => 
            ingredients.push({[ingredient.value]: ingredient.qty})
        )
        this.props.addToCart(this.state.burgerName, ingredients, this.state.price);
        this.props.history.push('/cart');
    }

    render(){
        return(
            <div style={{marginTop: '100px'}}>
                <Burger ingredients={this.state.ingredients}
                    isOrderable={this.state.isOrderable}/>
                <Button onClick={this.toggleBottomDrawer} variant='contained' color='primary' 
                    style={{color: 'white', width: '200px'}}>
                    Ingredients
                </Button><br/><br/>
                <button className={classes.OrderButton} disabled={!this.state.isOrderable}
                    onClick={this.toggleModal}>
                    Add to Cart
                </button>
                <Drawer anchor='bottom' open={this.state.bottomDrawer} onClose={this.toggleBottomDrawer} BackdropProps={{invisible: true}}>
                    <BuildControls ingredients={this.state.ingredients}
                    addItem={this.addItem} removeItem={this.removeItem} 
                    price={this.state.price} isOrderable = {this.state.isOrderable}
                    addToOrders={this.toggleModal}/>
                </Drawer>
                    <Modal open={this.state.showModal} onClose={this.toggleModal} >
                        <React.Fragment>
                            <BurgerSummary ingredients={this.state.ingredients}
                                    price={this.state.price} close={this.toggleModal} 
                                    setBurgerName={this.setBurgerName} burgerName={this.state.burgerName}
                                    addToCart={this.addToCart}/>
                        </React.Fragment>
                    </Modal>
            </div>
        );
    }
}

const stateToProps = state => {
    return{
        cart: state.cart
    }
}

const dispatchToProps = dispatch => {
    return{
        addToCart: (name, ingredients, price) => dispatch(addToCart(name, ingredients, price))
    }
}

export default connect(stateToProps, dispatchToProps)(BurgerBuilder);