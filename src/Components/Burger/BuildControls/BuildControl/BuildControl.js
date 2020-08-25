import React from 'react';
import classes from './BuildControl.module.css'

const BuildControl = props => {
    return(
        <div className={classes.BuildControl}>
            <p className={classes.Label}>{props.ingredient.type}</p>
            <button onClick={() => props.addItem(props.ingredient.id)}
                className={classes.More}>
                    +
            </button>
            <button onClick={() => props.removeItem(props.ingredient.id)}
                className={classes.Less} disabled={props.ingredient.qty === 0}>
                    -
            </button>
            <b>Qty: {props.ingredient.qty}</b>
        </div>
    );
}

export default BuildControl;