import { useState, useEffect } from 'react'
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)
    
    
    useEffect(()=>{
        let subscriber
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                  accuracy: Accuracy.BestForNavigation,
                  timeInterval: 1000,
                  distanceInterval: 10
              }, callback)
              //this denotes the accuracy we want our points to be. we also set it to get an update every second and every 10 meters. the second arg is a function that denotes the users location
              //watchPositionAsync is essentially a background process that tracks the user location - in order for us turn off location tracking, we need to use state logic and useeffect with a boolean value
              if (!granted) {
                  throw new Error('Location permission not granted');
                }
            } catch (e) {
                setErr(e);
            }
        };
        //this function is used to asked permission from the user to track their location - requestPermissionsAsync essentially lets us do this prompt
        if (shouldTrack){
            startWatching()
        } else {
            if (subscriber){
            subscriber.remove()
            }
            subscriber = null
        }

        return () => {
            if (subscriber) {
                subscriber.remove()
            }
        }

    }, [shouldTrack, callback])
    //if shouldTrack changes, the useEffect hook is rerun. shouldTrack is expected to be a boolean value and, in this case, is the isFocused passed from the trackcreatescreen
    //subscriber.remove stops the back background tracking (sub/watchPositionAsync from running)
    //the return function keeps startwatching from being called over and over

    return [err]
    //there is nothing special about returning an array, its just the convention for hooks. Because we need the err for the trackCreateScreen return statement, we are returning it here for use in the component that is importing it
}

//this custom hook will allow use to not run the addLocation while we are not on the map screen (because running it eats battery)

//IMPORTANT TIPS & BEST PRACTICES FROM REACT DEVS ON USING USEEFFECT
    //  1. if we reference props, state, or context in useeffect, they should also be in the dependency array
    //  2. anytime we have a have helper function defined in our component and called in useeffect, the function should be defined in useeffect &
    //  3. if the helper function has state/props/context referenced in there, they should be added to the dependency array