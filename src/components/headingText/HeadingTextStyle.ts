import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, SHADOW, SPACING} from '../../styles';
import {useTheme, useResponsiveScreen} from '../../hooks';

interface Props {
  paddingHorizontal?: number;
}

export const useHeadingTextStyle = ({paddingHorizontal}: Props) => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        paddingTop: SPACING.s6,
        paddingBottom: SPACING.s4,
        paddingHorizontal: paddingHorizontal || SPACING.none,
      },
      label: {
        fontSize: 16,
        ...SHADOW.shadow3,
        color: colors.gray,
        fontFamily: FONTS.semiBold,
      },
    });
  }, [colors, paddingHorizontal]);

  return {styles, colors};
};
