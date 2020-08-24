import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredent';

const Burger = props => {

    let ingredientsArr = [];

    props.ingredients.map(ingredient => {
        for(let i=0; i<ingredient.qty; i++){
            ingredientsArr.push(<BurgerIngredient type={ingredient.type} 
                key={ingredient.id}/>);
        }
        return ingredientsArr;
    })

    if(ingredientsArr.length === 0){
        ingredientsArr = <div>Lets add some ingredients!</div>;
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