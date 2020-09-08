export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';


export const addToCart = (name, ingredients, price) => {
    return {
        type: ADD_TO_CART,
        name: name,
        ingredients: ingredients,
        price: price
    }
}

export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        id: id
    }
}

export const clearCart = () => {
    return{
        type: CLEAR_CART
    }
}