import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, SHADOW, SPACING} from '../../styles';
import {useTheme} from '../../hooks';

export const useCounterStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      counterContainer: {
        width: 80,
        height: 25,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.grayishBlue,
      },
      counterText: {
        height: 25,
        color: colors.gray,
        textAlign: 'center',
        fontFamily: FONTS.semiBold,
        paddingLeft: SPACING.none,
        paddingRight: SPACING.none,
      },
      counterStyle: {
        width: 40,
        ...SHADOW.noShadow,
        backgroundColor: colors?.grayishBlue,
      },
      counterButton: {
        width: '32%',
        height: '100%',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
