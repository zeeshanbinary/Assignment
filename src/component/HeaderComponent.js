import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors, fontVariant} from '../shared';
import {RFValue} from 'react-native-responsive-fontsize';

const HeaderComponent = ({title, image, onPress}) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: scale(12),
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={image}
            resizeMode="contain"
            style={{width: scale(20), height: verticalScale(20)}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: RFValue(18),
            color: colors.primary,
            ...fontVariant.primary,
            fontWeight: '700',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
const styles = StyleSheet.create({
  header: {
    height: verticalScale(60),
    backgroundColor: colors.white,
    justifyContent: 'center',
    elevation: 0.9,
  },
});
