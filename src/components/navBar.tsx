import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import navStyle from '../styles/navBarStyles';
import Spacer from './spacer';


const  navBar: React.FC<unknown> = (): JSX.Element => {
  const navigation:any = useNavigation();
  return (
    <>
    <Spacer backgroundColor={'black'}/>
      <View style={navStyle.container}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Home')}>
        <View style={navStyle.navNail}>
          <Text style={navStyle.navText}>Home</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Articles')}>
          <View style={navStyle.navNail}>
            <Text style={navStyle.navText}>News</Text>
          </View>
        </TouchableOpacity>
      </View> 
    </>
  );
}

export default  navBar;