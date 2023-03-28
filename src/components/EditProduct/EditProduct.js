import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './EditProduct.styles';
const editProductInitialPropsValue = '';

const EditProduct = props => {
  const [editProductState, seteditProductState] = useState(
    editProductInitialPropsValue,
  );
  useEffect(() => {
    return () => {
      console.log(`update  de temaplateName`);
    };
  }, [editProductState]);

  useEffect(() => {
    console.log(`mount  de temaplateName`);

    return () => {
      console.log(`unmount  de temaplateName`);
    };
  }, []);
  return (
    <View>
      <Text>editProduct</Text>
    </View>
  );
};
EditProduct.PropTypes = {};
EditProduct.defaultProps = {};
export default EditProduct;
