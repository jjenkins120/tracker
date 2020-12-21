import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h3 style={styles.header}>{headerText}</Text>
            </Spacer>
            <Input 
                label='Email' 
                value={email} 
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer/>
            <Input
                secureTextEntry
                label='Password' 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer/>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={()=> onSubmit({ email, password })}/>
            </Spacer>
        </>
    )
}
//spacer is the helper component for styling. As long as it is imported we can use it anywhere
//important to note that (newEmail) => setEmail(newEmail) can simply be converted to setEmail. This is a best practice for form inputs

const styles = StyleSheet.create({
    header: {
        textAlign: 'center'
    },
    errorMessage: {
        fontSize: 16,
        fontWeight: 'bold', 
        color: 'red', 
        textAlign: 'center'
    },
})

export default AuthForm