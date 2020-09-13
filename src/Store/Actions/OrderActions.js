import AxiosInstance from "../../AxiosInstance";
import { clearCart } from "./CartActions";
import history from "../../history";


export const FETCH_ORDERS = 'FETCH_ORDERS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const STORE_ORDERS = 'STORE_ORDERS';
export const CLEAR_ORDERS = 'CLEAR_ORDERS';

export const fetchOrders = () => {
    return (dispatch, getState) => {
        AxiosInstance.get('orders/get', {headers: {
            Method: getState().authReducer.method,
            Authorization: "Bearer " + getState().authReducer.token}})
        .then(response =>{
            dispatch(storeOrders(response.data));
        },
        error => {
            window.alert('Network Error');
            console.log(error);
        })
    }
}

export const storeOrders = (orders) => {
    return{
        type: STORE_ORDERS,
        orders: orders
    }
}

export const clearOrders = () => {
    return{
        type: CLEAR_ORDERS
    }
}

export const placeOrder = (address, totalPrice, burgers) => {
    return (dispatch, getState) => {
        const date = new Date();
        const orderedBurgers = [];
        burgers.map(burger => {
            let ingredients = {};
            burger.ingredients.map(ingredient => {
                ingredients = {
                    ...ingredients,
                    [ingredient.value]: ingredient.qty
                }
                return ingredient;
            })
            orderedBurgers.push({
                name: burger.name,
                price: burger.price,
                ...ingredients
            })
            return burger;
        })
        const order = {
            address: address,
            orderDate: date.toISOString(),
            totalPrice: totalPrice,
            delivered: 0,
            orderedBurgers: orderedBurgers
        }
        AxiosInstance.post("orders/post", order, 
            {headers: {Method: getState().authReducer.method,
                    Authorization: "Bearer " + getState().authReducer.token}})
            .then(response => {
                dispatch(clearCart());
                history.push('/orders');
            },
            error => {
                window.alert('Network error');
                console.log(error);
            })
    }
}
