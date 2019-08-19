
import React, { Component } from 'react';
import ButtonNext from './component/ButtonNext'
import { View, Text, Image ,StyleSheet,TouchableHighlight} from 'react-native'

import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeStart from './HomeStart';

export default class SelectCharacter extends Component {
  
   constructor(props){
     super(props)
     this.state = {sex : true , count : 0,
      class : [{'className' : 'Sword','M' : require('./img/swordMan.jpg') , 'W' : require('./img/swordWoman.jpg')},
      {'className' : 'Magic','M' : require('./img/magicMan.jpg') , 'W' : require('./img/magicWoman.jpg')},
      ]
    }
   }
   changSex = ()=> {
     this.setState(oldstate =>{
       return {sex : !oldstate.sex }
     })
   }
   setrightcount = () => {
     this.setState(oldstate => { 
      if(this.state.count == 1){
        return {count : 0};
      }
      else{
        return {count : oldstate.count +1}
      }
     })
   }
   setleftcount = () => {
    this.setState(oldstate => { 
     if(this.state.count == 0){
       return {count : 1};
     }
     else{
       return {count : oldstate.count -1}
     }
    })
  }
   render() {
      return (
         <View style={styles.container}>
            {/* <Text style = {styles.editText}>เลือกตัวละคร</Text> */}
            {/* <Text style = {styles.editText}>อาชีพ : ...</Text>
            <View style = {{justifyContent : 'space-between' , flexDirection : 'row'}}>
              <View style = {{justifyContent : 'center'}}>
                <TouchableHighlight>
                  <Image source={require('./img/back.png')} style={{height: 30, width: 30 }}/>
                </TouchableHighlight>
              </View>
              <Image  source={this.state.sex ? require('./img/swordMan.jpg') : require('./img/swordWoman.jpg')} style={{height: 400, width: 200 }}/>
              <View style = {{justifyContent : 'center'}}>
                <TouchableHighlight>
                  <Image source={require('./img/next.png')} style={{height: 30, width: 30 }}/>
                </TouchableHighlight>
              </View>
            </View> */}
            
            {this.state.class.map((classN , key) =>(
              <View>
                {this.state.count == key ? <Text style = {styles.editText}>อาชีพ : {classN.className} </Text> : null}
                <View style = {{justifyContent : 'space-between' , flexDirection : 'row'}}>
                  <View style = {{justifyContent : 'center'}}>
                  {this.state.count == key ?<TouchableHighlight onPress = {this.setleftcount}>
                      <Image source={require('./img/back.png')} style={{height: 30, width: 30 }}/>
                    </TouchableHighlight>: null}
                  </View>
                  {this.state.count == key ? <Image resizeMode = 'contain' source={this.state.sex ? classN.M : classN.W} style={{height: 400, width: 300 }}/> : null}
                  <View style = {{justifyContent : 'center'}}>
                  {this.state.count == key ?<TouchableHighlight onPress = {this.setrightcount}>
                      <Image source={require('./img/next.png')} style={{height: 30, width: 30 }}/>
                    </TouchableHighlight> : null}
                  </View>
                </View> 
              </View>
              ))
            }


            <TouchableHighlight onPress = {this.changSex} underlayColor = 'white' style ={{backgroundColor : "yellow"}}>
              <Text >เปลี่ยนเพศตัวละคร : {this.state.sex ? 'ชาย' : 'หญิง'}</Text>
            </TouchableHighlight>
            
            <ButtonNext customClick={() => this.props.navigation.navigate('HomeStart')} ></ButtonNext>
            
         </View>

      )
   }
}
const styles = StyleSheet.create({
  editText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
 },
 container: {
    //paddingTop: 20,
    alignItems: 'center',
    justifyContent : 'space-between'

  },
  input: {
    marginEnd: 10,
    alignItems : 'flex-end',
    height: 40,
    width: 260,
    // borderColor: '#7a42f4',
    // borderWidth: 1
  },
  
});
