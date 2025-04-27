import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

// Redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Create a simple store (we'll expand this later)
const store = configureStore({
  reducer: {
    // We'll add reducers here later
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
