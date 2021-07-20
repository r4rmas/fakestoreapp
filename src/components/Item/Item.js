import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

// High-order component
const Item = props => {
  const navigation = useNavigation();
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const item = props.data;
  const WrappedItem = props.wrappedComponent;

  const isFavorite = () => {
    return favorites.includes(item.id);
  };

  const goToDetails = () => {
    navigation.navigate('Details', item);
  };

  const toggleFavorite = () => {
    dispatch({type: 'toggle_favorite', itemId: item.id});
  };

  return (
    <WrappedItem
      data={item}
      isFavorite={isFavorite}
      onDetails={goToDetails}
      onFavorite={toggleFavorite}
    />
  );
};

export default Item;
