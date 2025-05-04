import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useTextInputControllerStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      labelText: {
        color: colors.darkGrayishBlue,
      },
      inputControlContainer: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        marginVertical: SPACING.s2,
        borderColor: colors.grayishBlue,
      },
      inputText: {
        color: colors.black,
      },
    });
  }, [colors]);

  return {styles, colors};
};
