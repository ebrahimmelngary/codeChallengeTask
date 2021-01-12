import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  text: {
    textAlign: Platform.OS === 'ios' ? 'left' : 'auto',
  },
});

export default styles;
