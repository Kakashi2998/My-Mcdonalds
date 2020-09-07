import React from 'react';
import { fetchOrders } from '../../Store/Actions/OrderActions';
import { connect } from 'react-redux';
import Order from './Order/Order';
import classes from './Orders.module.css'

class Orders extends React.Component{

    componentDidMount(){
        this.props.fetchOrders();
    }


    render(){
        return(
            <div className={classes.Orders}>
                {this.props.orders.map(order =>
                    <Order order={order} key={order.id}/>
                )}
            </div>
        );
    }
}

const stateToProps = state => {
    return{
        orders: state.orderReducer.orders
    }
}

const dispatchToProps = dispatch => {
    return{
        fetchOrders: () => dispatch(fetchOrders())
    }
}

export default connect(stateToProps, dispatchToProps)(Orders);