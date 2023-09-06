import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../../shared';
import HeaderComponent from '../../component/HeaderComponent';
import {images} from '../../assets';
import {HOME_SCREEN} from '../../route/route-label';

const Cart = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent
        title={'Cart'}
        image={images.back}
        onPress={() => navigation.navigate(HOME_SCREEN)}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
