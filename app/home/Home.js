import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ListView,
  TouchableHighlight
} from 'react-native';
import {Styles} from "../res/values";
import {firebaseApp} from '../firebase'

export default class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    console.log(this);
    this.itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        console.log(child);
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      console.log(items);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    })
  }

  render() {
    return (
      <View>
        <ToolbarAndroid {...Styles.toolBar}/>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={(sectionID, rowID) => {
            return (
              <View key={`${sectionID}-${rowID}`}
                    style={{height: 1, backgroundColor: '#E0E0E0'}}/>);
          }}
          renderRow={(rowData) =>
            <TouchableHighlight>
              <View  {...Styles.savedStopListItem}>
                <Text {...Styles.savedStopName}>Hello hello</Text>
                <Text {...Styles.savedStopNumber}>123</Text>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    )
  }
}