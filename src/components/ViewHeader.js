import React from 'react';
import {Header, Image} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const MenuIcon = () => (
  <Image
    style={styles.menuIcon}
    source={{uri: '/Users/andbilous/Documents/RnTask/src/assets/menu.png'}}
  />
);

const ViewHeader = () => {
  return (
    <Header
      leftComponent={<MenuIcon />}
      placement={'left'}
      containerStyle={styles.headerContainer}
      centerComponent={{
        text: 'Patient Care Opportunities',
        style: styles.title,
      }}
      backgroundColor="#4b266e"
    />
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    width: 20,
    height: 20,
  },
  headerContainer: {
    justifyContent: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: 19,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});
export default ViewHeader;
