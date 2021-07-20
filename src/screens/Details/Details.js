import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const Screen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const item = route.params;

  useEffect(() => {
    navigation.setOptions({title: 'Details'});
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen;
