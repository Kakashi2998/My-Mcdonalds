import React from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import BurgerSummary from '../../Components/Burger/BurgerSummary/BurgerSummary';
import { Button, Drawer, Modal } from '@material-ui/core';
import classes from './BurgerBuilder.module.css'
import { connect } from 'react-redux';
import { addToCart } from '../../Store/Actions/CartActions';
import { addIngredient, removeIngredient, fetchIngredients, changeName, clearIngredients } from '../../Store/Actions/BurgerActions';

class BurgerBuilder extends React.Component {

    state = {
        isOrderable: true,
        showModal: false,
        loading: false,
        bottomDrawer: false,
    }

    componentDidMount = () => {
        if(this.props.ingredients.length === 0){
            this.props.fetchIngredients();
        }
    }

    toggleModal = () => {
        if(this.props.price === 30){
            window.alert('No ingredients added');
            return;
        }
        this.setState((prevState) => ({ showModal: !prevState.showModal }))
    }

    setBurgerName = (event) => {
        this.props.changeName(event.target.value);
    }

    toggleBottomDrawer = () => {
        this.setState({ bottomDrawer: !this.state.bottomDrawer });
    }

    addToCart = () => {
        
        this.props.addToCart(this.props.name, this.props.ingredients, this.props.price);
        this.props.clearIngredients();
        this.props.history.push('/cart');
    }

    render() {
        return (
            <div style={{ marginTop: '50px' }}>
                <Burger ingredients={this.props.ingredients}
                    isOrderable={this.state.isOrderable} />
                    <hr/>
                    <b>Price: Rs {this.props.price}</b><br/>
                <Button onClick={this.toggleBottomDrawer} variant='contained' color='primary'
                    style={{ color: 'white', width: '200px' }}>
                    Ingredients
                </Button><br />
                <Button variant='contained' color='default' style={{backgroundColor: 'green', color: 'white', marginTop: '10px'}} disabled={!this.state.isOrderable}
                    onClick={this.toggleModal} className={classes.addToCart}>
                    Add to Cart
                </Button>
                <Drawer anchor='bottom' open={this.state.bottomDrawer} onClose={this.toggleBottomDrawer} BackdropProps={{ invisible: true }}>
                        <BuildControls ingredients={this.props.ingredients}
                            addItem={this.props.addIngredient} removeItem={this.props.removeIngredient}
                            isOrderable = {this.state.isOrderable}
                            addToOrders={this.toggleModal} />
                </Drawer>
                <Modal open={this.state.showModal} onClose={this.toggleModal} >
                    <React.Fragment>
                        <BurgerSummary ingredients={this.props.ingredients}
                            price={this.props.price} close={this.toggleModal}
                            setBurgerName={this.setBurgerName} burgerName={this.props.name}
                            addToCart={this.addToCart} />
                    </React.Fragment>
                </Modal>
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        ingredients: state.burgerReducer.ingredients,
        name: state.burgerReducer.name,
        price: state.burgerReducer.price
    }
}

const dispatchToProps = dispatch => {
    return {
        addToCart: (name, ingredients, price) => dispatch(addToCart(name, ingredients, price)),
        addIngredient: (id) => dispatch(addIngredient(id)),
        removeIngredient: (id) => dispatch(removeIngredient(id)),
        fetchIngredients: () => dispatch(fetchIngredients()),
        changeName: (name) => dispatch(changeName(name)),
        clearIngredients: () => dispatch(clearIngredients())
    }
}

export default connect(stateToProps, dispatchToProps)(BurgerBuilder);