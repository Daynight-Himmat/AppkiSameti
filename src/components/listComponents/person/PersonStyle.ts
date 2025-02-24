import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SPACING } from '../../../styles';
import { useResponsiveScreen, useTheme } from '../../../hooks';

export const usePersonStyle = () => {
  const { colors } = useTheme();
  const { wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
        personIcon: {
          height: 50,
          width: 50,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent:'center',
          marginLeft: wp(SPACING.s10),
          backgroundColor: colors.gray,
        },
        title: {
          fontSize: 14,
        },
        rightIcon: {
          paddingRight: wp(SPACING.s10),
        },
    });
  }, [colors, wp]);

  return {
    styles,
    colors,
  };
};
