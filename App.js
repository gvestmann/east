// From Expo init, the ImageBackground compontent from React Native I added myself
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// End of standard stuff


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.MountainContainer}>
        
        <ImageBackground source={require('./assets/images/dyrfjoll2.jpg')} style={styles.img}></ImageBackground>

        <View style={styles.title}>
          <Text style={styles.name}>DYRFJÖLL</Text>
          <Text style={styles.location}>Borgarfjörður Eystri</Text>
        </View>

      </View>
      

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

  // The inner container
  MountainContainer: {
    width: '100%',
    height: '100%',
  },

  // Title CSS
  title: {
    marginTop: '40%',
    width: '100%',
    alignItems: 'center',
  },

  // H2 style
  name: {
    fontSize: 50,
  },

  // H3 style
  location: {
    fontSize: 24,
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }

});
