import * as React from 'react';
import {FlatList, View, TouchableOpacity, Image} from 'react-native';
import {IMAGES} from '../../../common';
import {Trans} from '../../../i18n';
import navigateToScreen from '../../../navigation/Navigator';
import AppText from '../../atoms/AppText';
import styles from './styles';

interface ItemCardProps {
  item: {
    name: String;
    image: String;
    price: Number;
    details: String;
  };
  onPress: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({item, onPress}: ItemCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemCardContainer}
      onPress={onPress}>
      <Image
        source={{uri: item.image} || IMAGES.topLogo}
        style={styles.itemCardImage}
        resizeMode={'contain'}
      />
      <View style={styles.itemCardDetailsContainer}>
        <View style={styles.itemCardNamePriceContainer}>
          <AppText numberOfLines={1} style={styles.itemCardNameText}>
            {item.name}
          </AppText>
          <AppText style={styles.itemCardPriceText}>{`${
            item.price
          }${' '}${Trans('egp')}`}</AppText>
        </View>
        <AppText numberOfLines={1} style={styles.itemCardDetailsText}>
          {item.details}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};
interface ItemsListProps {
  data: [];
}

const ItemsList: React.FC<ItemsListProps> = ({data}: ItemsListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.listStyle}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        renderItem={({item}) => (
          <ItemCard
            item={item}
            onPress={() =>
              navigateToScreen({
                name: 'ItemDetails',
                params: {id: item.id},
              })
            }
          />
        )}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default React.memo(ItemsList);
