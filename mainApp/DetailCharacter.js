import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  TextInput,  Button,  TouchableHighlight, ScrollView, Image,  Alert} from 'react-native';
import ButtonNext from './component/ButtonNext'
export default class DetailCharacter extends Component {

  constructor(props) {
    super(props);
    state = {
    }
  }
  render() {
    return (
      <ScrollView>
      
      <View style={styles.character}>
        <Text style={styles.titleText} >Character</Text>
        <View style={styles.container}>          
          <Image style={styles.inputIcon} resizeMode = 'center' source={require('./img/swordMan.jpg')} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputs}>detail</Text>   
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flexDirection: 'row',
    justifyContent: 'center',    
    backgroundColor: 'white',
  },
  character:{
    flex: 1,   
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#DCDCDC',
      borderRadius:5,
      borderBottomWidth: 1,
      width:300,
      height:200,
      marginTop:10,
      flexDirection: 'row',
      //alignItems:'center',
  },
  inputs:{
      height:45,
      marginLeft:12,
      marginTop:10,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  NBbutton:{
    width:70,
    height:40,
    marginLeft:300,
    marginRight:25,
    marginTop: 10,
    flexDirection : 'row',
    alignSelf : 'flex-start',
    
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',

    
  },
  BBbutton:{
    width:70,
    height:40,
    marginLeft:300,
    marginRight:25,
    marginTop: 10,
    flexDirection : 'row',
    alignSelf : 'flex-start',
    
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',

    
  },
  inputIcon:{
    width:270,
    height:290,
    marginLeft:30,
    marginRight:25,
    marginTop: 20,    
      
    
    // justifyContent: 'space-between'
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
    marginTop:10,  
    fontSize: 30,
    fontWeight: 'bold',
    color : '#CC0033',
    
     
  },
  loginText: {
    color: 'white',
  }
});