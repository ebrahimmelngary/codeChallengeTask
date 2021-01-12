import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS, STYLES} from '../../../common';

const Spinner = ({style}: ViewStyle) => (
  <View style={[styles.container, style]}>
    <ActivityIndicator animating size="small" color={COLORS.secondary} />
  </View>
);

export default Spinner;

const styles = StyleSheet.create({
  container: {
    ...STYLES.shadow,
    backgroundColor: COLORS.witeTow,
    shadowOffset: {height: 0.5, width: 0.5},
    elevation: 3,
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'center',
    borderRadius: 17.5,
    width: 35,
    height: 35,
  },
});
