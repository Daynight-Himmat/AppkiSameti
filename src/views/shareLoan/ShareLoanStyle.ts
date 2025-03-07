import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useResponsiveScreen, useTheme} from '../../hooks';

export const useShareLoanStyle = () => {
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
      shareLoanContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        justifyContent: 'space-between',
      },
      shareLoan: {
        height: 'auto',
        maxHeight: '50%',
        padding: 6,
        borderRadius: 6,
        marginVertical: hp(SPACING.s6),
        backgroundColor: colors.veryLightGray,
        paddingHorizontal: wp(SPACING.s16),
      },
    });
  }, [colors, wp, hp]);

  return {
    styles,
    colors,
  };
};
