
import React, { Component } from 'react';
import { View,StyleSheet,Button} from 'react-native'

export default class ButtonNext extends Component {
   
   render() {
      return (

         
            <View style={styles.buttonNext}>
              <Button
              onPress={this.props.customClick}
              title="ดูข้อมูล >"
              color="#841584"
            /></View>
            

      )
   }
}
const styles = StyleSheet.create({
    buttonNext : { 
        flexDirection : 'row',
        alignSelf : 'flex-end',
        margin :20
    }
  
});