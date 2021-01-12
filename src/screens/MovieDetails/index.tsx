import * as React from 'react';
import { Text, View,  } from 'react-native';

interface FavoriteProps {}

const Favorite = ({}: FavoriteProps) => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
};

export default React.memo(Favorite);


