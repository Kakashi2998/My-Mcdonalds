import React from 'react';
import CartItem from './CartItem/CartItem';
import { Button, Modal } from '@material-ui/core';
import classes from './Cart.module.css';
import { connect } from 'react-redux';
import OrderForm from '../../Components/OrderForm/OrderForm';
import { placeOrder } from '../../Store/Actions/OrderActions';
import { clearIngredients } from '../../Store/Actions/BurgerActions';
import history from '../../history';

class Cart extends React.Component{

    state={
        isModalOpen: false,
        phoneNo: '',
        address: '',
        invalidPhoneNo: false,
        invalidAddress: false
    }

    changePhoneNo = event => {
        const phoneNo = event.target.value;
        if(phoneNo.length === 10 && (phoneNo.charAt(0) === '7' || phoneNo.charAt(0) === '8' || phoneNo.charAt(0) === '9')
             && !phoneNo.includes('e')){
            this.setState({invalidPhoneNo: false});
        }else{
            this.setState({invalidPhoneNo: true})
        }
        this.setState({phoneNo: phoneNo});
    }

    changeAddress = event => {
        const address = event.target.value;
        if(address.length === 0){
            this.setState({invalidAddress: true});
        }else{
            this.setState({invalidAddress :false});
        }
        this.setState({address: address});
    }

    toggleModal = () => {
        if(this.props.cart.length === 0){
            window.alert('Please add some burgers first');
            return;
        }
        if(!this.props.authenticated){
            history.push('/auth');
            return;
        }
        this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}));
    }

    order = () => {
        if(this.state.invalidAddress || this.state.invalidPhoneNo){
            return;
        }
        this.props.placeOrder(this.state.address, this.props.totalPrice, this.props.cart, this.props.history);
    }

    newBurger = () => {
        this.props.clearIngredients();
        this.props.history.push('/burgerBuilder');
    }
    render(){
        return (
            <div className={classes.Cart}>
                <Modal open={this.state.isModalOpen} onClose={this.toggleModal} >
                    <React.Fragment>
                        <OrderForm changePhoneNo={this.changePhoneNo} invalidPhoneNo={this.state.invalidPhoneNo}
                            changeAddress={this.changeAddress} invalidAddress={this.state.invalidAddress}
                            phoneNo={this.state.phoneNo} address={this.state.address} order={this.order}/>
                    </React.Fragment>
                </Modal>
                <div className={classes.cartItems}>
                    {this.props.cart.map(burger => 
                        <CartItem burger={burger} key={burger.id} {...this.props}/>)
                    }
                </div>
                <hr/>
                <h2>Total Price: Rs{this.props.totalPrice}</h2>
                <Button onClick={this.newBurger}
                    variant='contained' color='primary'>
                    Add Burger
                </Button>
                &nbsp;&nbsp;
                <Button variant='contained' color='default' style={{backgroundColor: 'green', color: 'white'}}
                    onClick={this.toggleModal}>
                    Order
                </Button> 
            </div>
        );
    }
}

const stateToProps = state => {
    return{
        cart: state.cartReducer.cart,
        totalPrice: state.cartReducer.totalPrice,
        authenticated: state.authReducer.authenticated
    }
}

const dispatchToProps = dispatch => {
    return{
        placeOrder: (address, totalPrice, burgers) => dispatch(placeOrder(address, totalPrice, burgers)),
        clearIngredients: () => dispatch(clearIngredients())
    }
}

export default connect(stateToProps, dispatchToProps)(Cart);