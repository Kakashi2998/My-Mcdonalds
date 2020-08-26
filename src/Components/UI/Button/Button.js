import React from 'react';
import classes from './Button.module.css';

export default props => {

    let buttonClasses = [classes.Button, classes[props.type]];

    return(
        <button className={buttonClasses.join(' ')} onClick={props.click}>
            {props.children}
        </button>
    );
}