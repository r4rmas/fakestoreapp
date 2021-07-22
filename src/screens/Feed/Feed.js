import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Item from '../../components/Item/Item';
import Product from '../../components/Feed/Product';
import styles from './styles';

const Screen = () => {
  const items = useSelector(state => state.items);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <Item data={item} wrappedComponent={Product} />}
      />
    </View>
  );
};

export default React.memo(Screen);
