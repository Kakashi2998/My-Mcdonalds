import React from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import BurgerSummary from '../../Components/Burger/BurgerSummary/BurgerSummary';
import AxiosInstance from '../../AxiosInstance';

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
        price: 30,
        isOrderable: false,
        showModal: false
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

    order = () => {
        const date = new Date();
        const order = {
            address: "C-210, Arun Patios",
            orderDate: date.toISOString(),
            totalPrice: this.state.price,
            delivered: 0,
            orderedBurgers: [
                {
                    name: "Apoorv's burger",
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
                alert("Ordered Successfully!")
                this.setState({
                    ingredients:  
                    [
                        {id: 1, type: 'Salad', qty: 0, price: 35},
                        {id: 2, type: 'Sauce', qty: 0, price: 42},
                        {id: 3, type: 'Cheese', qty: 0, price: 40},
                        {id: 4, type: 'Chicken', qty: 0, price: 60},
                        {id: 5, type: 'Aloo-Tikki', qty: 0, price: 35}
                    ],
                    price: 30,
                    isOrderable: false,
                    showModal: false
                })
            });
    }

    render(){
        return(
            <div style={{marginTop: '100px'}}>
                <Burger ingredients={this.state.ingredients}
                    isOrderable={this.state.isOrderable}/>
                <BuildControls ingredients={this.state.ingredients}
                    addItem={this.addItem} removeItem={this.removeItem} 
                    price={this.state.price} isOrderable = {this.state.isOrderable}
                    addToOrders={this.toggleModal}/>
                <Modal show={this.state.showModal} close={this.toggleModal}
                    order={this.order}>
                    <BurgerSummary ingredients={this.state.ingredients}
                            price={this.state.price} show={this.state.showModal}/>
                </Modal>
            </div>
        );
    }
}
