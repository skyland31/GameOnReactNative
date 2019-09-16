
import React, { Component } from 'react';
import { Alert,View, Text, FlatList  ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db', createFromLocation : 1});
export default class Backpack extends Component {
    static navigationOptions = {
        title: 'Backpack',
        headerStyle: { backgroundColor: '#f05555' },
        headerTintColor: '#ffffff',
      };
   constructor(props) {
      super(props);
        this.state={
            items : [],
            input_user : this.props.navigation.state.params.user
        }

        db.transaction(tx => {
            tx.executeSql(
              'SELECT * FROM Storage join Item On Storage.id_item = Item.Id where Storage.id_user = ?',
              [this.state.input_user],
              (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                  temp.push(results.rows.item(i));
                }
                this.setState({
                    items: temp,
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
                        data={this.state.items}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={[styles.container,{borderBottomWidth: 1}]}>
                                <Text>ItemName : {item.Name}</Text>
                                <Text>Cont : {item.Number}</Text>
                            </View>
                        )}
                    />
                </View>
         </ScrollView>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        padding : 20 ,
        borderBottomColor: 'black',
    }
});

