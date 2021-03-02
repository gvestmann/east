import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  // The inner container
  mountainContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  // Title wrapper
  title: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  // Title CSS
  name: {
    fontSize: 50,
    fontFamily: 'OpenSans_300Light',
  },

  // H3 style
  location: {
    fontSize: 40,
    textAlign: 'center',
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  clickWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});



export default styles;