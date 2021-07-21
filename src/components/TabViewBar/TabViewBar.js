import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Feed from '../../screens/Feed/Feed';
import Favorites from '../../screens/Favorites/Favorites';
import styles from './styles';

const TabViewBar = () => {
  const [index, setIndex] = useState(0);

  const renderScene = SceneMap({
    feed: () => <Feed />,
    favorites: () => <Favorites />,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
};

const initialLayout = {width: Dimensions.get('window').width};
const routes = [
  {key: 'feed', title: 'Feed'},
  {key: 'favorites', title: 'Favorites'},
];

export default TabViewBar;
