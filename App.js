import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  //because resolveauth is listed at the top, it will run as the default route unless an initial default is specified
  loginFlow: createStackNavigator({
    Signup: SignupScreen, 
    Signin: SigninScreen
  }),
  //this is a stack navigation that allows us to go back and forth between the sign up and the sign in screen 
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen, 
      TrackDetail: TrackDetailScreen
    }),
    //this helps us go back and forth between tracklist and track detail
    TrackCreate: TrackCreateScreen, 
    Account: AccountScreen,
  }),
  //this creates the bottom tab navigation where we can freely move among the navigation tabs
})
//this will switch between authentication flow and non-authentication flow(signup/signin vs everything else)
//SEE DIAGRAM FILE

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => setNavigator(navigator)}/>
      </AuthProvider> 
    </LocationProvider>
  )
}
//this creates the hierarchical structure of the providers in our app
//the ref prop allows our components to gain access to the navigation in our components