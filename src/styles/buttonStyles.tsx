import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
    blackButton: {
      alignItems: 'center',
      backgroundColor: 'black',
      borderRadius: 10,
      fontWeight: 'bold',
      justifyContent: 'center',
      marginTop: 10,
      padding: 15,
      width: '100%',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    },
});

export default buttonStyles;