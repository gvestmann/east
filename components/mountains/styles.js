import {StyleSheet, ImageBackground} from 'react-native'
const styles = StyleSheet.create({
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

export default styles;