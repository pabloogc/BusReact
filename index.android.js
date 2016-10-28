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
  Navigator,
  ToolbarAndroid
} from 'react-native';

import {Colors, Styles} from './app/res/values'

class HomeComponent extends Component {
  render() {
    return (
      <View>
        <ToolbarAndroid style={...Styles.toolBar}/>
        <Text>Hey</Text>
      </View>
    )
  }
}


export default class BusReact extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'Home', id: 'Home', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'Home':
        return <HomeComponent/>;
      default:
        return <Text>{route.id}</Text>;
    }

  }
}

AppRegistry.registerComponent('BusReact', () => BusReact);
