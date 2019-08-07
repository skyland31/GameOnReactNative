import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class IScroll extends Component {
   state = {
      names: [
         {'name': 'Chemical Engineering', 'id': 1},
         {'name': 'Civil Engineering', 'id': 2},
         {'name': 'Computer Engineering', 'id': 3},
         {'name': 'Electrical Engineering', 'id': 4},
         {'name': 'Environment Science', 'id': 5},
         {'name': 'Material Science', 'id': 6},
      ]
   }
   render() {
      return (
         <View>
            <Text style={{fontSize:25}}>Department List</Text>
            <ScrollView>
               {
                  this.state.names.map((itemProduct, index) => (
                        <Text key = {itemProduct.id} style = {styles.itemProduct}>{itemProduct.name}</Text>                     
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default IScroll

const styles = StyleSheet.create ({
  itemProduct: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 30,
     margin: 2,
     borderColor: '#2a4944',
     borderWidth: 1,
     backgroundColor: '#d2f7f1'
  }
})
