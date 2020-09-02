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
            </div>
        )
    
}

export default BuildControls;