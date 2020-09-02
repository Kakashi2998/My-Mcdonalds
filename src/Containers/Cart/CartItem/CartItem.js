import React from 'react';
import { Button } from '@material-ui/core';

const CartItem = props => {
    const items = props.burger.ingredients.filter(i => i.qty > 0)
    .map(ingredient => {
        return (
            <li key={ingredient.id}>
                <b>{ingredient.type}</b>
                Qty: {ingredient.qty}
                Price: {ingredient.price * ingredient.qty}
            </li>
        );
    });
    
    return(
        <div>
            <h2>{props.burger.name}</h2>
            {items}
            <h3>Price: Rs{props.burger.price}</h3>
            <Button variant='contained' color='secondary' onClick={() => props.onDelete(props.burger.id)}>Delete</Button>
        </div>
    );
}

export default CartItem;