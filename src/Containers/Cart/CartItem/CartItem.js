import React from 'react';
import { Button } from '@material-ui/core';
import { deleteFromCart } from '../../../Store/Actions/CartActions';
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
            {props.burger.ingredients.filter(ingredient => Object.values(ingredient) > 0)
                .map(ingredient => 
                <li key={Object.keys(ingredient)}>
                    <b>{Object.keys(ingredient)} = {Object.values(ingredient)}</b>
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
        deleteFromCart: (id) => dispatch(deleteFromCart(id))
    }
}

export default connect(null, dispatchToProps)(CartItem);