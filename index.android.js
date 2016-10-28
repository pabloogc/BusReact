/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import {Colors} from './app/res/values'

export default class BusReact extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'Home', id: 'Home', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(router, navigator) {
    return (<Text>Hello</Text>);
  }
}

AppRegistry.registerComponent('BusReact', () => BusReact);
