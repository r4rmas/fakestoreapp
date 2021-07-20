import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/components/Navigator/Navigator';
import BrandBar from './src/components/BrandBar/BrandBar';
import store from './src/store/index';
import colors from './src/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.darkGray} />
      <BrandBar />
      <NavigationContainer>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
