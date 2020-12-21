import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName='Signin'
                text="Already have an account? Sign in instead."
            />
        </View>
    )
}
//onwillfocus is a prop function that runs right before we navigate to another screen (there are several other prop functions with NavigationEvents that also work). It needs to be on both navigable components to work


SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};
//removes our header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flex 1 tells the element to fill up all the 'empty' space
        justifyContent: 'center',
        //places content in the center
        marginBottom: 250
    }
})

export default SignupScreen