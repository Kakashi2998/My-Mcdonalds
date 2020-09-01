import React from 'react';
import Proptypes from 'prop-types';
import salad from '../../../Assets/Images/Ingredients-images/salad.jpg';
import alooTikki from '../../../Assets/Images/Ingredients-images/aloo-tikki.jpg';
import sauce from '../../../Assets/Images/Ingredients-images/sauce.jpg';
import chicken from '../../../Assets/Images/Ingredients-images/chicken.jpg';
import breadBottom from '../../../Assets/Images/Ingredients-images/bread-bottom.jpg';
import breadTop from '../../../Assets/Images/Ingredients-images/bread-top.jpg';
import cheese from '../../../Assets/Images/Ingredients-images/cheese.jpg';


const BurgerIngredient = props => {

    switch(props.type){
        case('BreadBottom'):return(
                <div>
                    <img src={breadBottom} alt='not found'/>
                </div>
        );
        case('BreadTop'): return(
                <div>

                    <img src={breadTop} alt='not found'/>
                </div>
        );
        case('Chicken'):return(
            <div>
                <img src={chicken} alt='not found'/>
            </div>
        );
        case('Cheese'):return(
            <img src={cheese} alt='not found'/>
        );
        case('Salad'):return(
            <div >
             <img src={salad} alt='not found'/>
            </div>
        );
        case('Sauce'):return(
            <div>
                <img src={sauce} alt='not found'/>
            </div>
        );
        case('Aloo-Tikki'):return(
            <div>
             <img src={alooTikki} alt='not found'/>
            </div>
        );
        default: return null;
    }
}

BurgerIngredient.prototype = {
    type: Proptypes.string.isRequired
}

export default BurgerIngredient;