import React from 'react';
import { TextField } from '@material-ui/core';

const BurgerSummary = props => {

    let items = null;

    if(props.show){
        items = props.ingredients.filter(i => i.qty > 0)
        .map(ingredient => {
            return(    
            <li key={ingredient.id}>
                <b>{ingredient.type}</b>
                Qty: {ingredient.qty}
                Price: {ingredient.price * ingredient.qty}
            </li>
            );
        });
    }
    
    return(
        <div>
            <TextField id="outlined-basic" label="Burger Name" variant="outlined"
                onChange={props.setBurgerName} required onClick={(event) => event.target.select()}
                value={props.burgerName}/>
            <h1>Add burger to Orders?</h1>
            <ul>{items}</ul>
            <h2>Total price: Rs.{props.price}</h2>
        </div>
    );
}

export default BurgerSummary;