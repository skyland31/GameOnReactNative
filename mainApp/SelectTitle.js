
import React, { Component } from 'react';
import Buttons from './component/Buttons'
import { FlatList,View, Text, Image ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
export default class SelectTitle extends Component {
    static navigationOptions = {
        title: 'TYPE',
        headerStyle: { backgroundColor: '#f05555' },
        headerTintColor: '#ffffff',
      };
   constructor(props) {
      super(props);
      this.state = {
         types: [],
         input_user : this.props.navigation.state.params.user,
       };
      
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Type ',
           [],
           (tx, results) => {
             var temp = [];
             for (let i = 0; i < results.rows.length; ++i) {
               temp.push(results.rows.item(i));
             }
             this.setState({
               types: temp,
             });
           }
         );
       });
    }
   
   render() {
      return (
         <ScrollView>
            <View style={styles.container}>
               <FlatList
                  data={this.state.types}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <Buttons title = {item.name} link = {()=>this.props.navigation.navigate('Shop',{type : item.name,id:item.id,user : this.state.input_user })} ></Buttons>
                  )}
               />
               <Buttons color = 'green' title = "Backpack" link = {()=>this.props.navigation.navigate('Backpack',{user :this.state.input_user})}></Buttons>
               <Buttons color = 'red' title = "Go Back" link = {()=>this.props.navigation.navigate('HomeStart')}></Buttons>
            </View>
         </ScrollView>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        padding : 20 
    }
});

