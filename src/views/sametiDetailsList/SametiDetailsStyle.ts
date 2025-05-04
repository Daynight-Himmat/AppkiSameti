import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useSametiDetailsStyle = () => {
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
      renderContainer: {
        borderRadius: 6,
        marginBottom: SPACING.s10,
        paddingVertical: SPACING.s6,
        paddingHorizontal: SPACING.s16,
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
      amountContainer: {
        flexDirection: 'row',
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
