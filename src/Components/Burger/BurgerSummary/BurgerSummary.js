import React from 'react';

const BurgerSummary = props => {

    let items = null;

    if(props.show){
        console.log('component updated')
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
            <h1>Add burger to Orders?</h1>
            <ul>{items}</ul>
            <h2>Total price: Rs.{props.price}</h2>
        </div>
    );
}

export default BurgerSummary;