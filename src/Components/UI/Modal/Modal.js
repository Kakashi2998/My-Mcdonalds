import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

export default props => {
    return(
        <div>
            {props.show ? <Backdrop close={props.close}/> : null}
            <div className={classes.Modal} 
                style={{transform: props.show? 'translateY(0)' : 'translateY(100vh)',
                    opacity: props.show? '1' : '0'}}>
                {props.children}
                <Button type='success'>Add to Order</Button>
                <Button type='danger' click={props.close}>Cancel</Button>
            </div>
        </div>
        
    );
}
