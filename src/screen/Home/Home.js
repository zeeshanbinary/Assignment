import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../shared';
import {WebView} from 'react-native-webview';

const Home = () => {
  const [shouldReload, setShouldReload] = useState(true);
  const handleNavigationStateChange = navState => {
    if (navState.url === 'https://in.linkedin.com/' && shouldReload) {
      setShouldReload(false);
    }
  };
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://in.linkedin.com/'}}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
