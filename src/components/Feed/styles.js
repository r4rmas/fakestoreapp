import {StyleSheet} from 'react-native';
import Color from '../../Color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.white,
    elevation: 10,
    margin: 20,
    marginBottom: 0,
    padding: 30,
    shadowColor: Color.lightGray,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1.0,
  },
  containerPrice: {
    backgroundColor: Color.yellow,
  },
  favoriteIcon: {
    fontSize: 26,
    marginTop: 20,
    marginBottom: -10,
  },
  image: {
    height: 300,
    marginTop: 20,
    width: 300,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  details: {
    fontSize: 18,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default styles;
