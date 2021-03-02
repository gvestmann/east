// From Expo init, the ImageBackground compontent from React Native I added myself
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// End of standard stuff
import Mountains from './components/mountains';
import { useFonts, OpenSans_300Light, } from '@expo-google-fonts/open-sans';


export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <Text>TEXT</Text>
  }

  return (
    <View style={styles.container}>
    <Mountains name={'Dyrfjöll'} location={'Borgarfjörður Eystri'} image={require('./assets/images/dyrfjoll.jpg')} />
      <StatusBar style="light" />
    </View>
  );
}

// The CSS styles go here:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'OpenSans_300Light'
  },
});
