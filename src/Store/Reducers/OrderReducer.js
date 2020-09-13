const { STORE_ORDERS, CLEAR_ORDERS } = require("../Actions/OrderActions")

const initState = {
    orders: []
}

const OrderReducer = (state = initState, action) => {
    switch(action.type){
        case STORE_ORDERS: return{
            orders: [...action.orders]
        }
        case CLEAR_ORDERS: return{
            ...initState
        }
        default: return state;
    }
} 

export default OrderReducer;