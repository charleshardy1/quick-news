import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

const App: React.FC = () => (
  <SafeAreaProvider>
    <Navigation />
  </SafeAreaProvider>
);

export default App;
