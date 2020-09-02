import React from 'react';
import CartItem from './CartItem/CartItem';
import { Button } from '@material-ui/core';
import classes from './Cart.module.css';

class Cart extends React.Component{

    state = {
        burgers: [],
        totalPrice: 0,
    }

    componentDidMount(){
        this.props.cart.map(burger => 
            this.setState(prevState => ({totalPrice: prevState.totalPrice + burger.price}))
        );
    }

    render(){
        const burgers = [];
        this.props.cart.map(burger => 
            burgers.push(<CartItem burger={burger} key={burger.id} onDelete={this.props.onDelete}/>)
        );

        return (
            <div className={classes.Cart}>
                {burgers}
                <h2>Total Price: Rs{this.state.totalPrice}</h2>
                <Button onClick={() => this.props.history.push('/burgerBuilder')}
                    variant='contained' style={{backgroundColor: 'green', color: 'white'}}>
                    Add Burger
                </Button>
            </div>
        );
    }

    // order = () => {
    //     if(this.state.loading){
    //         return;
    //     }
    //     this.setState({loading: true})
    //     const date = new Date();
    //     const order = {
    //         address: "C-210, Arun Patios",
    //         orderDate: date.toISOString(),
    //         totalPrice: this.state.price,
    //         delivered: 0,
    //         orderedBurgers: [
    //             {
    //                 name: this.state.burgerName,
    //                 salad: this.state.ingredients[0].qty,
    //                 cheese: this.state.ingredients[1].qty,
    //                 sauce: this.state.ingredients[2].qty,
    //                 chicken: this.state.ingredients[3].qty,
    //                 alootikki: this.state.ingredients[4].qty,
    //                 price: this.state.price
    //             }
    //         ]
    //     }
    //     AxiosInstance.post("orders/123123/order", order)
    //         .then(response => {
    //             this.setState({
    //                 ingredients:  
    //                 [
    //                     {id: 1, type: 'Salad', qty: 0, price: 35},
    //                     {id: 2, type: 'Sauce', qty: 0, price: 42},
    //                     {id: 3, type: 'Cheese', qty: 0, price: 40},
    //                     {id: 4, type: 'Chicken', qty: 0, price: 60},
    //                     {id: 5, type: 'Aloo-Tikki', qty: 0, price: 35}
    //                 ],
    //                 burgerName: "New Burger",
    //                 price: 30,
    //                 isOrderable: false,
    //                 showModal: false,
    //                 loading: false
    //             })
    //             setTimeout(() => alert("Ordered Successfully!"), 500);
    //         }, error => {
    //             alert("Network Error")
    //             this.setState({loading: false})
    //         });
    // }

    
}

export default Cart;