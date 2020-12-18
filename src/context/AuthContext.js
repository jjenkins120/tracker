import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch (action.type){
        default: 
            return state
    }
}

const signup = dispatch => {
    return ({ email, password }) => {

    }
}
//whenever we create an action function, it will be a function called with dispatch that is going return a function
//the returned function is what is actually being called inside our component
//we get access to dispatch via the boundActions in our createDataContext function
//we need to make an api request and try to signup with the email and password provided from the component(and passed as an object for arguments here - destructured), if we are able to sign up, then we want to show in our global state that we are authenticated. If signing up fails, we need to show an error message

const signin = dispatch => {
    return ({ email, password }) => {
        
    }
}
//similar to signup above

const signout = dispatch => {
    return () => {
        
    }
}

export const { Provider, Context } = createDataContext(
    authReducer, 
    { signin, signout, signup },
    { isSignedIn: false }
)
//reducer = authReducer
//actions = { signin, signout, signup }
//defaultState= {isSignedIn: false}
