import { StyleSheet } from 'react-native';

const homeScreenStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
        width: '100%',
    },
    header:{
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    author:{
        fontStyle:'italic'
    }
});

export default homeScreenStyles;