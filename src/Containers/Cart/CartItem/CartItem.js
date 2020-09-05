import React from 'react';
import { Button } from '@material-ui/core';
import { DELETE_FROM_CART } from '../../../Store/Actions';
import { connect } from 'react-redux';

const CartItem = props => {

    const deleteBurger = () => {
        if(window.confirm('Delete Burger: ' + props.burger.name)){
            props.deleteFromCart(props.burger.id)
        }
    }
    return(
        <div>
            <h2>{props.burger.name}</h2>
            {props.burger.ingredients.filter(i => i.qty > 0).map(ingredient => 
                <li key={ingredient.id}>
                    <b>{ingredient.type}</b>
                    Qty: {ingredient.qty}
                    Price: {ingredient.price * ingredient.qty}
                </li>
            )}
            <h3>Price: Rs{props.burger.price}</h3>
            <Button variant='contained' color='secondary' onClick={deleteBurger}>
                Delete
            </Button>
        </div>
    );
}

const dispatchToProps = dispatch => {
    return{
        deleteFromCart: (id) => dispatch({type: DELETE_FROM_CART, id: id})
    }
}

export default connect(null, dispatchToProps)(CartItem);