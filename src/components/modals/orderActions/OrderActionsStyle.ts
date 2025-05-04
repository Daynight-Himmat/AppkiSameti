import {useMemo} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {FONTS, SCREEN_WIDTH, SPACING} from '../../../styles';
import {useKeyboard} from '../../../hooks/useKeyboard';
import {useTheme} from '../../../hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useOrderActionsStyle = () => {
  const {colors} = useTheme();
  const inset = useSafeAreaInsets();
  const {keyboardHeight} = useKeyboard();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: SCREEN_WIDTH,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: 28,
        backgroundColor: colors.white,
        paddingVertical: SPACING.s16,
        marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      },
      heading: {
        fontSize: 18,
      },
      itemText: {
        fontSize: 14,
        fontFamily: FONTS.medium,
      },
      topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: SPACING.s10,
        justifyContent: 'space-between',
      },
      flatList: {
        paddingBottom: inset.bottom,
        paddingVertical: SPACING.s10,
      },
    });
  }, [colors.white, inset, keyboardHeight]);

  return {styles, colors};
};
