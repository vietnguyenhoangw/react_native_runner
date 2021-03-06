import React from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store, persistor} from '@store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Styles} from '@configs';
import AppContainer from './container';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  return (
    <GestureHandlerRootView style={Styles.flex}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
