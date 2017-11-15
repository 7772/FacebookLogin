/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

const FBSDK = require('react-native-fbsdk');

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
const {LoginButton, ShareDialog} = FBSDK;

export default class App extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
    };

    this.state = {
      shareLinkContent: shareLinkContent,
    };
  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent)
      .then(function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      })
      .then(
        function(result) {
          if (result.isCancelled) {
            alert('Share cancelled');
          } else {
            alert('Share success with postId: ' + result.postId);
          }
        },
        function(error) {
          alert('Share fail with error: ' + error);
        },
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginButton />
        <TouchableHighlight
          style={styles.share}
          onPress={this.shareLinkWithShareDialog.bind(this)}>
          <Text style={styles.shareText}>Share link with ShareDialog</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
