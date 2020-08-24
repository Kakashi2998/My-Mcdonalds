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
        case('Meat'):return(
            <div className={classes.Meat}>
                
            </div>
        );
        case('Cheese'):return(
            <div className={classes.Cheese}></div>
        );
        case('Salad'):return(
            <div className={classes.Salad}></div>
        );
        case('Bacon'):return(
            <div className={classes.Bacon}></div>
        );
        default: return null;
    }
}

BurgerIngredient.prototype = {
    type: Proptypes.string.isRequired
}

export default BurgerIngredient;