import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const vw = widthPercentage => {
  return windowWidth * (widthPercentage / 100);
};

export const vh = heightPercentage => {
  return windowHeight * (heightPercentage / 100);
};
