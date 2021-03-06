import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
    baseURL:'http://1369dd393839.ngrok.io'
})
//REMEMBER NGROK URL HAS TO BE UPDATED EVERY 8 HRS

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
//this code notifies our backend that our user has a token and allows them to make updates to the db and receive a promise

export default instance