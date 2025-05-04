import {useMemo} from 'react';
import {useTheme} from '../../hooks';
import {StyleSheet} from 'react-native';
import {FONTS, SPACING} from '../../styles';

export const useUserSametiDataStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer: {
        flex: 1,
        paddingHorizontal: SPACING.s16,
      },
      dataContainer: {
        borderRadius: 6,
        marginVertical: SPACING.s6,
        backgroundColor: colors.veryLightGray,
      },
      amountContainer: {
        paddingHorizontal: SPACING.s16,
      },
      title: {
        fontSize: 14,
      },
      amountType: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: SPACING.s16,
      },
      caseButton: {
        width: '45%',
        borderWidth: 2,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderColor: colors.darkGray,
        backgroundColor: colors.darkGray,
        marginHorizontal: SPACING.s3,
      },
      buttonText: {
        color: colors.white,
        lineHeight: 14,
      },
      buttonView: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      caseStructureContainer: {
        padding: 4,
        borderWidth: 2,
        borderRadius: 6,
        marginTop: SPACING.s16,
        paddingBottom: SPACING.s16,
      },
      caseStructureTitle: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: SPACING.s16,
        marginBottom: SPACING.s6,
      },
      checkContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: SPACING.s1,
        paddingVertical: SPACING.s1,
      },
      checkBox: {
        width: '25%',
        textAlign: 'center',
        marginLeft: SPACING.s16,
      },
      checkBoxText: {
        width: '70%',
        borderRadius: 6,
        alignSelf: 'center',
      },
      checkTextStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: FONTS.semiBold,
      },
      labelInputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SPACING.s3,
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
        marginTop: SPACING.s16,
      },
      renderButton: {
        marginHorizontal: SPACING.s16,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
