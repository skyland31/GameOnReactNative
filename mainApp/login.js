import React, { Component } from 'react';

import {  StyleSheet,  Text,  View,  TextInput,  ViewPagerAndroid,  TouchableHighlight,  Image,  Alert} from 'react-native';
import HomeStart from './HomeStart'

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
    }
  }
  
  onClickListener = () => {
    Alert.alert("Login", "Success!!! ",[
      {
        text: 'Ok',
        onPress: () =>
          
          this.props.navigation.navigate('HomeStart'),
      },
    ],
    { cancelable: false });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.titleText}>Login</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./img/seller_login.png')}/>
          <TextInput style={styles.inputs}
              placeholder="๊Name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onClickListener}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>                
        <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.props.navigation.navigate('CreateProfile')}>
        <Text style={styles.registerText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  registerText: {
    fontSize: 14,
    marginTop:-12,    
  },
  titleText:{
    marginBottom:30,  
    fontSize: 48,
  },
  loginText: {
    color: 'white',
  }
});