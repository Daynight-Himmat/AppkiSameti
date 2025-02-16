import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SPACING } from '../../../../styles';
import { useResponsiveScreen, useTheme } from '../../../../hooks';

export const useSametiContainer = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
        sametiContainer : {
            padding: 16,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: colors.lightBlue,
        },
        titleContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        title: {
            fontSize: 22,
            color: colors.darkGray,
        },
        groupMember: {
            flexDirection: 'row',
        },
        groupCounter: {
            color: colors.darkGray,
            paddingLeft: wp(6),
        },
        timeContainer: {
            flexDirection: 'row',
            paddingVertical: hp(SPACING.s6),
        },
        amountText: {
            paddingTop: hp(3),
            color: colors.darkGray,
        },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
