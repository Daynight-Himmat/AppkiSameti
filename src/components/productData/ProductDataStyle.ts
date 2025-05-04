import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useProductDetailStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      productName: {
        fontSize: 12,
        height: 20,
        color: colors.darkGray,
      },
      productCode: {
        fontSize: 12,
        color: colors.darkGrayishBlue,
        paddingVertical: SPACING.s6,
      },
      products: {
        flex: 1,
        paddingVertical: SPACING.s10,
        paddingHorizontal: SPACING.s10,
      },
      rate: {
        flexDirection: 'row',
        paddingVertical: SPACING.s4,
      },
      rateText: {
        color: colors.darkGray,
        paddingHorizontal: SPACING.s6,
      },
      availableStock: {
        textAlign: 'center',
        color: colors.red,
      },
      stockContainer: {
        width: '100%',
        paddingVertical: SPACING.s6,
        marginVertical: SPACING.s6,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
