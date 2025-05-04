import {useMemo} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SPACING} from '../../../styles';
import {useKeyboard} from '../../../hooks/useKeyboard';
import {useTheme} from '../../../hooks';

export const useAvailableStoreInfoStyle = () => {
  const {keyboardHeight} = useKeyboard();

  const {colors} = useTheme();
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
      subContainer: {
        paddingVertical: SPACING.s6,
      },
      labelContainer: {
        flexDirection: 'row',
        paddingBottom: SPACING.s16,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      label: {
        fontSize: 20,
        color: colors?.gray,
      },
      title: {
        fontSize: 14,
      },
      flatList: {
        flexShrink: 1,
        paddingBottom: SPACING.s16,
      },
    });
  }, [colors, keyboardHeight]);

  return {styles, colors};
};
