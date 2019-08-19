/*Example of SQLite Database in React Native*/
import React from 'react';
//In Version 2+
//import {createStackNavigator} from 'react-navigation';
//In Version 3+
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import CreateProfile from './mainApp/CreateProfile';
import HomeStart from './mainApp/HomeStart';
import login from './mainApp/login';
import DetailCharacter from './mainApp/DetailCharacter';
import SelectCharacter from './mainApp/SelectCharacter';
const MainNavigator = createStackNavigator({
  Login: {
    screen: login,
    navigationOptions: {
      title: 'Character Storie',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
     },
   },
  HomeStart: {
    screen: HomeStart,
    navigationOptions: {
      title: 'Home',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
      header: null,
     },
   },
},)


const Main = createStackNavigator({
  GoHome: {
    screen: MainNavigator,
    navigationOptions: {
      // title: 'Character Storie',
      // headerStyle: { backgroundColor: '#f05555' },
      // headerTintColor: '#ffffff',
      header: null,
     },
  },
  CreateProfile: {
    screen: CreateProfile,
    navigationOptions: {
      title: 'Detail',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
      
    },
  },
})
const App = createAppContainer(Main);
export default App;

