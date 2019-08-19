
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
         <View style ={{justifyContent :'space-around'}}>
            <StatusBar backgroundColor="green" barStyle="light-content" />
            <View style = {style.rowEnd}>
               <View style = {style.colCen}>
                  <Text>UserName_1 Level : 0 </Text>
                  <View style = {style.rowEnd}>
                     <Image source={require('./img/cost.png')} style={{height: 20, width: 20 }}/>
                     <Text> 10000 $</Text>
                  </View>
               </View>
               <Image source={require('./img/User.png')} style={{height: 75, width: 75 , margin :10}}/>
            </View> 
         </View>
      )
   }
}
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
   Home: { 
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