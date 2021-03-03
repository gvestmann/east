// Statusbar is imported from Expo init. Also StyleSheet and View from React Native. MountainList and Header are two modules used to build App.js. Below the two main components are rendered: MountainList and Header. Also the statusbar style is assigned. 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MountainList from './components/MountainList';
import Header from './components/Header'


export default function App() {

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
  },
});
