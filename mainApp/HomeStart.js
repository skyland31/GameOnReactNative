
import React, { Component } from 'react';
import Buttons from './component/Buttons'
import { Button,View, Text, Image ,StyleSheet,TouchableHighlight} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
import { ScrollView } from 'react-native-gesture-handler';
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});

export default class HomeStart extends Component {
  
   constructor(props) {
      super(props);
      // const {navigation} = this.props;
      // const user = navigation.getParam('user','Error');
      this.state = {
        input_user: this.props.navigation.state.params.userCorrect,
        level: 0,
        sex: '',
        hbd : '',
        cost: 0,

      };
      this.refresh();
      console.log(this.state.input_user);
      // db.transaction(tx => {
      //   tx.executeSql(
      //     'SELECT * FROM game_user where name = ?',
      //     [this.state.input_user],
      //     (tx, results) => {
      //       var len = results.rows.length;
      //       console.log('len',len);
      //       if (len > 0) {
      //         console.log(results.rows.item(0).level);
      //         this.setState({
      //          level:results.rows.item(0).level,
      //         });
      //         this.setState({
      //          sex:results.rows.item(0).sex,
      //         });
      //         this.setState({
      //          hbd:results.rows.item(0).hbd,
      //         });
      //         this.setState({
      //          cost:results.rows.item(0).cost,
      //         });
      //       }else{
      //         alert('No user found');
      //         this.setState({
      //          input_user: '',
      //          level: 0,
      //          sex: '',
      //          hbd : '',
      //          cost: 0
      //         });
      //       }
      //     }
      //   );
      // });
    }
    refresh(){
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM game_user where name = ?',
          [this.state.input_user],
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
    }
   render() {
    
      return (
        <ScrollView>
          <View style={styles.container}>
            {this.searchUser}
            <Text style = {styles.editText}>Profile</Text>
            <Image source={require('./img/User.png')} style={{height: 100, width: 100 ,margin: 20 ,alignItems: 'center'}}/>
            <Text>ชื่อ : {this.state.input_user}</Text>
            <Text>Level : {this.state.level}</Text>
            <Text>Cost : {this.state.cost}</Text>
            <Text>เพศ : {this.state.sex == 'M'? 'ชาย' : 'หญิง'} </Text>
            <Text>วัน-เดือน-ปีเกิด :{this.state.hbd} </Text>
            <Buttons title = "Shop" link = {()=>this.props.navigation.navigate('SelectTitle',{user :this.state.input_user , costUser : this.state.cost})}></Buttons>
            <Buttons title = "Guid Character" link = {()=>this.props.navigation.navigate('Character')}></Buttons>
            <Buttons color = 'black' title = "Refresh" link = {()=>this.refresh()}></Buttons>
            <Buttons color ='red' title = "ออกจากระบบ" link = {()=>this.props.navigation.navigate('Login' , {user : null , password : null})}></Buttons>
         </View>
        </ScrollView>
         
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
  buttonContainer: {
   height:45,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom:20,
   width:250,
   borderRadius:30,
 },
 loginButton: {
   backgroundColor: "#00b5ec",
 },
 loginText: {
   color: 'white',
 }
  
});

// const TabNavigator = createStackNavigator({
//    Profile: { 
//       screen: HomeStart 
//    },
//    Character : { 
//       screen: SelectCharacter 
//    },
//  });
//   createAppContainer(TabNavigator);
