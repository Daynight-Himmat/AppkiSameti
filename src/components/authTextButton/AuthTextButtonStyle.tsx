import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {  useTheme } from '../../hooks';
import { SPACING } from '../../styles';

export const useAuthTextButtonStyle = () => {
  const { colors } = useTheme();
  
  const styles = useMemo(() => {
    return StyleSheet.create({
      signUpContainer: {
        marginTop: (SPACING.s16),
        alignItems: 'center',
        marginBottom: (SPACING.s20),
      },
      signUp: {
        textAlign: 'center',
        color: colors.gray,
      },
      signUpText: {
        color: colors.darkGray,
      },
    });
  }, [colors, ]);

  return { styles, colors };
};
