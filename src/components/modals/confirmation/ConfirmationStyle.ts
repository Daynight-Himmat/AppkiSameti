import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {SCREEN_WIDTH, SPACING} from '../../../styles';
import {useTheme} from '../../../hooks';
import {useKeyboard} from '../../../hooks/useKeyboard';

export const useConfirmationStyle = () => {
  const {colors} = useTheme();

  const {keyboardHeight} = useKeyboard();
  const styles = useMemo(() => {
    return StyleSheet.create({
      modalView: {
        alignItems: 'center',
        borderRadius: 26,
        paddingHorizontal: 22,
        width: SCREEN_WIDTH - 44,
        backgroundColor: colors.white,
        paddingVertical: SPACING.s16,
        marginBottom: keyboardHeight / 2,
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      bodyText: {
        fontSize: 24,
        color: colors?.red,
        textAlign: 'center',
      },
      bodySubTitle: {
        lineHeight: 18,
        textAlign: 'center',
        color: colors?.gray,
        marginTop: SPACING.s16,
        fontSize: SPACING.s16,
      },
    });
  }, [colors, keyboardHeight]);

  return {styles};
};
