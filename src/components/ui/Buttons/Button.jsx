import React from 'react';
import PropTypes from 'prop-types';

import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Button.style';
const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      style={{...styles.Button, ...props.style, backgroundColor: props.bgcolor}}
      onPress={evt => {
        console.log('EventduButton', evt.target);
      }}>
      <View>
        {props.children !== undefined ? (
          props.children
        ) : (
          <Text style={{...styles.text, color: props.color}}>{props.text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
Button.propType = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.any,
};
Button.defaultProps = {
  bgcolor: 'orange',
  color: 'black',
};

export default Button;
