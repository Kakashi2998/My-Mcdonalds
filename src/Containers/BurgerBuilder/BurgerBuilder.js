import React from 'react';
import Burger from '../../Components/Burger/Burger';

export default class BurgerBuilder extends React.Component{

    state = {
        ingredients:  
        [
            {id: 1, type: 'Salad', qty: 1},
            {id: 2, type: 'Cheese', qty: 2},
            {id: 3, type: 'Bacon', qty: 1},
            {id: 4, type: 'Meat', qty: 0}
        ]
    }

    addItem = (id) =>{
        this.setState(prevState =>{
            let tempIngredients = [...prevState.ingredients];
            const index = tempIngredients
                .findIndex(ingredient => ingredient.id === id);
            tempIngredients[index].qty++;
            return {ingredients: tempIngredients};
        })
    }

    removeItem = (id) =>{
        this.setState(prevState =>{
            let tempIngredients = [...prevState.ingredients];
            const index = tempIngredients
                .findIndex(ingredient => ingredient.id === id);
            tempIngredients[index].qty = 
                    tempIngredients[index].qty === 0 ? 0 : tempIngredients[index].qty--;
            return {ingredients: tempIngredients};
        })
    }

    render(){
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
            </div>
        );
    }
}
