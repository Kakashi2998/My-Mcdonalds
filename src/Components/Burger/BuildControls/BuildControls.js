import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const BuildControls = props => {
    let BuildControls = props.ingredients.map((ingredient) => {
        return <BuildControl ingredient={ingredient} 
            addItem={props.addItem} removeItem={props.removeItem}
            key={ingredient.id}/>});
    return(
            <div className={classes.BuildControls}>
                {BuildControls}
                <div style={{fontWeight:'bold', color:'green'}}>Price: Rs{props.price}</div>
                {/* <button className={classes.OrderButton} disabled={!props.isOrderable}
                    onClick={props.addToOrders}>
                    Add to Orders
                </button> */}
            </div>
        )
    
}

export default BuildControls;