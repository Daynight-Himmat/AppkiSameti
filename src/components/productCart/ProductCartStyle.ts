import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SPACING} from '../../styles';
import {useTheme} from '../../hooks';

export const useProductCartStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      labelText: {
        color: colors.gray,
      },
      returnedProduct: {
        color: colors?.red,
      },
      renderRadioItem: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: SPACING.s10,
        paddingHorizontal: SPACING.s16,
      },
    });
  }, [colors]);

  return {
    styles,
    SCREEN_WIDTH,
  };
};
