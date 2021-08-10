import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/buttonStyles';

type Props = {
    onPress: any; title: string | undefined;
}
const  blackButton: React.FC<Props> = ({ onPress, title }): JSX.Element => {
  
  return (
    <TouchableOpacity style={styles.blackButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default  blackButton;