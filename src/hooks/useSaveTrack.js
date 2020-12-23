import { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'

export default () => {
    const { createTrack } = useContext(TrackContext)
    const { state: { locations, name } } = useContext(LocationContext)

    const saveTrack = () => {
        createTrack(name, locations)
    }

    return [saveTrack]

}
//this hook pulls from various contexts and ties their inner functions/state together to create a new function (saveTrack) 