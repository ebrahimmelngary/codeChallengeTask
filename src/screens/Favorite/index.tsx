import * as React from 'react';
import { Text, View,  } from 'react-native';

interface MovieDetailsProps {}

const MovieDetails = ({}: MovieDetailsProps) => {
  return (
    <View style={styles.container}>
      <Text>MovieDetails</Text>
    </View>
  );
};

export default React.memo(MovieDetails);


