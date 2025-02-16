import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { StyleSheet } from 'react-native';
import { SPACING } from '../../styles';
import CheckBox from '../../components/checkBox/CheckBox';

export const useUserSametiDataStyle = () => {
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
        dataContainer: {
          borderRadius: 6,
          marginTop: hp(SPACING.s6),
          backgroundColor: colors.veryLightGray,
        },
        amountContainer: {
          paddingHorizontal: wp(SPACING.s16),
        },
        title: {
          fontSize: 14,
        },
        amountType: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        caseButton:{
          borderWidth: 2,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: wp(16),
          borderColor: colors.darkGray,
          backgroundColor: colors.darkGray,
          marginHorizontal: wp(SPACING.s3),
        },
        buttonText: {
          color: colors.white,
        },
        buttonView: {
          flexDirection: 'row',
        },
        caseStructureContainer : {
          padding: 4,
          borderWidth: 2,
          borderRadius: 6,
          marginTop: hp(SPACING.s16),
        },
        caseStructureTitle: {
          textAlign: 'center',
          marginVertical: hp(SPACING.s16),

        },
        checkContainer:{
          flexDirection: 'row',
          marginVertical: wp(SPACING.s6),
        },
        checkBox: {
          width: 'auto',
          marginLeft: wp(SPACING.s16),
        },
        checkBoxText: {
          width: '50%',
          marginLeft: wp(SPACING.s16),
          borderRadius: 6,
        },
    });
  }, [colors, wp, hp]);

  return {
    styles,
    colors,
  };
};
