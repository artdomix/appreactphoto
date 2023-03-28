import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.styles';
const templateNameInitialPropsValue = '';

const TemplateName = props => {
  const [templateNameState, settemplateNameState] = useState(
    templateNameInitialPropsValue,
  );
  useEffect(() => {
    return () => {
      console.log(`update  de temaplateName`);
    };
  }, [templateNameState]);

  useEffect(() => {
    console.log(`mount  de temaplateName`);

    return () => {
      console.log(`unmount  de temaplateName`);
    };
  }, []);
  return (
    <View>
      <Text>templateName</Text>
    </View>
  );
};
TemplateName.PropTypes = {};
TemplateName.defaultProps = {};
export default TemplateName;
