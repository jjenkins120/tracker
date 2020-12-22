import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync } from 'expo-location'
import '../_mockLocation'

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)
    
    useEffect(()=>{
        startWatching()
    }, [])

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
            setErr(e);
        }
    };
    //this function is used to asked permission from the user to track their location - requestPermissionsAsync essentially lets us do this prompt


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