import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks';

export const useTabsStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      toggleButton: {
        height: 60,
        padding: 2,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: colors.lightBlue,
      },
       toggleSwitch: {
        height: 56,
        width: '50%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGray,
      },
      toggleText: {
        fontSize: 18,
        color: colors.white,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
