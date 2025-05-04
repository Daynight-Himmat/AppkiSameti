import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {SPACING} from '../../../styles';
import {useTheme} from '../../../hooks';

export const usePersonStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      personIcon: {
        height: 50,
        width: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SPACING.s10,
        backgroundColor: colors.gray,
      },
      title: {
        fontSize: 14,
      },
      rightIcon: {
        paddingRight: SPACING.s10,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
