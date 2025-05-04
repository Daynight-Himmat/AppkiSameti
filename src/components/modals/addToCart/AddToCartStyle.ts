import {useMemo} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {useKeyboard} from '../../../hooks/useKeyboard';
import {useTheme} from '../../../hooks';
import {FONTS, SCREEN_WIDTH, SPACING} from '../../../styles';

export const useAddToCartSchemeStyle = () => {
  const {keyboardHeight} = useKeyboard();

  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: SCREEN_WIDTH,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: 28,
        backgroundColor: colors.white,
        paddingBottom: SPACING.s20,
        paddingVertical: SPACING.s16,
        marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      },
      subContainer: {
        paddingVertical: SPACING.s6,
      },
      labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: SPACING.s16,
        justifyContent: 'space-between',
      },
      label: {
        fontSize: 20,
        color: colors?.gray,
      },
      title: {
        fontSize: 14,
        paddingLeft: 6,
        color: colors.gray,
      },
      flatList: {
        flexShrink: 1,
        paddingBottom: SPACING.s16,
      },
      selectAllText: {
        color: colors.darkGray,
        paddingRight: SPACING.s6,
      },
      selectAll: {
        height: 25,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING.s10,
      },
      footView: {
        paddingBottom: SPACING.s16,
      },
      cartButton: {
        width: '80%',
        paddingVertical: SPACING.s6,
        marginVertical: SPACING.s6,
        backgroundColor: colors?.green,
      },
      cartContainer: {
        width: '50%',
        alignItems: 'center',
      },
      cartButtonLabel: {
        fontSize: 14,
        fontFamily: FONTS.medium,
      },
      priceContainer: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      priceView: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingLeft: SPACING.s6,
      },
      discountPrice: {
        fontSize: 12,
        color: colors.gray,
        textDecorationLine: 'line-through',
      },
    });
  }, [colors, keyboardHeight]);

  return {styles, colors};
};
