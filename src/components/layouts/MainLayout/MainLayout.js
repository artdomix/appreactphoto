import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.styles';
const mainLayoutInitialPropsValue = '';

const MainLayout = props => {
  return <View style={styles.MainLayout}>{props.children}</View>;
};

MainLayout.propTypes = {children: PropTypes.any.isRequired};
MainLayout.defaultProps = {};
export default MainLayout;
