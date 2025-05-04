import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, SPACING} from '../../styles';
import {useTheme} from '../../hooks';

interface props {
  borderRadius?: number;
  backgroundColor?: string | undefined;
}

export const useAppButtonStyle = ({backgroundColor, borderRadius}: props) => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      button: {
        width: 200,
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: SPACING.s12,
        backgroundColor: backgroundColor || colors.primary,
      },
      label: {
        fontSize: 16,
        color: colors.white,
      },
      buttonStyle: {
        height: 48,
        width: '100%',
        fontSize: 16,
        fontFamily: FONTS.medium,
        backgroundColor: colors.darkGray,
        borderRadius: borderRadius || 6,
      },
      buttonContainer: {
        paddingVertical: SPACING.s16,
      },
      buttonText: {
        fontFamily: FONTS.medium,
      },
      iconSpace: {
        paddingRight: SPACING.s6,
      },
      cartButton: {
        width: '100%',
        height: 35,
        maxHeight: 40,
        backgroundColor: colors?.green,
        marginVertical: SPACING.s6,
        paddingVertical: SPACING.s6,
      },
      cartContainer: {
        paddingHorizontal: SPACING.s6,
      },
      cartButtonLabel: {
        fontSize: 14,
        fontFamily: FONTS.medium,
      },
    });
  }, [backgroundColor, colors, borderRadius]);

  return {styles, colors};
};
