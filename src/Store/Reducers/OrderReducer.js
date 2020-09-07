const { STORE_ORDERS } = require("../Actions/OrderActions")

const initState = {
    orders: []
}

const OrderReducer = (state = initState, action) => {
    switch(action.type){
        case STORE_ORDERS: return{
            orders: [...action.orders]
        }
        default: return state;
    }
} 

export default OrderReducer;