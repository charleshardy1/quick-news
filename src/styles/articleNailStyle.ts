import { StyleSheet } from 'react-native';

const NewsCardStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginTop:1,
    marginBottom:4,
  },
  description:{
    fontSize: 14,
    marginTop:1,
    marginBottom:4,
  },
  image: {
    height: 150,
    width: 150,
    marginTop:1,
    marginBottom:1,
  },
});

export default NewsCardStyle;
