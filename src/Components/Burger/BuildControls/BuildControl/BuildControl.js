import React from 'react';
import classes from './BuildControl.module.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { IconButton } from '@material-ui/core';

const BuildControl = props => {
    return(
        <div className={classes.BuildControl}>
            <p className={classes.Label}>{props.ingredient.type}</p>
            &nbsp;&nbsp;
            <IconButton onClick={() => props.removeItem(props.ingredient.id)}>
                <RemoveCircleIcon color='primary' fontSize='large' 
                    disabled={props.ingredient.qty === 0}/>
            </IconButton>
            &nbsp;&nbsp;
            <IconButton onClick={() => props.addItem(props.ingredient.id)}>
                <AddCircleIcon color='primary' fontSize='large' />
            </IconButton>
            &nbsp;&nbsp;
            <b>Qty: {props.ingredient.qty}</b>
        </div>
    );
}

export default BuildControl;