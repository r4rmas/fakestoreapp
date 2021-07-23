import Color from '../../Color';
import {transition} from './transitions';

const styles = {
  navigator: {
    headerStyle: {
      backgroundColor: Color.darkGray,
      shadowColor: Color.darkGray,
      shadowOpacity: 0,
    },
    headerTintColor: Color.whitesmoke,
    transitionSpec: {
      open: transition,
      close: transition,
    },
  },
  home: {title: 'Home', headerShown: false},
  details: {title: 'Details'},
};

export default styles;
