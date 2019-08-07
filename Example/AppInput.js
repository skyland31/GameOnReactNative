
import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text, TouchableHighlight, TextInput, View } from 'react-native';

export default class Touchables extends Component {
  state = {
    email: '',
    password: ''
  }
  _onPressButton(email, pass) {
    alert('email: ' + email + ' password: ' + pass)
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text)=>this.setState({ email: text })}/>            
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text)=>this.setState({ password: text })}/>
        <TouchableHighlight 
          onPress={()=>this._onPressButton(this.state.email, this.state.password)} 
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  input: {
    margin: 15,
    height: 40,
    width: 260,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
});