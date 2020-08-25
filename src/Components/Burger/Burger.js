import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredent';

const Burger = props => {

    let ingredientsArr = <div>Lets add some ingredients!</div>;

    if(props.isOrderable){
        ingredientsArr = [];
        props.ingredients.map(ingredient => {
            for(let i=0; i<ingredient.qty; i++){
                ingredientsArr.push(<BurgerIngredient type={ingredient.type} 
                    key={ingredient.type + (i+1)}/>);
            }
            return ingredientsArr;
        })
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='BreadTop'/>
                {ingredientsArr} 
            <BurgerIngredient type='BreadBottom'/>
        </div>
    );
}

export default Burger;