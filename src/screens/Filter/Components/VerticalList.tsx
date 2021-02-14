import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ICONS} from '../../../common';
import {PressedIcon} from '../../../components/atom/AppIcon';
import AppText from '../../../components/atom/AppText';
import {calcHeight, calcWidth} from '../../../utils';

const data = [
  {id: 0, name: 'apple', count: 100},
  {id: 1, name: 'acer', count: 110},
  {id: 2, name: 'hp', count: 40},
  {id: 3, name: 'dell', count: 30},
  {id: 4, name: 'lenovo', count: 60},
];
const Card = ({item, selected, onPress}) => {
  return (
    <View style={styles.cardContainer}>
      <PressedIcon
        onPress={onPress}
        name={selected ? ICONS.checkboxMarked : ICONS.checkBox}
      />
      <AppText style={styles.text}>{`${item.name} (${item.count})`}</AppText>
    </View>
  );
};

const VerticalList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: calcWidth(15),
    height: calcHeight(40),
  },
  text: {
    marginLeft: calcWidth(10),
  },
});
