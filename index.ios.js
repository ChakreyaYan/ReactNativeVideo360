/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Video360 from './Libraries/RCTVideo360/RCTVideo360.ios.js';

class ReactNativeVideo360 extends Component {
  render() {
    return (
      <Video360 style={styles.container} />
    );
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Test</Text>
    //   </View>
    // );
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

AppRegistry.registerComponent('ReactNativeVideo360', () => ReactNativeVideo360);
