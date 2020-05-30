// import a library for component
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/Albumlist';

// creating a component
const App = () => (
  <View style={styles.flexStyle}>
    <Header headerText={'Albums'} />
    <Albumlist />
  </View>
);

const styles = {
  flexStyle: {
    flex: 1,
  },
};

//rendering the component on the device
AppRegistry.registerComponent('AwesomeProject', () => App);
