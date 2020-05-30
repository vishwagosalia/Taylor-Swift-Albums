// import lib
import React from 'react';
import {Text, View} from 'react-native';

//making a component
const Header = header => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{header.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#71eeb8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.9,
    elevation: 5,
    position: 'relative',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
};

// Make a component available to other parts of the app
export default Header;
