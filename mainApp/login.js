import React, { Component } from 'react';

import {  StyleSheet,  Text,  View,  TextInput,  ViewPagerAndroid,  TouchableHighlight,  Image,  Alert} from 'react-native';
import Buttons from './component/Buttons'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
export default class LoginView extends Component {

  constructor(props) {
    super(props);
    // state = {
    //   email   : '',
    // }
    this.state = {
      input_user: '',
      input_password : '',
    };
  }
  
  onClickListener = () => {
    // const {input_user} =this.state;
    // const {input_password} =this.state;
    console.log(this.state.input_user);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM game_user where password = ? and name = ?',
        [this.state.input_password , this.state.input_user],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            Alert.alert("Login", "Success!!! " + this.state.input_user,[
              {
                text: 'Ok',
                onPress: () =>
                  this.props.navigation.navigate('HomeStart',{userCorrect : this.state.input_user})
              },
            ],
            { cancelable: false });
            this.setState({
              input_password : '',
             });
          }else{
            alert('Username or Password UnCorrect');
            this.setState({
             input_user: '',
             input_password : '',
            });
          }
        }
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.titleText}>Login</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./img/seller_login.png')}/>
          <TextInput style={styles.inputs}
              value = {this.state.input_user}
              placeholder="๊Username"
              underlineColorAndroid='transparent'
              onChangeText={(input_user) => this.setState({input_user})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./img/seller_login.png')}/>
          <TextInput style={styles.inputs}
              value = {this.state.input_password}
              placeholder="๊Pasword"
              underlineColorAndroid='transparent'
              onChangeText={(input_password) => this.setState({input_password})}
              secureTextEntry={true}
              />
        </View>
        {/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onClickListener}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>                 */}
        <Buttons title = "Login" link = {this.onClickListener}></Buttons>

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