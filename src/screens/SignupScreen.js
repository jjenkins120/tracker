import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity} from 'react-native'
import { Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)
   

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <TouchableOpacity onPress={()=> navigation.navigate('Signin')}> 
                <Spacer> 
                    <Text style={styles.link}>Already have an account? Sign in instead.</Text>
                </Spacer> 
            </TouchableOpacity>  
        </View>
    )
}
//spacer is the helper component for styling. As long as it is imported we can use it anywhere
//important to note that (newEmail) => setEmail(newEmail) can simply be converted to setEmail. This is a best practice for form inputs

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};
//removes our header

const styles = StyleSheet.create({
    header: {
        textAlign: 'center'
    },
    container: {
        flex: 1,
        //flex 1 tells the element to fill up all the 'empty' space
        justifyContent: 'center',
        //places content in the center
        marginBottom: 250
    },
    link: {
        color: 'blue',
        textAlign: 'center'
    }

})

export default SignupScreen