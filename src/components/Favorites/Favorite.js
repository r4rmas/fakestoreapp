import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const Item = props => {
  const {data, isFavorite, onDetails, onFavorite} = {...props};

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onDetails()}>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Image style={styles.image} source={{uri: data.image}} />
        </View>
      </Pressable>
      <Pressable onPress={() => onFavorite()}>
        <Text style={styles.favoriteIcon}>{isFavorite() ? '❤️' : '🤍'}</Text>
      </Pressable>
    </View>
  );
};

export default Item;
