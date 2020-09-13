import React from 'react';
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { deleteFromCart } from '../../../Store/Actions/CartActions';
import { connect } from 'react-redux';
import classes from './CartItem.module.css';
import { setIngredients } from '../../../Store/Actions/BurgerActions';

const CartItem = props => {

    const deleteBurger = () => {
        if(window.confirm('Delete Burger: ' + props.burger.name)){
            props.deleteFromCart(props.burger.id)
        }
    }

    const editBurger = () => {
        props.editBurger(props.burger.ingredients, props.burger.name, props.burger.price);
        props.deleteFromCart(props.burger.id);
        props.history.push('/burgerBuilder');
    }
    
    return(
            <Card className={classes.card} style={{backgroundColor: '#ffc107'}}>
                <CardContent>
                    <h1>{props.burger.name}</h1>
                    <Typography className={classes.pos} color="textSecondary">
                    {props.burger.ingredients.filter(ingredient => ingredient.qty > 0)
                        .map(ingredient => 
                        <li key={ingredient.id} style={{textAlign: 'left'}} className={classes.cardActions}>
                            <b>{ingredient.qty} {ingredient.type},</b>
                        </li>
                    )}
                    </Typography>
                    <h3>
                        Price: Rs{props.burger.price}
                    </h3>
                </CardContent>
                <CardActions>
                    <div className={classes.cardActions}>
                        <Button variant='contained' color='primary'
                            onClick={editBurger}>
                                Edit
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant='contained' color='secondary' onClick={deleteBurger}>
                            Delete
                        </Button>
                    </div>
                </CardActions>
            </Card>
    );
}

const dispatchToProps = dispatch => {
    return{
        deleteFromCart: (id) => dispatch(deleteFromCart(id)),
        editBurger: (ingredients, name, price) => dispatch(setIngredients(ingredients, name, price))
    }
}

export default connect(null, dispatchToProps)(CartItem);