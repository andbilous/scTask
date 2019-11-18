import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';

const HomeIcon = () => (
  <View style={styles.container}>
    <View style={styles.homeIconContainer}>
      <Image
        containerStyle={styles.icon}
        source={{
          uri: '/Users/andbilous/Documents/RnTask/src/assets/home.png',
        }}
      />
      <Text>Home</Text>
    </View>
  </View>
);

const Footer = () => {
  return (
    <>
      <HomeIcon />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  homeIconContainer: {
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
export default Footer;
