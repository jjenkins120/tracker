import React, { useContext } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
// import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{fontSize: 40}}>Account Screen</Text>
            <Spacer>
            <Button
                style={styles.button} 
                title='Sign Out'
                onPress={signout}
            />
            </Spacer>
        </SafeAreaView>
    ) 
}
//safeareaview is built in react component that renders our information inside the screen properly

AccountScreen.navigationOptions = {
    title: 'Account', 
    tabBarIcon: <FontAwesome name='gear' size={20}/>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 100
    }
})

export default AccountScreen