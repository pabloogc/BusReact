import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';

class Stop {
  constructor(name, id) {
    this._name = name;
    this._id = id;
  }

  kind() {
    if (this.id < 6000) return "EMT";
    else return "IU";
  }

  get name() {
    return this._name
  }

  get id() {
    return this._id
  }
}

class HomeComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([new Stop("Moncloa", 6002), new Stop("Random", 123)])
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}} refreshing>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={(sectionID, rowID) => {
            return (
              <View key={`${sectionID}-${rowID}`}
                    style={{height: 1, backgroundColor: '#E0E0E0'}}/>);
          }}
          renderRow={(rowData) =>
            <View style={styles.stopRow}>
              <Text style={styles.stopRowName}>{rowData.name}</Text>
              <Text style={styles.stopRowNumber}>{rowData.id}</Text>
            </View>
          }
        />
      </View>
    );
  }
}

class StopDetailsComponent extends Component {
  constructor() {
    super();
  }

  render() {

  }
}

export default class BusReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid logo={require('./res/ic_launcher.png')} title='Madrid Bus Interurbanos' titleColor='white' style={styles.toolbar}/>
        {/*<Text style={{color: "#2D2D2D"}}>Paradas de Buses Interurbanos</Text>*/}
        <HomeComponent/>
        <TouchableHighlight style={styles.addStopButton}
                            underlayColor='#ff7043' onPress={()=> {
          console.log('pressed')
        }}>
          <Text style={{fontSize: 54, paddingBottom: 4, color: 'white', fontFamily: 'monospace'}}>+</Text>
        </TouchableHighlight>
      </View>
    )
      ;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },

  stopRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    height: 54,
  },

  stopRowName: {
    flex: 1,
    fontSize: 18,
    color: "#757575",
  },

  stopRowNumber: {
    fontSize: 18,
    color: "#ddd",
  },

  toolbar: {
    height: 56,
    backgroundColor: "#7ba857"
  },

  addStopButton: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 56,
    width: 56,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
});

AppRegistry.registerComponent('BusReact', () => BusReact);
