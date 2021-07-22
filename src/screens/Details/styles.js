import {StyleSheet} from 'react-native';
import Color from '../../Color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.whitesmoke,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 20,
  },
  containerPrice: {
    backgroundColor: Color.yellow,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    height: 300,
    width: 300,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 12,
  },
  description: {
    fontSize: 17,
    marginBottom: 20,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
