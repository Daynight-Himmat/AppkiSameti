import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useTheme} from '../../hooks';
import {SPACING} from '../../styles';

export const useForgotStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer: {
        flex: 1,
      },
      subContainer: {
        flex: 1,
        paddingHorizontal: SPACING.s16,
      },
      button: {
        height: 48,
        width: '100%',
        marginTop: SPACING.s22,
        backgroundColor: colors.darkGray,
      },
      buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 16,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
