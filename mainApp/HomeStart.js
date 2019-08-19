
import React, { Component } from 'react';
import ButtonNext from './component/ButtonNext'
import SelectCharacter from './SelectCharacter';
import Skill from './Skill';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ScrollView,StatusBar,View, Text, Image ,StyleSheet,TouchableHighlight} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
 class HomeStart extends Component {
   constructor(props){
     super(props)
     this.state = {name : ''}
   }
   
   render() {
      return (
         <View style={styles.container}>
            <Text style = {styles.editText}>Profile</Text>
            <Image source={require('./img/User.png')} style={{height: 100, width: 100 ,margin: 20 ,alignItems: 'center'}}/>
            <Text>ชื่อ : {this.state.name}</Text>
            <Text>Level : </Text>
            <Text>Cost : </Text>
            <Text>เพศ : ... </Text>
            <Text>วัน-เดือน-ปีเกิด : </Text>
         </View>
      )
   }
}
const styles = StyleSheet.create({
  editText: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color : '#CC0033'
 },
 container: {
    paddingTop: 20,
    alignItems: 'center',
    // backgroundColor: '#DCDCDC'
  },
  
});
const style = StyleSheet.create({
   colCen : {
      flexDirection : 'column',
      justifyContent : 'center'
   },
   rowEnd : {
      flexDirection : 'row',
      justifyContent : 'flex-end',
      marginTop :20 
   }
})
const TabNavigator = createBottomTabNavigator({
   Profile: { 
      screen: HomeStart 
   },
   Character : { 
      screen: SelectCharacter 
   },
   Skill : { 
      screen: Skill 
   },

 }
 
 );
 export default createAppContainer(TabNavigator);