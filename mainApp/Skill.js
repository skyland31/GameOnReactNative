import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  TextInput,  Button,  TouchableHighlight, ScrollView, Image,  Alert} from 'react-native';

export default class Skill extends Component {

  constructor(props) {
    super(props);
  
  }
  render() {
    return (
      <ScrollView>      
      <View style={styles.character}>
          <Text style={styles.titleText} >Skill</Text>          
          <View style={styles.container}>          
          <Image style={styles.inputIcon} source={require('./img/swordMan.jpg')} />          
          </View>     
       
        <View style={styles.inputContainer}>
        <Image style={styles.skillIcon} source={{uri: 'https://www.metalbridges.com/wp-content/uploads/2017/10/rov-ryoma-tips-skill-passive.jpg'}}/>
        <Text style={styles.inputs}>Text</Text>
              </View>
        <View style={styles.inputContainer}>
        <Image style={styles.skillIcon} source={{uri: 'https://www.metalbridges.com/wp-content/uploads/2017/10/rov-ryoma-tips-skill-1.jpg'}}/>
        <Text style={styles.inputs}>Text</Text>
          </View>

        <View style={styles.inputContainer}>
        <Image style={styles.skillIcon} source={{uri: 'https://www.metalbridges.com/wp-content/uploads/2017/10/rov-ryoma-tips-skill-2.jpg'}}/>
        <Text style={styles.inputs}>Text</Text>

        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.skillIcon} source={{uri: 'https://www.metalbridges.com/wp-content/uploads/2017/10/rov-ryoma-tips-skill-3.jpg'}}/>
        <Text style={styles.inputs}>Text</Text>
          </View>
        
           
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({  
  character:{
    flex: 1,   
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#DCDCDC',
      borderRadius:10,
      borderBottomWidth: 5,
      flexDirection : 'row',    
      width:315,
      height:60,
      marginTop:30,
      marginRight : 50,
      marginLeft:50,
      flexDirection: 'row',     
  },
  inputs:{
    height:55,
    marginLeft:30,
    marginTop: 10,
    borderBottomColor: '#FFFFFF',
    flex:1,
    fontSize: 17,   
  },
  NBbutton:{
    width:70,
    height:40,
    marginLeft:300,
    marginRight:25,
    marginTop: 10,
    flexDirection : 'row',
    alignSelf : 'flex-start',
  },  
  inputIcon:{
    width:270,
    height:290,
    marginLeft:30,
    marginRight:25,
    marginTop: 20,   
  },
  skillIcon:{
    width:60,
    height:60,
    marginLeft:-25,
    justifyContent: 'center',    
    marginTop: -6,  
    borderRadius:50,    
  }, 
  titleText:{
    marginTop:10,  
    fontSize: 30,
    fontWeight: 'bold',
    color : '#CC0033',     
  },
});