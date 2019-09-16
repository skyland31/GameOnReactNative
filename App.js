/*Example of SQLite Database in React Native*/
import React from 'react';
//In Version 2+
//import {createStackNavigator} from 'react-navigation';
//In Version 3+
import {createStackNavigator,createAppContainer} from 'react-navigation';
import CreateProfile from './mainApp/CreateProfile';
import HomeStart from './mainApp/HomeStart';
import login from './mainApp/login';
import SelectTitle from './mainApp/SelectTitle';
import SelectCharacter from './mainApp/SelectCharacter';
import Shop from './mainApp/shop';
import Backpack from './mainApp/Backpack';
const shop = createStackNavigator({
  SelectTitle :{
    screen : SelectTitle,
  },
  Shop : {
    screen : Shop
  }
  ,
  Backpack : {
    screen : Backpack
  }
});
const Home = createStackNavigator({
  HomeStart: {
    screen: HomeStart,
    navigationOptions: {
      title: 'Home',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
     },
   },
   Character : { 
    screen: SelectCharacter ,
    navigationOptions: {
      title: 'Character',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
     },
  },
  SelectTitle :{
    screen : shop,
    navigationOptions: {
      header :null
     },
  }
})

const MainNavigator = createStackNavigator({
  Login: {
    screen: login,
    navigationOptions: {
      title: 'Shop Item Game',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
     },
   },
  HomeStart: {
    screen: Home,
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
      title: 'Create Profile',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
})
const App = createAppContainer(Main);
export default App;

