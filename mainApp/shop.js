import React, { Component } from 'react';
import { Button,View,Text, Image ,StyleSheet,TouchableHighlight,Alert,FlatList} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Market from './component/Market'
import { ScrollView } from 'react-native-gesture-handler';
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
export default class Shop extends Component{
    static navigationOptions = {
        title: 'SHOP ',
        headerStyle: { backgroundColor: '#f05555' },
        headerTintColor: '#ffffff',
      };
    constructor(props){
        super(props);
        this.state = {
            type : this.props.navigation.state.params.type,
            id_type : this.props.navigation.state.params.id,
            itemsOnShop : [],
            cont : 1,
            contTemp : 1,
            input_user : this.props.navigation.state.params.user,
            costUser: this.refresh(),
        }
        db.transaction(tx => {
            tx.executeSql(
              'SELECT * FROM Item where Type = ?',
              [this.state.id_type],
              (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                  temp.push(results.rows.item(i));
                }
                this.setState({
                  itemsOnShop: temp,
                });
              }
            );
          });
          // this.refresh();
    };
    refresh(){
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM game_user where name = ?',
          [this.state.input_user],
          (tx, results) => {
            var len = results.rows.length;
            console.log('len',len);
            if (len > 0) {
              this.setState({
                costUser:results.rows.item(0).cost,
              });
            }
          }
        );
      });
    }
    render(){
        return(
            <ScrollView>
                <Text style={styles.titleText}>{this.state.type}</Text>
                <Text>(your cost {this.state.costUser})</Text>
                <Button onPress = {()=>this.refresh()} title = 'refresh cost'/>
                <FlatList
                  data={this.state.itemsOnShop}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <View style = {styles.container}>
                         <Market user ={this.state.input_user} costUser={this.state.costUser} cost = {item.cost} id_item = {item.Id} nameItem = {item.Name} ></Market>
                     </View>
                  )}
               />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container : { 
        flexDirection : 'row',
        borderBottomColor: 'black',
    },
    rightIcon : {
        justifyContent : 'center' ,
        backgroundColor : 'green',
        
    },
    ButtonStyle : {
        width : 20,
        height : 20
    },
    imgItem : {
        width : 50,
        height :100
    },
    titleText:{
      marginBottom:30,  
      fontSize: 48,
    },
});