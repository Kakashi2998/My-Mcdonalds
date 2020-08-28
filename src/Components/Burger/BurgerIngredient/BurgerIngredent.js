import React from 'react';
import classes from './BurgerIngredent.module.css'
import Proptypes from 'prop-types';

const BurgerIngredient = props => {

    switch(props.type){
        case('BreadBottom'):return(
                <div className={classes.BreadBottom}></div>
        );
        case('BreadTop'): return(
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}/>
                    <div className={classes.Seeds2}/>
                </div>
        );
        case('Chicken'):return(
            <div className={classes.Chicken}>
            </div>
        );
        case('Cheese'):return(
            <div className={classes.Cheese}></div>
        );
        case('Salad'):return(
            <div className={classes.Salad}></div>
        );
        case('Sauce'):return(
            <div className={classes.Sauce}></div>
        );
        case('Aloo-Tikki'):return(
            <div className={classes.AlooTikki}></div>
        );
        default: return null;
    }
}

BurgerIngredient.prototype = {
    type: Proptypes.string.isRequired
}

export default BurgerIngredient;