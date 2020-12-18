import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
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
            <Spacer>
                <Button title='Sign Up'/>
            </Spacer>
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
    container: {
        flex: 1,
        //flex 1 tells the element to fill up all the 'empty' space
        justifyContent: 'center',
        //places content in the center
        marginBottom: 250
    }
})

export default SignupScreen