import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Connect from './src/components/Connect/Connect';
import Navigator from './src/components/Navigator/Navigator';
import BrandBar from './src/components/BrandBar/BrandBar';
import store from './src/store/index';
import Color from './src/Color';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Color.darkGray} />
      <BrandBar />
      <NavigationContainer>
        <Provider store={store}>
          <Connect wrappedComponent={Navigator} />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
