import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const Item = props => {
  const {data, isFavorite, onDetails, onFavorite} = {...props};

  return (
    <View style={styles.container}>
      <View style={styles.containerPrice}>
        <Text style={styles.price}>$ {data.price}</Text>
      </View>
      <Image style={styles.image} source={{uri: data.image}} alt={data.title} />
      <Text style={styles.title}>{data.title}</Text>
      <Pressable onPress={() => onDetails()}>
        <Text style={styles.details}>View details</Text>
      </Pressable>
      <Pressable onPress={() => onFavorite()}>
        <Text style={styles.favoriteIcon}>{isFavorite() ? '❤️' : '🤍'}</Text>
      </Pressable>
    </View>
  );
};

export default Item;
