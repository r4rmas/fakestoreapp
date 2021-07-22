import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Item from '../../components/Item/Item';
import Favorite from '../../components/Favorites/Favorite';
import styles from './styles';

const Screen = () => {
  const items = useSelector(state => state.items);
  const favorites = useSelector(state => state.favorites);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => {
          if (favorites.includes(item.id)) {
            return <Item data={item} wrappedComponent={Favorite} />;
          }
        }}
      />
    </View>
  );
};

export default React.memo(Screen);
