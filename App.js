// From Expo init, the ImageBackground compontent from React Native I added myself
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// End of standard stuff
import Mountains from './components/mountains';


export default function App() {
  return (
    <View style={styles.container}>
    <Mountains />
      <StatusBar style="auto" />
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
