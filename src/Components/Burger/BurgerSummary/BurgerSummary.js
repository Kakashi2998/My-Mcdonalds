import React from 'react';
import { TextField, Button } from '@material-ui/core';
import classes from './BurgerSummary.module.css'

const BurgerSummary = props => {

    let items = null;

    items = props.ingredients.filter(i => i.qty > 0)
        .map(ingredient => {
            return (
                <li key={ingredient.id}>
                    <b>{ingredient.type}</b>
            Qty: {ingredient.qty}
            Price: {ingredient.price * ingredient.qty}
                </li>
            );
        });

    return (
        <div className={classes.Summary}>
            <TextField id="outlined-basic" label="Burger Name" variant="outlined"
                onChange={props.setBurgerName} required onFocus={(event) => event.target.select()}
                value={props.burgerName} autoFocus />
            <h1>Add burger to Orders?</h1>
            <ul>{items}</ul>
            <h2>Total price: Rs.{props.price}</h2>
            <Button variant='contained' style={{ backgroundColor: 'green', color: 'white' }}
                onClick={props.addToCart}>
                Add to Cart
            </Button>
            &nbsp;&nbsp;
            <Button variant='contained' color='secondary' onClick={props.close}>
                Cancel
            </Button>
        </div>
    );
}

export default BurgerSummary;