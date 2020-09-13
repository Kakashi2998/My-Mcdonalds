import React from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { logout, register } from '../../Store/Actions/AuthActions';
import { connect } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';

const Auth = props => {

    const [loading, setLoading] = React.useState(false);

    const responseGoogle = (response) => {
        const authData = {
            method: 'GOOGLE',
            name: response['rt']['Ad'],
            userId: response['rt']['NT'],
            email: response['rt']['$t'],
            imageUrl: response['rt']['TJ'],
            token: response['tokenId'],
            expirationTime: response['tokenObj']['expires_at']
        }
        props.register(authData);
        setLoading(true);
    }

    const responseFacebook = (response) => {
        if(response['status'] !== 'unknown'){
            const authData = {
                method: 'FACEBOOK',
                name: response['name'],
                userId: response['id'],
                email: response['email'],
                imageUrl: response['picture']['data']['url'],
                token: response['accessToken'],
                expirationTime: response['expiresIn'] * 1000 + Date.now()
            }
            props.register(authData);
            setLoading(true);
        }
    }

    return (
        <div style={{marginTop: '100px'}}>
            {loading? <CircularProgress/>:
                props.authenticated? 
                    <div>
                        <img src={props.imageUrl} alt='not found'/>
                        <h1>{props.name}</h1>
                        <h3>{props.email}</h3>
                        <Button variant='contained' color='secondary' onClick={props.logout}>Logout</Button>
                    </div>
                        :    
                    <div>
                        <FacebookLogin
                            appId="645535929705582"
                            fields="name,email,picture"
                            callback={responseFacebook}
                            isMobile={false}/>
                        <br /><br />
                        <GoogleLogin
                            clientId="785409965608-tf7tg2b56ftiobeikptbnl985pu59psa.apps.googleusercontent.com"
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={responseGoogle}/>
                    </div>
        }
        </div>
    );
}

const stateToProps = state => {
    return{
        name: state.authReducer.name,
        email: state.authReducer.email,
        imageUrl: state.authReducer.imageUrl,
        authenticated: state.authReducer.authenticated,
    }
}

const dispatchToProps = dispatch => {
    return{
        register: (authData) => dispatch(register(authData)),
        logout: () => dispatch(logout())
    }
}

export default connect(stateToProps, dispatchToProps)(Auth);