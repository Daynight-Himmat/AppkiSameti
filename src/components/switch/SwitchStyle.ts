import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useSwitchStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      rightMessage: {
        fontSize: 12,
        color: colors.gray,
        paddingRight: SPACING.s10,
      },
      leftMessage: {
        fontSize: 12,
        color: colors.gray,
        paddingLeft: SPACING.s10,
      },
      switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SPACING.s10,
      },
      errorText: {
        color: colors.toastError,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
