import { ADD_TO_CART, DELETE_FROM_CART } from "../Actions/CartActions";

const initState = {
    cart: [],
    currentId: 0,
    totalPrice: 0
}

const CartReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_TO_CART: return{
            currentId: state.currentId + 1,
            cart: state.cart.concat({
                id: state.currentId,
                name: action.name,
                ingredients: action.ingredients,
                price: action.price
            }),
            totalPrice: state.totalPrice + action.price
        }
        case DELETE_FROM_CART: {
            let totalPrice = 0;
            let newCart = state.cart.filter(burger => burger.id !== action.id);
            newCart.forEach(burger => totalPrice += burger.price);
            return{
                ...state,
                cart: newCart,
                totalPrice: totalPrice
            }
        }
        default: return state; 
    }
}

export default CartReducer;