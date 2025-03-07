import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useResponsiveScreen, useTheme} from '../../hooks';

export const useSametiDetailsStyle = () => {
  const {colors} = useTheme();
  const {wp, hp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer: {
        flex: 1,
        paddingHorizontal: wp(SPACING.s16),
      },
      renderContainer: {
        borderRadius: 6,
        marginBottom: hp(SPACING.s10),
        paddingVertical: wp(SPACING.s6),
        paddingHorizontal: wp(SPACING.s16),
        backgroundColor: colors.veryLightGray,
      },
      person: {
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGrayishBlue,
      },
      userContainer: {
        padding: 6,
        borderRadius: 6,
        marginVertical: hp(SPACING.s6),
        backgroundColor: colors.veryLightGray,
        paddingHorizontal: wp(SPACING.s16),
      },
      renderButton: {
        marginHorizontal: wp(SPACING.s16),
      },
      heading: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: hp(SPACING.s6),
      },
      amountContainer: {
        flexDirection: 'row',
      },
    });
  }, [colors, wp, hp]);

  return {
    styles,
    colors,
  };
};
