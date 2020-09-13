import React from 'react';
import { Card, CardContent, List, ListItem, Divider } from '@material-ui/core';
import classes from './Order.module.css';
import burgerLogo from '../../../Assets/Images/burger-logo.png';

const Order = props => {

    return (
        <div>
            <Card className={classes.card} style={{backgroundColor: '#ffc107'}}>
                <CardContent style={{textAlign: 'left'}}>
                    <h3>Delivered on: {props.order.orderDate.substring(0,10)}</h3>
                    <h4>Address: {props.order.address}</h4>
                        <List>
                            {props.order.orderedBurgers.map(burger =>
                            <React.Fragment key={burger.id}>
                                <ListItem>
                                    <img src={burgerLogo} alt='error'
                                        style={{height: '100px', width: '100px', display: 'inline-block'}} />
                                    <div style={{display: 'inline-block', marginLeft: '20px'}}>
                                        <h3>{burger.name}</h3>
                                        <h4>Rs {burger.price}</h4>
                                    </div>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                            )}
                        </List>
                    <h3 style={{textAlign: 'right'}}>Total Price: Rs {props.order.totalPrice}</h3>
                </CardContent>
            </Card>
        </div>
    );

}

export default Order;