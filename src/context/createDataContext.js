import React, { useReducer } from 'react'

export default (reducer, actions, defaultState) => {
    //reducer is a function, actions is an object, defaultState is default state
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultState)
        //state and dispatch are always the defaults we use with useReducer
        //reducer is the reducer function with the switch statements
        //defaultState is the default state

        const boundActions = {}
        for (let key in actions){
            boundActions[key] = actions[key](dispatch)
        }
        //we need to loop over all of the actions in the actions object (which are functions that need to be called with dispatch)
        //whenever we call dispatch, React is going to take that action object and send it to the reducer for us

        return (
            <Context.Provider value ={{ state, ...boundActions}}>
                {children}
            </Context.Provider>
        )
        //this is the underlying react component that provides all of the global state data available to our other react components
        //the value is the actual information that gets shared with the components
        //remember that boundActions are the functions that we use to change our state
    }
    //this is a helper provider component that uses children as props

    return { Context, Provider }
    //Provider is our component that is going to make our global state data available to all other components
    //Context is the context object that will give us access to that global state information from one of our child components
}
//this a helper function that sets up the structure for our context