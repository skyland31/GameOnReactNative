import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class IWeb extends Component {
  render() {
    return (
	<WebView
        source={{html: '<h1>Web View Test</h1><br>Would you like html?'}}
        style={{marginTop: 20}}
      />
    );
  }
}
