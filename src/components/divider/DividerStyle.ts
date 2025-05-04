import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useDividerStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        height: 1,
        marginVertical: SPACING.s6,
      },
    });
  }, []);

  return {
    styles,
    colors,
  };
};
