import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: {currentLocation, locations} } = useContext(LocationContext)

    if (!currentLocation){
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    //if we don't have a value for currentLocation, a loading icon (ActivityIndicator will appear)

    return (
        <MapView 
            // provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                // latitude: 37.33233,
                // longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            //the region property allows for the map to recenter when the location information changes
            //region updating can cause the map to constantly recenter, which can be annoying for the user, so it might be better where the user is moving using a circle prop
        >
            <Circle
                center={currentLocation.coords}
                radius={20}
                strokeColor='rgba(158, 158, 255, 1.0)'
                fillColor='rgba(158, 158, 255, 0.3)'
            />
            {/* this draws a center around our current location - good for UI. Has to have specified radius and bordercolor(strokeColor) and fillcolor that is an RGBA value */}
            <Polyline
                coordinates={locations.map(location => location.coords)}
            />
        </MapView>
    )
}


const styles = StyleSheet.create({
    map: {
        height: 300
    }
})
//MapView is like an image - to be able to see it we have to add style attributes for height and/or width - this automatically renders apple maps on ios and google maps on android.
//InitialRegion is a prop where the default first loads. lat and long is the center, delta is the dimensions the map is showing
//Polyline is a component that allows us to draw a line on the map among a set of coordinates

export default Map