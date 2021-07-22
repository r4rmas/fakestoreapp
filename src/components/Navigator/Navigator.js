import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabViewBar from '../TabViewBar/TabViewBar';
import Details from '../../screens/Details/Details';
import styles from './styles';

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={styles.navigator}>
      <Stack.Screen name="Home" component={TabViewBar} options={styles.home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={styles.details}
      />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();

export default Navigator;
