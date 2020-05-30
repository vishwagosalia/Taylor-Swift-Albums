<<<<<<< HEAD
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onpressed, children}) => {
  return (
    <TouchableOpacity onPress={onpressed} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

  buttonStyle: {
    flex: 1,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    // borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
=======
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onpressed, children}) => {
  return (
    <TouchableOpacity onPress={onpressed} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

  buttonStyle: {
    flex: 1,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    // borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
>>>>>>> f45bc33b02f7b2f8194ae30fa36c2a9ed7e4e466
