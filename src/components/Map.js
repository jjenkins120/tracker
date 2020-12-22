import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'

const Map = () => {

    let points = []
    for (let i=0; i< 20; i++){
        points.push({
            latitude: 37.33233 + i * 0.001, 
            longitude: -122.03121 + i * 0.001
        })
    }

    return (
        <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 37.33233,
                longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline coordinates={points}/>
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