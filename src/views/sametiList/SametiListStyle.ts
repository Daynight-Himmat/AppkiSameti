import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { StyleSheet } from 'react-native';
import { SPACING } from '../../styles';

export const useSametiListStyle = () => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer: {
        flex: 1,
        paddingHorizontal: wp(SPACING.s16),
      },
      listContainer:{
        padding: 6,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(SPACING.s6),
        justifyContent: 'space-between',
        paddingHorizontal: wp(SPACING.s16),
        backgroundColor: colors.veryLightGray,
      },
      title: {
        fontSize: 18,
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
