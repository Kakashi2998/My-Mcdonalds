import React from 'react';
import { fetchOrders, clearOrders } from '../../Store/Actions/OrderActions';
import { connect } from 'react-redux';
import Order from './Order/Order';
import classes from './Orders.module.css'
import history from '../../history';
import { CircularProgress } from '@material-ui/core';

class Orders extends React.Component{

    componentDidMount(){
        if(!this.props.authenticated){
            history.push('/auth');
        }else{
            this.props.clearOrders();
            this.props.fetchOrders();
        }
    }


    render(){
        return(
            this.props.orders.length === 0?
            <CircularProgress style={{marginTop: '100px'}} />: 
            <div className={classes.Orders}>
                {this.props.orders.reverse().map(order =>
                    <Order order={order} key={order.id}/>
                )}
            </div>
        );
    }
}

const stateToProps = state => {
    return{
        orders: state.orderReducer.orders,
        authenticated: state.authReducer.authenticated
    }
}

const dispatchToProps = dispatch => {
    return{
        fetchOrders: () => dispatch(fetchOrders()),
        clearOrders: () => dispatch(clearOrders())
    }
}

export default connect(stateToProps, dispatchToProps)(Orders);