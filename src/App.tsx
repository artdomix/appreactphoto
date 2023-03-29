/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Menu from './components/ui/Menu/Menu';
import ListProduct from './components/pages/ListProduct/ListProduct';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  //let counter = 0;
  //const [counter, setcounter] = useState(0);
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    console.log('-------------------');
    console.log('nouvelle appel vers l api product : ');
    console.log('============');
    fetch(
      'http://my-json-server.typicode.com/champix56/frncv1-2023-03-27/products',
    )
      .then(retour => {
        return retour.json();
      })
      .then(arr => setProduits(arr));
    /* return () => {
      effect
    };*/
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        <ScrollView style={styles.page}>
          {produits.map((p: any) => (
            <Text>{p.name}</Text>
          ))}
          <ListProduct />
        </ScrollView>
        <Menu />
      </MainLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
  },
});

export default App;
