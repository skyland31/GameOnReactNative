import React, { Component } from 'react';
import { Button, View, Text, ToastAndroid, ViewPagerAndroid, ScrollView, StyleSheet, TimePickerAndroid, Modal, TouchableHighlight, ActivityIndicator, DatePickerAndroid, }  from 'react-native';




export default class HomeScreen extends React.Component {


  constructor() {
    super();
    this.state = {
    modalVisible: true,
    }

    super();
      this.state = { iyear : 2020, imonth : 3, iday : 9}

    super();
      this.state = { ihour : 10, iminute : 30}


  }

  render() {
    return(
      <Modal animationType="slide" transparent={ false }
      visible={this.state.modalVisible}
      presentationStyle ="formSheet"
      onRequestClose={()=> {console.log("onRequestClose");}}>
        <ScrollView>
    <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
    <ActivityIndicator size="large" color="#ff0000" />
    <View style={styles.container}>
        <Text>I am a modal. Ain't I cool??' </Text>
              <TouchableHighlight style={{ marginTop : 100 }} onPress={() => { this.setState({ modalVisible : false }); }}>
                <Text>Tap me to hide modal</Text>
              </TouchableHighlight>
              </View>

              <View style={styles.container}>
              <Button title="Open DatePickerAndroid"
          onPress={ async () => {
           const { action, year, month, day } = await DatePickerAndroid.open({date : new Date()});
           if (action === DatePickerAndroid.dateSetAction) 
           { this.setState({ iyear : year, imonth: month, iday: day }); }
           if (action === DatePickerAndroid.dismissedAction)                         
           { console.log("Dismissed"); }
          }}
         />
         <Text>Date {this.state.iday} {this.state.imonth} {this.state.iyear}</Text>
         </View>

         <View style={styles.container}>
         <Button title="Open TimePickerAndroid"
             onPress={ async () => {
              const { action, hour, minute } = await TimePickerAndroid.open({ hour : 11, minute : 30, is24Hour : false });
              if (action === TimePickerAndroid.timeSetAction)                             
              { this.setState({ ihour : hour, iminute: minute}); }
              if (action === TimePickerAndroid.dismissedAction)
              { console.log("Dismissed"); }
             }}
            />
            <Text>Date {this.state.ihour} {this.state.iminute}</Text>
            </View>

            
            <Text>ViewPagerAndroid</Text>
         <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
            <Text style={{ fontSize : 24 }}>Page{"\n"}Number{"\n"}1</Text>
          </View>
          <View style={{ alignItems : 'center', padding : 10 }}>
            <Text style={{ fontSize : 24 }}>Page{"\n"}Number{"\n"}2</Text>
          </View>
        </ViewPagerAndroid>
        

        <View style={styles.container}>
        <Text>ToastAndroid</Text>
        <Button title="Show Toast Message (Android Only)"
          onPress={ async () => {
            ToastAndroid.show("I am a short message", ToastAndroid.SHORT);
            ToastAndroid.showWithGravity(
              "I am a message with gravity, centered",
              ToastAndroid.SHORT, ToastAndroid.CENTER
            );
            ToastAndroid.showWithGravityAndOffset(
              "I am a message with gravity, offset from the bottom",
              ToastAndroid.LONG, ToastAndroid.TOP,
              -75, Dimensions.get("window").height / 2
            );
          }}
        />
        </View>

      

        
    </View>

    </ScrollView>
    </Modal>
    );
 }

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center'
    },

  });