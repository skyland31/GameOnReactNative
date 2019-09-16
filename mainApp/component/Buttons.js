import React, { Component } from 'react';
import { View,StyleSheet,TouchableHighlight,Text} from 'react-native'

export default class Buttons extends Component {
   
   render() {
      return (
            <TouchableHighlight style= {this.props.color ? [styles.buttonContainer,{backgroundColor : this.props.color}]:[styles.buttonContainer, styles.ButtonColorBlue]} onPress={this.props.link}>
               <Text style={styles.Textedit}>{this.props.title}</Text>
            </TouchableHighlight>
      )
   }
}
const styles = StyleSheet.create({
  buttonContainer: {
   height:45,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom:20,
   width:250,
   borderRadius:30,
 },
 ButtonColorBlue: {
   backgroundColor: "#00b5ec",
 },
 ButtonColorRed: {
  backgroundColor: "red",
},
 Textedit: {
   color: 'white',
 }
  
});
// {this.props.red ? [styles.buttonContainer, styles.ButtonColorRed]:[styles.buttonContainer, styles.ButtonColorBlue]}