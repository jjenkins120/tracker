import '../_mockLocation'
import React, { useContext } from 'react'
import useLocation from '../hooks/useLocation'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext)
    
    const [err] = useLocation(addLocation)
    // const [err] = useLocation((location) => addLocation(location))
    //we get access to err (from an array) because it is returned from the useLocation hook 
    //the commented out const is to demonstrate that because we don't really need the helper function

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen