import React from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import BurgerSummary from '../../Components/Burger/BurgerSummary/BurgerSummary';
import AxiosInstance from '../../AxiosInstance';
import { CircularProgress, Button, Drawer } from '@material-ui/core';
import classes from './BurgerBuilder.module.css'

export default class BurgerBuilder extends React.Component{

    state = {
        ingredients:  
        [
            {id: 1, type: 'Salad', qty: 0, price: 35},
            {id: 2, type: 'Sauce', qty: 0, price: 42},
            {id: 3, type: 'Cheese', qty: 0, price: 40},
            {id: 4, type: 'Chicken', qty: 0, price: 60},
            {id: 5, type: 'Aloo-Tikki', qty: 0, price: 35}
        ],
        burgerName: "New Burger",
        price: 30,
        isOrderable: false,
        showModal: false,
        loading: false,
        bottomDrawer: false,
    }

    modal = null;

    

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
        tempIngredients[index].qty = 
                tempIngredients[index].qty === 0 ? 0 : tempIngredients[index].qty-1;
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

    order = () => {
        if(this.state.loading){
            return;
        }
        this.setState({loading: true})
        const date = new Date();
        const order = {
            address: "C-210, Arun Patios",
            orderDate: date.toISOString(),
            totalPrice: this.state.price,
            delivered: 0,
            orderedBurgers: [
                {
                    name: this.state.burgerName,
                    salad: this.state.ingredients[0].qty,
                    cheese: this.state.ingredients[1].qty,
                    sauce: this.state.ingredients[2].qty,
                    chicken: this.state.ingredients[3].qty,
                    alootikki: this.state.ingredients[4].qty,
                    price: this.state.price
                }
            ]
        }
        AxiosInstance.post("orders/123123/order", order)
            .then(response => {
                this.setState({
                    ingredients:  
                    [
                        {id: 1, type: 'Salad', qty: 0, price: 35},
                        {id: 2, type: 'Sauce', qty: 0, price: 42},
                        {id: 3, type: 'Cheese', qty: 0, price: 40},
                        {id: 4, type: 'Chicken', qty: 0, price: 60},
                        {id: 5, type: 'Aloo-Tikki', qty: 0, price: 35}
                    ],
                    burgerName: "New Burger",
                    price: 30,
                    isOrderable: false,
                    showModal: false,
                    loading: false
                })
                setTimeout(() => alert("Ordered Successfully!"), 500);
            }, error => {
                alert("Network Error")
                this.setState({loading: false})
            });
    }

   

    render(){
        let orderSummary = <BurgerSummary ingredients={this.state.ingredients}
                            price={this.state.price} show={this.state.showModal} 
                            setBurgerName={this.setBurgerName} burgerName={this.state.burgerName}/>

        if(this.state.loading){
            orderSummary = <CircularProgress />
        }
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
                    Add to Orders
                </button>
                <Drawer anchor='bottom' open={this.state.bottomDrawer} onClose={this.toggleBottomDrawer}>
                    <BuildControls ingredients={this.state.ingredients}
                    addItem={this.addItem} removeItem={this.removeItem} 
                    price={this.state.price} isOrderable = {this.state.isOrderable}
                    addToOrders={this.toggleModal}/>
                </Drawer>
               
                <Modal show={this.state.showModal} close={this.toggleModal}
                    order={this.order}>
                    {orderSummary}
                </Modal>
            </div>
        );
    }
}
