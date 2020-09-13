const { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, CHANGE_NAME, CLEAR_INGREDIENTS } = require("../Actions/BurgerActions");

const intiState = {
    ingredients: [],
    name: "default name",
    price: 0
}

const BurgerReducer = (state = intiState, action) => {
    switch(action.type){
        case SET_INGREDIENTS: return{
            ingredients: action.ingredients,
            name: action.name,
            price: action.price
        };
        case ADD_INGREDIENT: {
            let tempIngredients = [...state.ingredients];
            let tempPrice = 30;
            const index = tempIngredients
                .findIndex(ingredient => ingredient.id === action.id);
            tempIngredients[index].qty++;
            tempIngredients.forEach(ingredient => {
                tempPrice += ingredient.qty * ingredient.price;
            })
            return{
                ...state,
                ingredients: tempIngredients,
                price: tempPrice
            }
        }
        case REMOVE_INGREDIENT: {
            let tempIngredients = [...state.ingredients];
            let tempPrice = state.price;
            const index = tempIngredients
                .findIndex(ingredient => ingredient.id === action.id);
            if(tempIngredients[index].qty !== 0){ 
                tempIngredients[index].qty--;
                tempPrice = 30;
                tempIngredients.forEach(ingredient => {
                tempPrice += ingredient.qty * ingredient.price;
                })
            }
            return{
                ...state,
                ingredients: tempIngredients,
                price: tempPrice
            }
        }
        case CHANGE_NAME: return{
            ...state,
            name: action.name
        }
        case CLEAR_INGREDIENTS: return{
            ...state,
            ingredients: action.ingredients
        }
        default: return state;
    }
}

export default BurgerReducer