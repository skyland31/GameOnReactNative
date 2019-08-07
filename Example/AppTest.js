import React, { Component } from 'react';
import { Button,SectionList,Image,ScrollView,Switch,Slider,Alert, AppRegistry, StyleSheet, TouchableHighlight, TextInput, View, Text, Picker} from 'react-native';
import { WebView } from 'react-native-webview';

export default class IScrolled extends Component {
  state = {
    email: '',
    password: '',
    department: '',
    age: '',
    switch1Value: false,
    names: [
      {'name': 'Chemical Engineering', 'id': 1},
      {'name': 'Civil Engineering', 'id': 2},
      {'name': 'Computer Engineering', 'id': 3},
      {'name': 'Electrical Engineering', 'id': 4},
      {'name': 'Environment Science', 'id': 5},
      {'name': 'Material Science', 'id': 6},
   ],
   text: '',
  }
  _onPressButtonTap() {
    Alert.alert('You tapped the button!')
  }

  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
 }
  updateAge = (age) => {
    this.setState({ age: age*40 })
 }
  updateDepartment = (department) => {
    this.setState({ department: department })
 }
  _onPressButton(email, pass) {
    alert('email: ' + email + ' password: ' + pass)
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  render() {
    return (
      <ScrollView>
        <Button		 
            onPress={this._onPressButtonTap}
            title="Alert Message"
	    color='black'
        />
        <Button		 
            onPress={()=>this.setState ({text: 'You press Alert Message2'})}
            title="Alert Message2"
	    color = 'green'
        /> 

        <View style={styles.container}>
          <Text style={{fontSize:25}}>Login</Text>
          <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(text)=>this.setState({ email: text })}/>            
          <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(text)=>this.setState({ password: text })}/>
          <TouchableHighlight 
            onPress={()=>this._onPressButton(this.state.email, this.state.password)} 
            onLongPress={this._onLongPressButton}
            underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
            <Picker selectedValue = {this.state.department} onValueChange = {this.updateDepartment}>
               <Picker.Item label = "Computer" value = "Computer" />
               <Picker.Item label = "Electrical" value = "Electrical" />
               <Picker.Item label = "Civil" value = "Civil" />
               <Picker.Item label = "Chemical" value = "Chemical" />
               <Picker.Item label = "Material" value = "Material" />
               <Picker.Item label = "Environment" value = "Environment" />
            </Picker>
            <Text style = {styles.text}>{this.state.department}</Text>
         </View>
         <View>
            <Text>Age of User</Text>
            <Slider onValueChange = {this.updateAge} />
            <Text style = {{fontSize: 30, color: 'red'}}>{this.state.age} Year Old</Text>
         </View>
         <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
            <Text>Switch 1</Text>
            <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
            <Text style = {{fontSize: 30, color: 'red'}}>Switch 1 is {this.state.switch1Value*1}</Text>
         </View>
        <Text style={{fontSize:24}}>Scroll me plz</Text>
        <Image source={require('./favicon.png')} />
        <Image source={require('./favicon.png')} />
        <Image source={require('./favicon.png')} />
        <Image source={require('./favicon.png')} />
        <Text style={{fontSize:24}}>Load more images</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <WebView
          source={{uri: 'https://www.google.com/'}}
          style={{height: 300, width: 400}}
          scalesPageToFit={true}
        />
        <View style={styles.container}>
          <Text style={{fontSize:25}}>Department List</Text>
          <SectionList
            sections={[
              {title: 'Computer', data: ['Software', 'Embeded', 'Network']},
              {title: 'Electrical', data: [ 'Communication','Control', 'Electronic', 'Power']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
        <Text style={{fontSize:25}}>Department List</Text>
        <ScrollView>
          {
            this.state.names.map((itemProduct, index) => (
              <Text key = {itemProduct.id} style = {styles.itemProduct}>{itemProduct.name}</Text>                     
            ))
          }
          </ScrollView>
          <WebView
            source={{html: '<h1>Web View Test</h1><br>Would you like html?'}}
            style={{height: 300, width: 400}}
          />
          <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})}
            />
            <Text style={{color: 'red', padding: 10, fontSize: 42}}>
              {this.state.text}</Text>
            <Text style={{color: 'blue', padding: 10, fontSize: 42}}>
              {this.state.text.split(' ')}</Text>
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word || '$').join(' ')}</Text>        
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '$').join(' ')}</Text>
          </View>
      </ScrollView>
   );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  input: {
    margin: 15,
    height: 40,
    width: 260,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
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
});
