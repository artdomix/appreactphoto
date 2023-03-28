import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Product.styles';
const productInitialPropsValue = '';

const Product = props => {
  const [productState, setproductState] = useState(
    productInitialPropsValue,
  );
  useEffect(() => {
    return () => {
      console.log(`update  de temaplateName`);
    };
  }, [productState]);

  useEffect(() => {
    console.log(`mount  de temaplateName`);

    return () => {
      console.log(`unmount  de temaplateName`);
    };
  }, []);
  return (
    <View>
      <Text>product</Text>
    </View>
  );
};
Product.PropTypes = {};
Product.defaultProps = {};
export default Product;
