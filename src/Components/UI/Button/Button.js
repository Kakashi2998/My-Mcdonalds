import React from 'react';
import classes from './Button.module.css';

const Button = props => {

    let buttonClasses = [classes.Button, classes[props.type]];

    return(
        <button className={buttonClasses.join(' ')} onClick={props.click}>
            {props.children}
        </button>
    );
}

export default Button;