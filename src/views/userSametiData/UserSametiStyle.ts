import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { StyleSheet } from 'react-native';
import { FONTS, SPACING } from '../../styles';

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
          marginVertical: hp(SPACING.s6),
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
          paddingTop: hp(SPACING.s16),
        },
        caseButton:{
          width: '45%',
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
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        caseStructureContainer : {
          padding: 4,
          borderWidth: 2,
          borderRadius: 6,
          marginTop: hp(SPACING.s16),
          paddingBottom: hp(SPACING.s16),
        },
        caseStructureTitle: {
          textAlign: 'center',
          fontSize: 18,
          marginTop: hp(SPACING.s16),
          marginBottom: hp(SPACING.s6),

        },
        checkContainer:{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: wp(SPACING.s1),
          paddingVertical: hp(SPACING.s1),
        },
        checkBox: {
          width: '25%',
          textAlign: 'center',
          marginLeft: wp(SPACING.s16),
        },
        checkBoxText: {
          width: '70%',
          borderRadius: 6,
          alignSelf: 'center',
        },
        checkTextStyle:{
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: FONTS.semiBold,
        },
        labelInputContainer: {
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: hp(SPACING.s3),
        },
        lableInput: {
          width: '100%',
        },
        inputContainer: {
          width: '70%',
          borderRadius: 6,
          alignSelf: 'flex-end',
        },
        totalAmountContainer: {
          marginTop: wp(SPACING.s16),
        },
    });
  }, [colors, wp, hp]);

  return {
    styles,
    colors,
  };
};
