import React from 'react';
import PropTypes from 'prop-types';

import {Text, TouchableOpacity} from 'react-native';
import style from './Button.style.js';
const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      style={{...style.Button, ...props.style, ...props.bgcolor}}
      onPress={evt => {
        console.log('EventduButton', evt.target);
      }}>
      {props.text && (
        <Text style={{...style.text, ...props.color}}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};
Button.propType = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.any,
};
Button.defaultProps = {
  bgcolor: 'orange',
  color: 'black',
};

export default Button;
