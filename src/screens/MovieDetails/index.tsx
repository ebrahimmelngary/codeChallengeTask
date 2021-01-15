import * as React from 'react';
import {ImageBackground, View} from 'react-native';
import { COLORS, ICONS } from '../../common';
import {  PressedIcon } from '../../components/atom/AppIcon';
import AppText from '../../components/atom/AppText';
import {IMAGE_URL} from '../../services';
import styles from './styles';

interface FavoriteProps {}

const Favorite = ({route}: FavoriteProps) => {
  const {item} = route?.params;
  console.log('id', item);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        resizeMode={'contain'}
        source={{uri: `${IMAGE_URL}${item.poster_path}`}}
      />
      <PressedIcon onPress={()=>{}} name={ICONS.heart} style={styles.icon} size={30} color={COLORS.red}/>
      <AppText style={styles.nameText}>{item.title}</AppText>
      <AppText style={styles.detailsText}>{item.overview}</AppText>

    </View>
  );
};

export default React.memo(Favorite);
