import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/store'
import AppNavigationContainer from './src/containers/AppNavigationContainer'



export default function App() {
  return (
          <Provider store={store}>
              <AppNavigationContainer />
          </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
