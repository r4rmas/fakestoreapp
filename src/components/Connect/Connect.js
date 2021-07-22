import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Request from '../../Request';

const Connect = props => {
  const dispatch = useDispatch();

  const WrappedComponent = props.wrappedComponent;

  const getProducts = async () => {
    const data = await Request.getProducts();
    dispatch({type: 'add_items', items: data});
  };

  useEffect(() => getProducts());

  return <WrappedComponent />;
};

export default Connect;
