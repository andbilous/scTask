import React, {useState} from 'react';
import ViewHeader from './ViewHeader';
import SubHeader from './SubHeader';
import {FlatList, StyleSheet, View} from 'react-native';
import Footer from './Footer';
import Item from './Item';

let dataToRender = [
  {
    number: '39',
    name: 'Jaden Lin',
    subtitle: 'Dr. Sam Smith',
    sex: 'Male',
    dob: '07/04/1980',
    age: 39,
    bp: '210/100',
    a1c: '9.1%',
    lastCheckup: '12 month ago',
  },
  {
    number: '25',
    name: 'Sylvia Smith',
    subtitle: 'Dr. Marshal Tiedermann',
    sex: 'Female',
    dob: '08/01/1978',
    age: 37,
    bp: '140/90',
    a1c: '8.5%',
    lastCheckup: '2 month ago',
  },
  {
    number: '37',
    name: 'Olivia Hugh',
    subtitle: 'Dr. Sam Smith',
    sex: 'Female',
    dob: '08/01/1978',
    age: 37,
    bp: '140/190',
    a1c: '7.2%',
    lastCheckup: '12 month ago',
  },
  {
    number: '44',
    name: 'Emma Jones',
    subtitle: 'Dr. Marshal Tiedermann',
    sex: 'Female',
    dob: '08/01/1978',
    age: 39,
    bp: '140/190',
    a1c: '7.4%',
    lastCheckup: '2 month ago',
  },
];

const renderItem = ({item}) => <Item item={item} />;

const keyExtractor = (item, index) => index.toString();

const PatientsList = () => {
  const [filteredItems, setFilteredItems] = useState(dataToRender);

  const handleChangeInput = text => {
    const updatedValues = dataToRender.filter(item => {
      if (
        item.name.includes(text) ||
        item.age.toString().includes(text) ||
        item.sex.includes(text) ||
        item.dob.includes(text)
      ) {
        return true;
      }
    });
    setFilteredItems(updatedValues);
  };
  return (
    <View style={styles.container}>
      <ViewHeader />
      <SubHeader handleChangeInput={handleChangeInput} />
      <FlatList
        style={styles.list}
        keyExtractor={keyExtractor}
        data={filteredItems}
        renderItem={renderItem}
        ListFooterComponent={<Footer />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    borderWidth: 0,
    marginLeft: 5,
    marginRight: 10,
  },
  container: {
    backgroundColor: 'rgba(225, 227, 229, 1)',
  },
});
export default PatientsList;
