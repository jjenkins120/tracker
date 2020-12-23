import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
    switch (action.type){
         
        default:
            return state
    }
}

const fetchTracks = dispatch => () => {}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations })
    
    // dispatch({})
}

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)
//default state is just going to be an array of tracks
