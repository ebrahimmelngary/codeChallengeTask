import * as React from 'react';
import { Text, View,  } from 'react-native';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default React.memo(Home);


