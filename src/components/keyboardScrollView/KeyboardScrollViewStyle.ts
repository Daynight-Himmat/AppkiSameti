import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useKeyboardScrollView = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: colors.white,
        paddingHorizontal: SPACING.s16,
      },
    });
  }, [colors]);

  return styles;
};
