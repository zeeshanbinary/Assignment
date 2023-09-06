import React, {useEffect} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import {borderRadii, colors, fontVariant} from '../../shared';
import {MAIN_TAB} from '../../route/route-label';
import {RFValue} from 'react-native-responsive-fontsize';
import {images} from '../../assets';
import {scale, verticalScale} from 'react-native-size-matters';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(MAIN_TAB);
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.greenChair}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.imageBox}>
          <Text style={styles.title}>Splash Screen</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    backgroundColor: colors.primary,
    width: scale(200),
    height: verticalScale(200),
    borderRadius: borderRadii.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(22),
    color: colors.white,
    ...fontVariant.primary,
    textTransform: 'capitalize',
    letterSpacing: 0.3,
  },
});
