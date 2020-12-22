import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext)
    const [err, setErr] = useState(null)
    
    useEffect(()=>{
        startWatching()
    }, [])

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10
          }, location => addLocation(location))
          //this denotes the accuracy we want our points to be. we also set it to get an update every second and every 10 meters. the second arg is a function that denotes the users location
        
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