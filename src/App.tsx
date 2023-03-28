/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Button as NButton,
  Image,
  Text,
} from 'react-native';

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
      <Button text="helloworld">
        <Image
          source={{
            uri: 'https://randompicturegenerator.com/img/car-generator/g3f3c8f4af303d1723f5d5e2f3050e53373d2708f67a2db6ae4e920d6e88c8242790303c2abea53e744b1b690e79613e5_640.jpg',
          }}
          style={{width: 50, height: 50}}
        />
      </Button>
      {/* <Button children="Button4"></Button>*/}
      <Button text="lumiere"></Button>
      <Button>
        <Text>clique moi</Text>
      </Button>
      <Button text="2eme essai" style={{backgroundColor: 'red'}} />
      <Button
        text="carl jung"
        bgcolor="purple"
        color="green"
        style={{backgroundColor: 'grey'}}
      />
      <NButton title="le bouton classique"></NButton>
    </SafeAreaView>
  );
}

//const styles = StyleSheet.create({});

export default App;
