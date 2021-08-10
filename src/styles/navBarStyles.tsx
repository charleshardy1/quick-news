import { StyleSheet } from 'react-native';

const navBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  navText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  navNail:{
      marginRight: 15
  }
});

export default navBarStyle;