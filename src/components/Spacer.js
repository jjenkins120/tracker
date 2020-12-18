import React from 'react'
import { View, StyleSheet } from 'react-native'

const Spacer = ({ children }) => {
    return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
})

export default Spacer 
//the only purpose of this component is to be style helper for other components. The children are the components that are being styled.
