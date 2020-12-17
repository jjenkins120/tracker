import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text>Signup Screen</Text>
            <Button
                title='Go to SignIn'
                onPress={() => navigation.navigate('Signin')}
            />
            <Button
                title='Go to Main Flow'
                onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    )
}

const styles = StyleSheet.create({

})

export default SignupScreen