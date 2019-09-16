
import React, { Component } from 'react';
import { Alert,View, Text, TextInput  ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
export default class Market extends Component {
   constructor(props) {
      super(props);
      this.state = {
         cost : this.props.cost,
         cont : 1,
         temp : 0,
         costUser : this.props.costUser
       };
    }
    buyItem = ()=>{

      Alert.alert(
          'Buy Item Game',
          'Do You Want Buy?',
          [
              {text: 'OK', onPress: ()=> this.buy()},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            
          ],
          {cancelable: false},
        );
      this.setState({
        cont : 1
      })
  }
  confirm(){
   db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Storage where id_item = ? and id_user = ?',
        [this.props.id_item,this.props.user],
        (tx, results) => {
          this.setState({
             temp : results.rows.item(0).Number
          })
         var len = results.rows.length;
         if(len>0){
            this.setState({
               cont : this.state.cont + this.state.temp
            })
            this.updateDb();
         }
        }
      );
    });
    if(this.state.temp == 0){
      this.insertDbItem();
   }
  }
  updateDb(){
   db.transaction(tx => {
      tx.executeSql(
        'UPDATE Storage set Number=? where id_item = ? and id_user = ?',
        [this.state.cont,this.props.id_item,this.props.user],
        (tx, results) => {
         alert( 'Success', 'User updated successfully')
        }
      );
    });
  }
  insertDbItem(){
   db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Storage (id_user, id_item,Number) VALUES (?,?,?)',
        [this.props.user,this.props.id_item,this.state.cont],
        (tx, results) => {
         alert( 'Success', 'User Insert successfully')
        }
      );
    });
  }
  buy(){
     var tempCost =this.state.costUser - (this.state.cost*this.state.cont);
     if(tempCost < 0){
        alert('Error','You Can not Buy Item Because Cost Enougth not');
     }
     else{
      this.confirm();
        this.setState({
           costUser : tempCost
        })
      db.transaction(tx => {
         tx.executeSql(
           'UPDATE game_user set cost=? where name = ?',
           [this.state.costUser,this.props.user],
           (tx, results) => {
            alert( 'Success', 'User Insert successfully')
           }
         );
       });
      
     }
  }
   render() {
      return (
            <View style={styles.container}>
               {/* <Text>(your cost :{this.state.costUser})</Text> */}
               <Text>Name : {this.props.nameItem}</Text>
               <Text>Cost : {this.state.cost*this.state.cont}</Text>
               <View style = {[{flexDirection : 'row',justifyContent : 'flex-end',width : '100%',height : 30,}]}>
                    <View style ={{marginRight : 30 , backgroundColor : '#DCDCDC',flexDirection : 'row' ,borderWidth : 1}}>
                        <Text>{this.state.cont}</Text>
                        <View>
                            <TouchableHighlight onPress = {(cont)=> this.setState({cont : this.state.cont + 1})}><Icon name = 'plus-circle' size={15} /></TouchableHighlight>
                            <TouchableHighlight onPress = {this.state.cont < 1 ? (cont)=> this.setState({cont : 0}) : (cont)=> this.setState({cont : this.state.cont - 1})}><Icon name = 'minus-circle' size={15} /></TouchableHighlight>
                        </View>
                    </View>
                    <TouchableHighlight onPress = {this.buyItem}><Icon name = 'shopping-cart' size={30} color="green"/></TouchableHighlight>
               </View>
            </View>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        padding : 20 ,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});

