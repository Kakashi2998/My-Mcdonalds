import React from 'react';
import CartItem from './CartItem/CartItem';
import { Button, Modal } from '@material-ui/core';
import classes from './Cart.module.css';
import { connect } from 'react-redux';
import OrderForm from '../../Components/OrderForm/OrderForm';
import { placeOrder } from '../../Store/Actions/OrderActions';

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
        if(phoneNo.length === 10 && phoneNo.charAt(0) === '8' | '9' | '7' && !phoneNo.includes('e')){
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
        this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}));
    }

    order = () => {
        console.log('order sent');
        this.props.placeOrder(this.state.address, this.props.totalPrice, this.props.cart);
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
                {this.props.cart.map(burger => 
                    <CartItem burger={burger} key={burger.id}/>)
                }
                <h2>Total Price: Rs{this.props.totalPrice}</h2>
                <Button onClick={() => this.props.history.push('/burgerBuilder')}
                    variant='contained' color='primary'>
                    Add Burger
                </Button>
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
        totalPrice: state.cartReducer.totalPrice
    }
}

const dispatchToProps = dispatch => {
    return{
        placeOrder: (address, totalPrice, burgers) => dispatch(placeOrder(address, totalPrice, burgers))
    }
}

export default connect(stateToProps, dispatchToProps)(Cart);