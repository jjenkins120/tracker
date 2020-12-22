import { useState, useEffect } from 'react'
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (callback) => {
    const [err, setErr] = useState(null)
    
    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10
          }, callback)
          //this denotes the accuracy we want our points to be. we also set it to get an update every second and every 10 meters. the second arg is a function that denotes the users location
        
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
            setErr(e);
        }
    };
    //this function is used to asked permission from the user to track their location - requestPermissionsAsync essentially lets us do this prompt

    useEffect(()=>{
        startWatching()
    }, [])

    return [err]
    //there is nothing special about returning an array, its just the convention for hooks. Because we need the err for the trackCreateScreen return statement, we are returning it here for use in the component that is importing it
}

//this custom hook will allow use to not run the addLocation while we are not on the map screen (because running it eats battery)