import React from 'react';
import AppNavigation from './src/routes/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import audioSlice from './src/redux/audioSlice';

const store = configureStore({
  reducer: {
    question: audioSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
