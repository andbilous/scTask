import React from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const handleFilterClick = () => {
  Alert.alert('Filter');
};
const SlidersIcon = () => (
  <TouchableHighlight onPress={handleFilterClick}>
    <View style={styles.slidersContainer}>
      <Image
        style={styles.slidersIcon}
        source={{
          uri: '/Users/andbilous/Documents/RnTask/src/assets/sliders.png',
        }}
      />
    </View>
  </TouchableHighlight>
);

const SearchIcon = () => (
  <Image
    style={styles.searchIcon}
    source={{uri: '/Users/andbilous/Documents/RnTask/src/assets/search.png'}}
  />
);

const SubHeader = ({handleChangeInput}) => {
  return (
    <View style={styles.subHeader}>
      <SearchIcon />
      <TextInput
        onChangeText={handleChangeInput}
        placeholder={'Search'}
        style={styles.searchInputStyle}
      />
      <SlidersIcon />
    </View>
  );
};
const styles = StyleSheet.create({
  subHeader: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingRight: 14,
  },
  slidersContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 12,
    marginRight: 4,
  },
  slidersIcon: {
    width: 25,
    height: 25,
  },
  searchBar: {
    width: '75%',
    height: 50,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  searchInputStyle: {
    width: '80%',
    borderRadius: 50,
    height: 50,
    backgroundColor: 'rgba(205, 157, 221, 1)',
    paddingLeft: 40,
    marginLeft: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 21,
    zIndex: 1,
    left: 25,
  },
});
export default SubHeader;
