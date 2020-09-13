import React from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import classes from './OrderForm.module.css'

const OrderForm = props => {

    const [ordering, setOrdering] = React.useState(false);

    const order = () => {
        props.order();
        setOrdering(true);
    }

    return(
    <div className={classes.OrderForm}>
        {ordering? <CircularProgress className={classes.spinner}/>: 
            <div className={classes.form}>
                <TextField type='number' id="standard-basic" label="Phone No." required fullWidth
                    error={props.invalidPhoneNo} onChange={props.changePhoneNo} onFocus={props.changePhoneNo}
                    value={props.phoneNo} autoFocus/><br/><br/>
                <TextField id="standard-multiline-flexible" multiline label="Address" 
                        rowsMax={4} required fullWidth error={props.invalidAddress} onChange={props.changeAddress}
                        onFocus={props.changeAddress} value={props.address}/><br/><br/>
                <Button variant='contained' color='primary' style={{backgroundColor: 'green'}} onClick={order}>Order</Button>
            </div>
        }
    </div>
    );
}

export default OrderForm;