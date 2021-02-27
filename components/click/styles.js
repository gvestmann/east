import { StyleSheet } from 'react-native';

// This is the CSS stuff for Click/Button component
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    textTransform: 'uppercase',
  }
});

export default styles;