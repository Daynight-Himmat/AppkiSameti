import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useLabelStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      labelContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: SPACING.s3,
        justifyContent: 'space-between',
      },
      key: {
        color: colors.gray,
      },
      labelText: {
        flex: 1,
        color: colors.gray,
      },
      priceKey: {
        flex: 1,
        fontSize: 12,
        color: colors.gray,
      },
      valueKey: {
        flex: 1,
        fontSize: 12,
        color: colors.gray,
      },
      labelPriceContainer: {
        flex: 1,
      },
      discountPrice: {
        fontSize: 12,
        color: colors.gray,
        textDecorationLine: 'line-through',
      },
      spaceText: {
        flex: 1,
        fontSize: 12,
        color: colors.white,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
