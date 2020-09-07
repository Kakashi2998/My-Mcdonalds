import AxiosInstance from "../../AxiosInstance";

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const STORE_ORDERS = 'STORE_ORDERS';

export const fetchOrders = () => {
    return dispatch => {
        AxiosInstance.get('users/123123/orders').then(response =>{
            console.log(response);
            dispatch(storeOrders(response.data.reverse()));
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

export const placeOrder = (address, totalPrice, burgers) => {
    return dispatch => {
        const date = new Date();
        const orderedBurgers = [];
        burgers.map(burger => {
            let ingredients = {};
            burger.ingredients.map(ingredient => {
                ingredients = {
                    ...ingredients,
                    [Object.keys(ingredient)]: Object.values(ingredient)[0]
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
        AxiosInstance.post("orders/123123/order", order)
            .then(response => {
                console.log(response);
                // dispatch(fetchOrders());
            })
    }
}