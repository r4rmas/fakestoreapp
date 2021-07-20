import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Item from '../../components/Item/Item';
import Favorite from '../../components/Favorites/Favorite';
import styles from './styles';

const Screen = () => {
  const [items, setItems] = useState([]);
  const favorites = useSelector(state => state.favorites);

  const getItems = async () => {
    Promise.all(
      favorites.map(favorite =>
        fetch(`https://fakestoreapi.com/products/${favorite}/`).then(response =>
          response.json(),
        ),
      ),
    ).then(data => setItems(data));
  };

  useEffect(() => getItems(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Item data={item} wrappedComponent={Favorite} />
        )}
      />
    </View>
  );
};

export default Screen;
