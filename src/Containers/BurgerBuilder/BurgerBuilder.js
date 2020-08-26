import React from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import BurgerSummary from '../../Components/Burger/BurgerSummary/BurgerSummary';

export default class BurgerBuilder extends React.Component{

    state = {
        ingredients:  
        [
            {id: 1, type: 'Salad', qty: 0, price: 35},
            {id: 2, type: 'Cheese', qty: 0, price: 40},
            {id: 3, type: 'Bacon', qty: 0, price: 42},
            {id: 4, type: 'Meat', qty: 0, price: 60}
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


    render(){
        return(
            <div>
                <Modal show={this.state.showModal} close={this.toggleModal}>
                    <BurgerSummary ingredients={this.state.ingredients}
                    price={this.state.price}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}
                    isOrderable={this.state.isOrderable}/>
                <BuildControls ingredients={this.state.ingredients}
                   addItem={this.addItem} removeItem={this.removeItem} 
                   price={this.state.price} isOrderable = {this.state.isOrderable}
                   addToOrders={this.toggleModal}/>
            </div>
        );
    }
}
