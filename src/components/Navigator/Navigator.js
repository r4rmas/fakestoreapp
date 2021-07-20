import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabViewBar from '../TabViewBar/TabViewBar';
import Details from '../../screens/Details/Details';
import styles from './styles';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={styles}>
      <Stack.Screen name="Home" component={TabViewBar} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Navigation;
