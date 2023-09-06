import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../shared';
import HeaderComponent from '../../component/HeaderComponent';
import {images} from '../../assets';
import {HOME_SCREEN} from '../../route/route-label';
const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent
        title={'Search'}
        image={images.back}
        onPress={() => navigation.navigate(HOME_SCREEN)}
      />
      <Text>Search Task</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
