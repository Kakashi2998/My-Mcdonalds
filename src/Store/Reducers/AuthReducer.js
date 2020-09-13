import { LOGIN, LOGOUT } from "../Actions/AuthActions";

const initState = {
    method: undefined,
    name: "LOGIN",
    userId: "",
    email: undefined,
    imageUrl: undefined,
    token: undefined,
    expirationTime: undefined,
    authenticated: false,
}

const AuthReducer = (state = initState, action) => {
    switch(action.type){
        case LOGIN: return{
            ...action.payload,
            authenticated: true
        }
        case LOGOUT: return{
            ...initState
        }
        default: return state
    }
}

export default AuthReducer;