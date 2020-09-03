import React from 'react';
import AxiosInstance from '../../AxiosInstance';

class Orders extends React.Component{

    state={
        orders: []
    }

    componentDidMount(){
        AxiosInstance.get('users/123123/orders')
            .then(response => {
                this.setState({orders: response.data});
                console.log(this.state.orders);
            });

    }


    render(){
        // console.log(this.state.orders)
        return(
            <h1 style={{marginTop: '100px'}}>Orders Page</h1>
        );
    }
}

export default Orders;