import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolled extends Component {
  render() {
    return (
      <ScrollView>
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
        {/* <Text style={{fontSize:24}}>Add little bit more images</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} /> */}
      </ScrollView>
   );
  }
}
