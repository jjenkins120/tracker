import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
    const { state: { name, recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext)

    return <>
        <Spacer/>
        <Input 
            placeholder='Enter Name' 
            onChangeText={changeName}
            value={name}
        />
        {recording ? 
            <Button 
                title='Stop'
                style={styles.button} 
                onPress={stopRecording}
            /> :
            <Button 
                title='Start Recording' 
                style={styles.button}
                onPress={startRecording}
            />
        }
    </>
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 10,
        marginRight: 10
    }
})
export default TrackForm