import React from 'react';
import Proptypes from 'prop-types';
import salad from '../../../Assets/Images/Ingredients-images/salad.jpg';
import alooTikki from '../../../Assets/Images/Ingredients-images/aloo-tikki.jpg';
import sauce from '../../../Assets/Images/Ingredients-images/sauce.jpg';
import chicken from '../../../Assets/Images/Ingredients-images/chicken.jpg';
import breadBottom from '../../../Assets/Images/Ingredients-images/bread-bottom.jpg';
import breadTop from '../../../Assets/Images/Ingredients-images/bread-top.jpg';
import cheese from '../../../Assets/Images/Ingredients-images/cheese.jpg';
import egg from '../../../Assets/Images/Ingredients-images/egg.jpg';
import mayo from '../../../Assets/Images/Ingredients-images/mayo.jpg';
import onions from '../../../Assets/Images/Ingredients-images/onions.jpg';
import tomatoes from '../../../Assets/Images/Ingredients-images/tomatoes.jpg';
import mushrooms from '../../../Assets/Images/Ingredients-images/mushrooms.jpg';


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
                <img src={chicken} alt='not found' />
            </div>
        );
        case('Aloo-Tikki'):return(
            <div >
                <img src={alooTikki} alt='not found'/>
            </div>
        );
        case('Cheese'):return(
            <div>
                <img src={cheese} alt='not found'/>
            </div>
        );
        case('Salad'):return(
            <div >
             <img src={salad} alt='not found'/>
            </div>
        );
        case('Sauce'):return(
            <div>
                <img src={sauce} alt='not found' />
            </div>
        );
        case('Egg'):return(
            <div>
             <img src={egg} alt='not found'/>
            </div>
        );case('Mayonaise'):return(
            <div>
             <img src={mayo} alt='not found'/>
            </div>
        );case('Onions'):return(
            <div>
             <img src={onions} alt='not found'/>
            </div>
        );case('Tomatoes'):return(
            <div>
             <img src={tomatoes} alt='not found'/>
            </div>
        );case('Mushrooms'):return(
            <div>
             <img src={mushrooms} alt='not found'/>
            </div>
        );
        default: return null;
    }
}

BurgerIngredient.prototype = {
    type: Proptypes.string.isRequired
}

export default BurgerIngredient;