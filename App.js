import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

const switchNavigator = createSwitchNavigator({
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
  })
  //this creates the bottom tab navigation where we can freely move among the navigation tabs
})
//this will switch between authentication flow and non-authentication flow(signup/signin vs everything else)
//SEE DIAGRAM FILE

export default createAppContainer(switchNavigator)