import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useShareLoanStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer: {
        flex: 1,
        paddingHorizontal: SPACING.s16,
      },
      userContainer: {
        padding: 6,
        borderRadius: 6,
        marginVertical: SPACING.s6,
        backgroundColor: colors.veryLightGray,
        paddingHorizontal: SPACING.s16,
      },
      renderButton: {
        marginHorizontal: SPACING.s16,
      },
      heading: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: SPACING.s6,
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
        marginVertical: SPACING.s6,
        backgroundColor: colors.veryLightGray,
        paddingHorizontal: SPACING.s16,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
