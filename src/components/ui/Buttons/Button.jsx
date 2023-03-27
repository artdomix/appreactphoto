import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './Button.style.js';
const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      style={style.Button}
      onPress={evt => {
        console.log('EventduButton', evt.target);
      }}>
      <Text style={style.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
