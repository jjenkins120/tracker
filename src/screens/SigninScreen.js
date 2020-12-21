import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                text="Don't have an account? Sign up instead."
                routeName="Signup"
            />
        </View>
    )
}
//onwillfocus is a prop function that runs right before we navigate to another screen (there are several other prop functions with NavigationEvents that also work). It needs to be on both navigable components to work

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flex 1 tells the element to fill up all the 'empty' space
        justifyContent: 'center',
        //places content in the center
        marginBottom: 250
    }
})

export default SigninScreen