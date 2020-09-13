import { CircularProgress } from '@material-ui/core';
import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const BuildControls = props => {
    return(
            <div className={classes.BuildControls}>
                {props.ingredients.length === 0? <CircularProgress/>:
                    props.ingredients.map((ingredient) => 
                        <BuildControl ingredient={ingredient} 
                            addItem={props.addItem} removeItem={props.removeItem}
                            key={ingredient.id}/>
                    ) 
                }
            </div>
        )
    
}

export default BuildControls;