const { default: AxiosInstance } = require("../../AxiosInstance");

export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

export const setIngredients = (ingredients, name, price) => {
    return{
        type: SET_INGREDIENTS,
        ingredients: ingredients,
        name: name,
        price: price
    }
}

export const fetchIngredients = () => {
    return dispatch => {
        AxiosInstance.get('/ingredients/get').then(response => {
            let tempIngredients = [];
            response.data.map(ingredient => 
                tempIngredients.push({...ingredient, qty: 0})
            );
            dispatch(setIngredients(tempIngredients, 'New Burger', 30));
        })

    }
}

export const addIngredient = (id) => {
    return{
        type: ADD_INGREDIENT,
        id: id
    }
}

export const removeIngredient = (id) => {
    return{
        type: REMOVE_INGREDIENT,
        id: id
    }
}

export const changeName = (name) => {
    return{
        type: CHANGE_NAME,
        name: name
    }
}
export const clearIngredients = () => {
    return{
        type: CLEAR_INGREDIENTS,
        ingredients: [],
    }
}
