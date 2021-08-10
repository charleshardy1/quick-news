import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinkingConfiguration from './LinkingConfiguration';

import homeScreen from '../screens/homeScreen';
import articleScreen from '../screens/articleScreen';

const Stack = createNativeStackNavigator();

/**
 * Main app navigator that hold most main pages
 * @returns Stack Navigator
 */
 const RootStackNavigator: React.FC<unknown> = (): JSX.Element => (
  <NavigationContainer linking={LinkingConfiguration}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={homeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Articles" component={articleScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStackNavigator;
