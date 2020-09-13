export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_CART_STATE = 'SET_CART_STATE';


export const addToCart = (name, ingredients, price) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_TO_CART,
            name: name,
            ingredients: ingredients,
            price: price
        });
        localStorage.setItem(getState().authReducer.userId, JSON.stringify(getState().cartReducer));
    }
}

export const deleteFromCart = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_FROM_CART,
            id: id
        });
        localStorage.setItem(getState().authReducer.userId, JSON.stringify(getState().cartReducer));
    }
}

export const clearCart = () => {
    return (dispatch, getState) => {
        localStorage.removeItem(getState().authReducer.userId);
        dispatch({
            type: CLEAR_CART
        })
    }
}

export const setCartState = (cartData) => {
    return{
        type: SET_CART_STATE,
        payload: cartData
    }
}

export const fetchCartState = (cartData) => {
    return dispatch => {
        if(cartData){
            dispatch(setCartState(cartData));
        }
    }
}