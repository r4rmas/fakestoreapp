import {StyleSheet} from 'react-native';
import Color from '../../Color';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Color.lightGray,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  subcontainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    width: 250,
  },
  image: {
    height: 40,
    marginHorizontal: 16,
    width: 40,
  },
  favoriteIcon: {
    fontSize: 24,
  },
});

export default styles;
