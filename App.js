import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import AuthStack from './src/components/AuthStack';
import Screens from './src/components/Screens';
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Screens/>

      </PersistGate>

    </Provider>
   
    </>
  )
}

export default App