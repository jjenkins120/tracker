import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import useLocation from '../hooks/useLocation'
import { StyleSheet, SafeAreaView } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => addLocation(location, state.recording), [state.recording])
    const [err] = useLocation(isFocused, callback)
    //we get access to err (from an array) because it is returned from the useLocation hook 
    //isFocused is the boolean that we will need to pass to the hook in order to stop the location tracking
    //useCallback hook limits the number of times we create a new callback function (ran into some issues with this, see tutorial for explanation). This helps to resolve the callback issue with useEffect. As long as the value in the array(in this case state.recording) doesn't change, the callback will refer to the same point in memory. When it changes it refers to a new point in memory.

    return (
        <SafeAreaView>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}
//we get access to isFocused(a boolean value) in the function args through withNavigationFocus. This will essentially give us a true or false value if the user is navigated on the this component when using the app (true) or when they are navigated away (false) 

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)