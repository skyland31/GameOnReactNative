/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './testTab';
import App from './App';
// import App from './mainApp/SelectCharacter';
// import App from './mainApp/HomeStart';
// import App from './mainApp/CreateProfile';
// import App from './mainApp/SLCNew';
// import App from './mainApp/login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

console.disableYellowBox = true;
// console.ignoredYellowBox = ['Warning'];