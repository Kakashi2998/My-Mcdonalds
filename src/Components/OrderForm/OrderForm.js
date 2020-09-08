import React from 'react';
import { TextField, Button } from '@material-ui/core';
import classes from './OrderForm.module.css'

const OrderForm = props => {

    return(
    <div className={classes.OrderForm}>
        <div className={classes.form}>
            <TextField type='number' id="standard-basic" label="Phone No." required fullWidth
                error={props.invalidPhoneNo} onChange={props.changePhoneNo} onFocus={props.changePhoneNo}
                value={props.phoneNo} autoFocus/><br/><br/>
            <TextField id="standard-multiline-flexible" multiline label="Address" 
                    rowsMax={4} required fullWidth error={props.invalidAddress} onChange={props.changeAddress}
                     onFocus={props.changeAddress} value={props.address}/><br/><br/>
            <Button variant='contained' color='primary' onClick={props.order}>Order</Button>
        </div>
    </div>
    );
}

export default OrderForm;