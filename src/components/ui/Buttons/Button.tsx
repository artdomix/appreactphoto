import React from 'react';
import PropTypes from 'prop-types';

import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Button.style';
interface IButtonProps {
  style?: object;
  bgcolor?: string;
  color?: string;
  text?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
  onPress?: Function;
}
const Button: React.FC<IButtonProps> = props => {
  console.log(props);
  return (
    <TouchableOpacity
      style={{...styles.Button, ...props.style, backgroundColor: props.bgcolor}}
      onPress={evt => {
        console.log('EventduButton', evt.target);
        if (props.onPress) {
          props.onPress();
        }
      }}>
      <View style={styles.mainView}>
        {props.children !== undefined ? (
          props.children
        ) : (
          <Text style={{...styles.text, color: props.color}}>{props.text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
Button.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};
Button.defaultProps = {
  bgcolor: 'orange',
  color: 'black',
  //onPress: ()=>(),
};

export default Button;
