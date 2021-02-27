import {StyleSheet, ImageBackground} from 'react-native'

const styles = StyleSheet.create({
  // The inner container
  mountainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  // Title CSS
  name: {
    marginTop: '40%',
    width: '100%',
    alignItems: 'center',
    fontSize: 50,
    fontFamily: 'OpenSans_300Light',
  },

  // H3 style
  location: {
    fontSize: 40,
    paddingBottom: 20
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});

export default styles;