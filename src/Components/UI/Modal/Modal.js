import React from 'react';
import classes from './Modal.module.css'
import { Backdrop, Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

const Modal = props => {

    const AddToOrdertheme = createMuiTheme({
        palette: {
            primary: green,
            secondary: red
        },
    });
    

    return(
        <div>
            <Backdrop open={props.show} onClick={props.close} style={{zIndex: '100'}}/>
            <div className={classes.Modal} 
                style={{transform: props.show? 'translateY(0)' : 'translateY(100vh)',
                    opacity: props.show? '1' : '0'}}>
                {props.children}
                <ThemeProvider theme={AddToOrdertheme}>
                    <Button variant='contained' color='primary' style={{margin: '10px', color: 'white'}}>
                        Add to Order</Button>
                    <Button variant='contained' color='secondary' onClick={props.close}>
                       Cancel</Button>
                </ThemeProvider>
            </div>
        </div>
        
    );
}

export default Modal
