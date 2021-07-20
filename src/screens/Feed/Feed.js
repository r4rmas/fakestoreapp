import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Item from '../../components/Item/Item';
import Product from '../../components/Feed/Product';
import styles from './styles';

const Screen = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () =>
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => setProducts(data));

  useEffect(() => getProducts(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <Item data={item} wrappedComponent={Product} />}
      />
    </View>
  );
};

export default Screen;
