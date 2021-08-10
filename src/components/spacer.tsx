import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import styles from '../styles/buttonStyles';

type Props = {
    height?: number|undefined,
    backgroundColor?: string,
}
const  spacer: React.FC<Props> = ({ height, backgroundColor }): JSX.Element => {
  const spacerHeight = (height)?(height):(40)
  const color = (backgroundColor)?(backgroundColor):('white')
  return (
    <View style={{height:spacerHeight, backgroundColor: color}}>
    </View>
  );
}

export default  spacer;