import AxiosInstance from "../../AxiosInstance";
import history from "../../history";
import { CLEAR_CART, fetchCartState } from "./CartActions";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const register = (authData) =>{
    return dispatch => {
        const body = {
            name: authData['name'],
            email: authData['email']
        }
        AxiosInstance.post('/users/register', body, {headers: {
            Method: authData['method'],
            Authorization: 'Bearer ' + authData['token']
        }}).then(response => {
                    dispatch(login(authData));
                    dispatch(expireToken(authData['expirationTime']));
                    localStorage.setItem('AuthState', JSON.stringify(authData));
                    history.goBack()},
                 error => window.alert('Network error'));
    }
}

export const login = (authData) => {
    return dispatch => {
        dispatch({
            type: CLEAR_CART
        });
        dispatch(fetchCartState(JSON.parse(localStorage.getItem(authData.userId))));
        dispatch({
            type: LOGIN,
            payload: authData
        });
    }
}

export const logout = () => {
    localStorage.removeItem('AuthState');
    return dispatch => {
        dispatch({
            type: CLEAR_CART
        });
        dispatch({
            type: LOGOUT
        });
    }
}

export const expireToken = (expirationTime) => {
    return dispatch => {
        setTimeout(() => dispatch(logout()), expirationTime - Date.now());
    }
}

export const fetchAuthState = (authData) => {
    return dispatch => {
        if(authData && authData['expirationTime'] > Date.now()){
            dispatch(login(authData));
        }
        else{
            localStorage.removeItem('AuthState');
        }
    }
}