
import React, { Component } from 'react';
import ButtonNext from './component/ButtonNext'
import SelectCharacter from './SelectCharacter';
import Skill from './Skill';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ScrollView,Button,View, Text, Image ,StyleSheet,TouchableHighlight} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
 class HomeStart extends Component {
   constructor(props) {
      super(props);
      // db.transaction(function(txn) {
      //   txn.executeSql(
      //     "SELECT name FROM sqlite_master WHERE type='table' AND name='game_user'",
      //     [],
      //     function(tx, res) {
      //       console.log('item:', res.rows.length);
      //       if (res.rows.length == 0) {
      //         txn.executeSql('DROP TABLE IF EXISTS game_user', []);
      //         txn.executeSql(
      //           'CREATE TABLE IF NOT EXISTS game_user(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), level INT(10), sex VARCHAR(255) ,hbd VARCHAR(255),cost INT(10) )',
      //           []
      //         );
      //       }
      //     }
      //   );
      // });
      this.state = {
        input_user: 'skyland31',
        level: 0,
        sex: '',
        hbd : '',
        cost: 0
      };
    }
   searchUser = () => {
      const {input_user} =this.state;
      console.log(this.state.input_user);
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM game_user where name = ?',
          [input_user],
          (tx, results) => {
            var len = results.rows.length;
            console.log('len',len);
            if (len > 0) {
              console.log(results.rows.item(0).level);
              this.setState({
               level:results.rows.item(0).level,
              });
              this.setState({
               sex:results.rows.item(0).sex,
              });
              this.setState({
               hbd:results.rows.item(0).hbd,
              });
              this.setState({
               cost:results.rows.item(0).cost,
              });
            }else{
              alert('No user found');
              this.setState({
               input_user: '',
               level: 0,
               sex: '',
               hbd : '',
               cost: 0
              });
            }
          }
        );
      });
    };
   
   render() {
      return (
         <View style={styles.container}>
            {this.searchUser}
            <Text style = {styles.editText}>Profile</Text>
            <Image source={require('./img/User.png')} style={{height: 100, width: 100 ,margin: 20 ,alignItems: 'center'}}/>
            <Text>ชื่อ : {this.state.input_user}</Text>
            <Text>Level : {this.state.level}</Text>
            <Text>Cost : {this.state.cost}</Text>
            <Text>เพศ : {this.state.sex == 'M'? 'ชาย' : 'หญิง'} </Text>
            <Text>วัน-เดือน-ปีเกิด :{this.state.hbd} </Text>
            <Button
              onPress={this.searchUser}
              title="ดูข้อมูล >"
              color="#841584"
            />
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