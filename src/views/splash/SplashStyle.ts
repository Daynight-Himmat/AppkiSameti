import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useTheme} from '../../hooks';
import {SPACING} from '../../styles';

export const useSplashStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.s10,
        paddingHorizontal: SPACING.s16,
      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      appName: {
        fontSize: 28,
        color: colors.black,
        paddingVertical: SPACING.s10,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
