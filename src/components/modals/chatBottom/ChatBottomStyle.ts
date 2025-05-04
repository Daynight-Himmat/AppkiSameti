import {useMemo} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {useKeyboard} from '../../../hooks/useKeyboard';
import {useTheme} from '../../../hooks';
import {FONTS, SCREEN_WIDTH, SPACING} from '../../../styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useChatBottomStyle = () => {
  const {colors} = useTheme();
  const inset = useSafeAreaInsets();
  const {keyboardHeight} = useKeyboard();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: 28,
        backgroundColor: colors.white,
        paddingVertical: SPACING.s16,
        marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      },
      subContainer: {
        justifyContent: 'center',
      },
      inputContainer: {
        marginVertical: SPACING.s20,
      },
      input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: SPACING.s16,
        borderColor: colors.grayishBlue,
      },
      flatList: {
        paddingBottom: SPACING.s40,
      },
      containerDrop: {
        height: 150,
      },
      button: {
        justifyContent: 'flex-start',
      },
      labelContainer: {
        marginBottom: SPACING.s16,
      },
      label: {
        fontSize: 20,
        color: colors.black,
      },
      footer: {
        paddingVertical: SPACING.s10,
        paddingBottom: inset.bottom,
      },
      labelTextStyle: {
        color: colors.darkGray,
        fontFamily: FONTS.semiBold,
      },
      chatText: {
        height: 'auto',
        minHeight: 48,
        maxHeight: 100,
        color: colors.gray,
      },
    });
  }, [colors, inset, keyboardHeight]);

  return {styles, colors};
};
