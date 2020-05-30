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
<<<<<<< HEAD
AppRegistry.registerComponent('AwesomeProject', () => App);
=======
AppRegistry.registerComponent('Albums', () => App);
>>>>>>> f45bc33b02f7b2f8194ae30fa36c2a9ed7e4e466
