// From Expo init, the ImageBackground compontent from React Native I added myself
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// End of standard stuff
import MountainList from './components/MountainList';
import { useFonts, OpenSans_300Light, } from '@expo-google-fonts/open-sans';
import Header from './components/Header'


export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  return (
    <View style={styles.container}>

      <Header />

      <MountainList/>

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
