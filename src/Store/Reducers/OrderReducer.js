const { STORE_ORDERS, CLEAR_ORDERS } = require("../Actions/OrderActions")

const initState = {
    orders: [],
    isEmpty: false
}

const OrderReducer = (state = initState, action) => {
    switch(action.type){
        case STORE_ORDERS:{
            if(action.orders.length === 0){
                return{
                    orders: [...action.orders],
                    isEmpty: true
                }
            }
            return{
                orders: [...action.orders],
                isEmpty: false
            }
        }
        case CLEAR_ORDERS: return{
            ...initState
        }
        default: return state;
    }
} 

export default OrderReducer;