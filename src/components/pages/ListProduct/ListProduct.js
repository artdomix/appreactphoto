import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './ListProduct.styles';
const listProductInitialPropsValue = '';

const ListProduct = props => {
  const [listProductState, setlistProductState] = useState(
    listProductInitialPropsValue,
  );
  useEffect(() => {
    return () => {
      console.log(`update  de temaplateName`);
    };
  }, [listProductState]);

  useEffect(() => {
    console.log(`mount  de temaplateName`);

    return () => {
      console.log(`unmount  de temaplateName`);
    };
  }, []);
  return (
    <View style={styles.ListProduct}>
      <Text>listProduct</Text>
    </View>
  );
};
ListProduct.propTypes = {};
ListProduct.defaultProps = {};
export default ListProduct;
