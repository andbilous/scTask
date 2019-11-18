import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.title}>{`${item.name},  ${item.sex}, ${item.dob} (${
        item.number
      })`}</Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
      <View style={styles.divider} />
      <View style={styles.content}>
        <View>
          <Text style={styles.contentLabel}>BP</Text>
          <Text style={styles.contentData}>{item.bp}</Text>
        </View>
        <View>
          <Text style={styles.contentLabel}>A1C</Text>
          <Text style={styles.contentData}>{item.a1c}</Text>
        </View>
        <View>
          <Text style={styles.contentLabel}>Last Checkup</Text>
          <Text style={styles.contentData}>{item.lastCheckup}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'purple',
  },
  container: {
    backgroundColor: 'rgba(225, 227, 229, 1)',
  },
  content: {
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontSize: 12,
    color: 'rgba(100, 100, 100, 0.65)',
    marginBottom: 5,
  },
  contentLabel: {
    fontSize: 10,
    color: 'rgba(100, 100, 100, 0.65)',
  },
  contentData: {
    color: 'red',
  },
  divider: {
    marginTop: 5,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  itemContainer: {
    height: 125,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 5,
    padding: 20,
  },
});

export default Item;
