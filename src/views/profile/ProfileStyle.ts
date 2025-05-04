import {useMemo} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {useTheme} from '../../hooks';
import {FONTS, SCREEN_HEIGHT, SHADOW, SPACING} from '../../styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useProfileStyle = () => {
  const {colors} = useTheme();
  const inset = useSafeAreaInsets();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      profileSubContainer: {
        alignItems: 'center',
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
      },
      logInText: {
        color: colors.green,
      },
      logoSubContainer: {
        justifyContent: 'center',
      },
      logInButton: {
        height: 40,
        width: '80%',
        borderWidth: 2,
        borderRadius: 26,
        borderColor: colors.green,
        marginBottom: SPACING.s16,
      },
      buttonContainer: {
        height: 40,
        width: '80%',
        borderRadius: 26,
        marginBottom: SPACING.s16,
      },
      messageContainer: {
        marginBottom: SPACING.s30,
        paddingVertical: SPACING.s20,
      },
      welcome: {
        fontSize: 24,
        color: colors.gray,
        textAlign: 'center',
      },
      message: {
        fontSize: 14,
        paddingTop: 6,
        color: colors.gray,
        textAlign: 'center',
      },
      logoContainer: {
        width: 100,
        height: 100,
        ...SHADOW.shadow3,
        borderRadius: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING?.s16,
        backgroundColor: colors?.green,
      },
      appName: {
        fontSize: 24,
        alignSelf: 'center',
        color: colors?.green,
        marginTop: SPACING.s16,
      },
      subContainer: {
        flex: 1,
        marginTop: SPACING.s16,
        paddingHorizontal: SPACING.s16,
      },
      profile: {
        borderBottomWidth: 2,
        backgroundColor: colors.white,
        paddingBottom: SPACING.s10,
        borderBottomColor: colors.grayishBlue,
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.s16,
        borderBottomColor: colors.grayishBlue,
        paddingTop: Platform.OS === 'ios' ? inset.top : SPACING.s10,
      },
      personIcon: {
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.grayishBlue,
      },
      nameContainer: {
        marginLeft: SPACING.s10,
      },
      name: {
        fontSize: 18,
        color: colors.black,
      },
      email: {
        color: colors.gray,
      },
      listContainer: {
        height: 48,
      },
      subTitle: {
        fontSize: 14,
        fontFamily: FONTS.medium,
      },
    });
  }, [colors, inset]);

  return {
    styles,
    colors,
  };
};
