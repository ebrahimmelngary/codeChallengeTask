import {StyleSheet} from 'react-native';
import {FONTS} from '../../../common';
import {calcFont, calcHeight, calcWidth} from '../../../utils';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  itemCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: calcWidth(16),
    marginBottom: calcHeight(20),
  },
  itemCardImage: {
    height: calcHeight(86),
    width: calcWidth(70),
    borderRadius: calcWidth(5),
    marginRight: calcWidth(25),
  },
  itemCardNamePriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCardNameText: {
    ...FONTS.bold,
    fontSize: calcFont(15),
    maxWidth: '75%',
  },
  itemCardDetailsText: {
    ...FONTS.light,
    fontSize: calcFont(12),
    width: calcWidth(88),
  },
  itemCardPriceText: {
    ...FONTS.light,
    fontSize: calcFont(12),
  },
  itemCardDetailsContainer: {
    flex: 1,
  },
  listStyle: {
    flexGrow: 1,
    marginTop: calcHeight(40),
  },
});
