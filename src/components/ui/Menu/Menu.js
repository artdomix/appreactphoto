import {View, Text, TouchableHighlight, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.styles';
const menuInitialPropsValue = '';

const Menu = props => {
  const [menuState, setmenuState] = useState(menuInitialPropsValue);
  useEffect(() => {
    return () => {
      console.log(`update  de temaplateName`);
    };
  }, [menuState]);

  useEffect(() => {
    console.log(`mount  de temaplateName`);

    return () => {
      console.log(`unmount  de temaplateName`);
    };
  }, []);
  return (
    <View>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-256.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/thin-office/24/thin-1573_to-do_done_list_tasks-256.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-256.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_settings-256.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
      <Text>menu</Text>
    </View>
  );
};
Menu.propTypes = {};
Menu.defaultProps = {};
export default Menu;
