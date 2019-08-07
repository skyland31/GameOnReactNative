
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

export default class PickerExample extends Component {
   state = {department: ''}
   updateDepartment = (department) => {
      this.setState({ department: department })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.department} onValueChange = {this.updateDepartment}>
               <Picker.Item label = "Computer" value = "Computer" />
               <Picker.Item label = "Electrical" value = "Electrical" />
               <Picker.Item label = "Civil" value = "Civil" />
               <Picker.Item label = "Chemical" value = "Chemical" />
               <Picker.Item label = "Material" value = "Material" />
               <Picker.Item label = "Environment" value = "Environment" />
            </Picker>
            <Text style = {styles.text}>{this.state.department}</Text>
         </View>
      )
   }
}
const styles = StyleSheet.create({
  text: {
     fontSize: 30,
     alignSelf: 'center',
     color: 'red'
  }
})