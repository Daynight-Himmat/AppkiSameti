import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useErrorMessageStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      error: {
        textAlign: 'left',
        paddingTop: SPACING.s4,
        alignSelf: 'flex-start',
        color: colors.toastError,
      },
    });
  }, [colors]);

  return {
    styles,
  };
};
