import * as React from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, ICONS} from '../../../common';
import { Trans } from '../../../i18n';
import {calcFont} from '../../../utils';
import {PressedIcon} from '../../atoms/AppIcon';
import styles from './styles';

interface SearchBoxProps {
  containerStyle?: ViewStyle;
  onPressSearch: () => void;
  isNavigateToSearch: boolean;
  onPress: () => void;
}

type Props = SearchBoxProps & TextInputProps;
const SearchBox: React.FC<Props> = ({
  containerStyle,
  onPressSearch,
  isNavigateToSearch,
  onPress,
  ...props
}: Props) => {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {isNavigateToSearch && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.ovelryViewStyle}
          />
        )}
        <TextInput
          {...props}
          placeholder={Trans('search')}
          placeholderTextColor={COLORS.serach}
          style={styles.textInputStyle}
        />
        <PressedIcon
          disabled={isNavigateToSearch}
          name={ICONS.search}
          onPress={onPressSearch}
          size={calcFont(20)}
          color={COLORS.secondary}
        />
      </View>
    </>
  );
};

export default React.memo(SearchBox);
