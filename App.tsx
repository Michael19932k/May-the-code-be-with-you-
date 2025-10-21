import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppQueryProvider } from './src/providers/QueryClientProvider';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppQueryProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppQueryProvider >
    </SafeAreaProvider>
  );
}
