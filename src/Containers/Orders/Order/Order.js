import React from 'react';

const Order = props => {
    return(
        <div>
            <h3>Date: {props.order.orderDate}</h3>
            <p>{props.order.address}</p>
            {props.order.orderedBurgers.map(burger => 
              <li key={burger.id}>{burger.name}, price = Rs.{burger.price}</li>          
            )}
            <h2>Total Price: Rs{props.order.totalPrice}</h2>
        </div>
    );

}

export default Order;