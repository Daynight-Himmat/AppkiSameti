import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks';

export const usePersonStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
        personIcon: {
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: colors.gray,
            borderRadius: 30,
        },
        title: {
            fontSize: 14,
        },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
