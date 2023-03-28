/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme, Button as NButton} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/ui/Buttons/Button';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button text="bonjour" />
      <Button text="2eme essai" style={{backgroundColor: 'red'}} />
      <NButton title="le bouton classique"></NButton>
    </SafeAreaView>
  );
}

//const styles = StyleSheet.create({});

export default App;
