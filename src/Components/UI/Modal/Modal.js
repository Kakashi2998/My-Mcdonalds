import React from 'react';
import classes from './Modal.module.css'
// import Button from '../Button/Button';
import { Backdrop, Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const Modal = props => {

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });

    return(
        <div>
            <Backdrop open={props.show} onClick={props.close} style={{zIndex: '100'}}/>
            <div className={classes.Modal} 
                style={{transform: props.show? 'translateY(0)' : 'translateY(100vh)',
                    opacity: props.show? '1' : '0'}}>
                {props.children}
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color='primary' style={{margin: '10px'}}
                    >Add to Order</Button>
                </ThemeProvider>
                <Button variant='contained' color='secondary' onClick={props.close}>Cancel</Button>
            </div>
        </div>
        
    );
}

export default Modal
