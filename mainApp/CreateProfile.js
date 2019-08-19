
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import ButtonNext from './component/ButtonNext'
//import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { View, Text, Image ,StyleSheet,Button, TextInput,Picker,TouchableHighlight ,Alert} from 'react-native'

export default class CreateProfile extends Component {
   constructor(props){
     super(props)
     this.state = {name: '', iday : 9,
     date:"15-05-2018",sex : ''}
   }
   onClickListener = () => {
    Alert.alert("Login", "Success!!! ",[
      {
        text: 'Ok',
        onPress: () =>
          this.props.navigation.navigate('Login'),
      },
    ],
    { cancelable: false });
  }
   render() {
      return (
         <View style={styles.container}>
            <Text style = {styles.editText}>สร้างโปรไฟล์</Text>
            <Image source={require('./img/User.png')} style={{height: 100, width: 100 ,margin: 20 ,alignItems: 'center'}}/>
            <Text>{this.state.name}</Text>
            <View style ={{flexDirection : 'row',margin: 10}}>
              <Text style = {{marginTop: 12 }}>ชื่อ : </Text>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "กรุณากรอกชื่อเดียวกันกับในเกมส์"
                placeholderTextColor = "#9a73ef"
                onChangeText = {(text)=>this.setState({ name: text })}/> 
            </View>
            <Text>วัน-เดือน-ปี เกิด</Text>
            <DatePicker
              style={styles.input}
              date={this.state.date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1919"
              maxDate="01-01-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
              />
            <View style ={{flexDirection : 'row',margin: 10}}>
              <Text style = {{marginTop: 12 ,fontSize : 18}}>เพศ : </Text>
              <Picker
                selectedValue={this.state.sex}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sex: itemValue})
                }>
                <Picker.Item label="ชาย" value="M" />
                <Picker.Item label="หญิง" value="W" />
              </Picker>
            </View>
            <TouchableHighlight style={[styles.buttonContainer, styles.subButton]} onPress={this.onClickListener} underlayColor = 'white'>
              <Text style={styles.loginText}>Submit</Text>
            </TouchableHighlight> 
            {/* <ButtonNext customClick={() => this.props.navigation.navigate('SelectCharacter')} ></ButtonNext> */}
         </View>
      )
   }
}
const styles = StyleSheet.create({
  editText: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 },
 container: {
    paddingTop: 20,
    alignItems: 'center',
    // backgroundColor: '#DCDCDC'
  },
  input: {
    marginEnd: 10,
    alignItems : 'flex-end',
    height: 40,
    width: 260,
    // borderColor: '#7a42f4',
    // borderWidth: 1
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
  subButton: {
    backgroundColor: "#00b5ec",
  },
  
});