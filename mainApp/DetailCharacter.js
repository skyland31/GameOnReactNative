import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  TextInput,  Button,  TouchableHighlight, ScrollView, Image,  Alert} from 'react-native';
import ButtonNext from './component/ButtonNext'
export default class DetailCharacter extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  render() {
    return (
      <ScrollView>      
      <View >
                   
          <View style={styles.container}>          
          <Image style={styles.inputIcon} source={require('./src/knight.jpg')} />          
          </View>     
       <View>
       <Text style = {styles.skill}>เนื้อเรื่อง อาชีพ Knight</Text>
       <View style={styles.inputContainer}>
       <Text style = {styles.story}>เหล่าอัศวินแห่งราชอาณาจักรรูนมิดการ์ด ผู้จงรักภักดี 
              พวกเขาทำตามพระบัญชาของกษัตริย์แห่งรูน มิดการ์ด 
              และผู้บัญชาการอัศวินเท่านั้นพวกเขาล้วนเป็นนักดาบ
              ที่มีพลังโจมตีทางกายภาพและพลังป้องกันที่สูง
              สามารถกำจัดศัตรูได้อย่างง่ายดาย สามารถเคลื่อนที่ได้
              อย่างรวดเร็วเมื่ออยู่บนปีโกปีโกะ (Peco Peco) 
              นอกจากนี้ความสามารถในการโจมตีทางกายภาพของพวกเขา 
              ก็ยังสามารถพลิกแพลงได้หลากหลายทีเดียว
        </Text>
        </View>
        <Text style = {styles.skill}>แนวทางการเล่น</Text>
        <View style={styles.inputContainer2}>
       <Text style = {styles.story}>หนึ่งในอาชีพที่จัดว่ามีบทบาทอย่างมากสำหรับ Knight 
       ยิ่งบางคนที่เป็นสาย PVP หรือ กิลวอร์อาชีพนี้ก็จัดเป็นหนึ่งอาชีพสำคัญเป็นอันดับต้นๆเลย 
       โดย Knight เป็นอาชีพนักดาบมีข้อเด่นคือมีเลือดเยอะกว่าอาชีพอื่นๆ              
        </Text>
        </View>
      </View>
       
        {/* <View style={styles.inputContainer}>
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
          </View> */}
        
        <View style={styles.NBbutton}><Button
              onPress={this.onPressLearnMore}
              title="Next >"
              color="#841584"
            /></View>       
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({  
  character:{
    flex: 1,   
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  skill:{
    marginTop : 10,
    fontSize : 32,
    color : '#C60101', 
    marginLeft : 15,
    fontWeight: 'bold',
  },
  story:{
    marginTop : 10,
    fontSize : 17.5,
    color : 'black', 
    marginLeft : 15,
  },
  container: {
    flex : 1,
    alignItems : 'center'
  },
  inputContainer: {
      borderBottomColor: 'white',
      backgroundColor: '#F4F4F4',
      borderRadius:5,
      borderBottomWidth: 5,
      flexDirection : 'row',    
      width:390,
      height:240,
      marginTop:18,
      marginRight : 0,
      marginLeft:10,
      flexDirection: 'row',     
  },
  inputContainer2: {
    borderBottomColor: 'white',
    backgroundColor: '#F4F4F4',
    borderRadius:5,
    borderBottomWidth: 5,
    flexDirection : 'row',    
    width:390,
    height:150,
    marginTop:10,
    marginRight : 0,
    marginLeft:10,
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
    marginLeft:310,
    marginRight:10,
    marginTop: 10,
    flexDirection : 'row',
    alignSelf : 'flex-start',
    marginBottom: 10,
  },  
  inputIcon:{
    width:410,
    height:230,
    marginLeft:30,
    marginRight:30,
    // marginTop: 25,
       
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