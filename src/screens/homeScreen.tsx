import React, { useState } from 'react';
import {Button, View, Text,} from 'react-native';
import BlackButton from '../components/blackButton';
import styles from '../styles/homeScreenStyles';
import Spacer from '../components/spacer';
import NavBar from '../components/navBar';

type Props = { navigation: any }
const homeScreen: React.FC<Props> = ({ navigation }): JSX.Element => {

  return (
    <>
      <NavBar/>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Quick News</Text>
        <Text>"A man who carries a cat by the tail learns something he can learn in no other way."</Text>
        <Text style={styles.author}>- Mark Twain</Text>
        <BlackButton title="Show News" onPress={()=>navigation.navigate('Articles')}/>
      </View>
    </>
  );
};

export default homeScreen;