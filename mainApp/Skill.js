import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  TextInput,  Button,  TouchableHighlight, ScrollView, Image,  Alert} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['สกิล', 'ชื่อ', 'รายละเอียด'],
      tableData: [
        [<Image style={styles.skillIcon} source={{uri: 'https://gamefever.co/wp-content/uploads/2018/10/Bash.png'}}/>,
         'Bash',
         'โจมตีกายภาพใส่ศัตรู 1 Target (Lv. 10 ATK 200%) อัพสกิลเลเวล 5 ขึ้นไปจะมีโอกาส 30% ในการสตั๊นศัตรู'],
        [<Image style={styles.skillIcon} source={{uri: 'https://gamefever.co/wp-content/uploads/2018/10/Sword-Mastery.png'}}/>,
         'Sword Mastery', 
         'เพิ่มความแรงโจมตีในตอนที่ใช้ดาบ (Lv. 10 + ATK 40) และเพิ่มการโจมตีปกติ +200 ATK'],
        [<Image style={styles.skillIcon} source={{uri: 'http://gamefever.co/wp-content/uploads/2018/10/Provoke.png'}}/>,
         'Provoke', 
         'ยั่วยุศัตรูให้หันมาโจมตีเรา และลดการป้องกันของศัตรู แต่จะเพิ่มความแรงของศัตรูเล็กน้อย (Lv. 10 ศัตรูจะตีแรง 20%)'],
        [<Image style={styles.skillIcon} source={{uri: 'http://gamefever.co/wp-content/uploads/2018/10/Endure-2.png'}}/>,
         'Endure', 
         'ในตอนที่เราใช้สกิลนี้เราจะไม่ถูกชงักในขณะเดินหรือโจมตี และเพิ่ม Magic Defend'],
         [<Image style={styles.skillIcon} source={{uri: 'http://gamefever.co/wp-content/uploads/2018/10/Maxnumbrak.png'}}/>,
         'Maxnum Break	', 
         'กระแทกศัตรูเป็นวงกว้าง ทำให้อาวุธเป็นธาติไฟและเพิ่ม Dmg ชั่วขณะ']
        //<Image style={styles.inputIcon} source={{uri: 'https://www.bvcloads.com/images/login/seller_login.png'}}/>
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <ScrollView>      
      <View >
                   
          <View style={styles.container}>          
          <Image style={styles.inputIcon} source={require('./src/knight.jpg')} />          
          </View>     
       <View>
       <Text style = {styles.skill}>สกิล Knight</Text>
       <View style={styles.table}>
        <Table borderStyle={{borderWidth: 3, borderColor: '#5D00EA'}}>
          <Row data={state.tableHead} style={styles.tablehead} textStyle={styles.tabletext}/>
          <Rows data={state.tableData} textStyle={styles.tabletext}/>
        </Table>
      </View>

         
       <Text style = {styles.skill}>สาย Bash Status Str 99 Vit 99</Text>
       <View style={styles.inputContainer}>
       <Text style = {styles.story}>สายนี้จะเน้นถึกแบบจัดหนัก ดาเมจแรงเหมือนสาย Spear เน้นยืนนานๆ ตีช้าข้าไม่สนข้าไม่ล้มเพื่อข้าก็ไม่มีวันตาย แต่ข้อเสียคือแรกๆ จะเก็บเลเวลยากพอสมควรและอาจจะน่าเบื่อซักหน่อย ซึ่งข้อแนะนำคืออาจจะเล่นสายอื่นมาก่อนแล้วค่อยรีสายมาเป็นสายนี้ก็ได้เช่นกัน ซึ่งสายนี้แนะนำให้ลงหนักไปที่ Str และ VIT เป็นหลัก ส่วน Dex ลงพอแค่ตีมอนโดนเท่านั้น และพอเราเปลี้ยนเป็น Lord Knight เมื่อไรเราไม่จำเป็นต้องอัพ Dex เลยเพราะสกิล Concentration นั้นจะเพิ่ม Dex อยู่แล้ว
        </Text>
        </View>
        <Text style = {styles.skill}>สาย Spear Status Str 99 Vit 99</Text>
        <View style={styles.inputContainer2}>
       <Text style = {styles.story}>เป็นหนึ่งอาชีพที่มีดาเมจจัดมากและถึกมากๆ เหมาะกับ ล่าบอส เพราะสกิล Pierce สามารถโจมตีมอนสเตอร์ตัวใหญ่ได้แรง ข้อเสียของสายนี้อาจจะช้าในเรื่องการออกสกิลแต่ละครั้ง และถ้าหากเล่นสายนี้ตอนเป็น Lord Knight แพทที่จะมาในอนาคตก็ยืนแท๊งค์ในวง PVP หรือกิลวอ์ได้ไม่มีเพราะไม่มีสกิล Parry นั่นเอง (สามารถทำได้แต่ตัวอื่นอาจจะทำได้ดีกว่า) ซึ่งแรกๆ ตัวเราจำเป็นต้องใช้แค่ดาบ ซึ่งเราจะสามารถใช้ หอกได้ในตอนที่เป็น Knight ค่านี้ไม่ต้องคิดอะไรมาก หนัก Str และ Vit ให้เต็มและที่เหลือลง Dex และพอเราเปลี้ยนเป็น Lord Knight เมื่อไรเราไม่จำเป็นต้องอัพ Dex เลยเพราะสกิล Concentration นั้นจะเพิ่ม Dex อยู่แล้ว              
        </Text>
        </View>
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
    backgroundColor: '#FFFFFF',
  },  
  table: { 
     flex: 4,
     padding: 16, 
     paddingTop: 30, 
     backgroundColor: '#fff' ,
     borderColor: '#000000',
     //width : 420,
     
    },
  tablehead: { 
    height: 37, 
    backgroundColor: '#f1f8ff',
    
   },
  tabletext: {
     margin: 6 ,
     fontWeight : 'bold',
     fontSize : 16
    },
  skill:{
    marginTop : 10,
    fontSize : 24,
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
      height:290,
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
    height:360,
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
    marginLeft: 20,
    justifyContent: 'center',    
    marginTop: 5,  
    marginBottom: 5,
       
  }, 
  titleText:{
    marginTop:10,  
    fontSize: 30,
    fontWeight: 'bold',
    color : '#CC0033',     
  },
});