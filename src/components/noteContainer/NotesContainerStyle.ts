import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useNoteContainerStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      renderHeader: {
        borderRadius: 6,
        marginVertical: SPACING.s8,
        paddingVertical: SPACING.s8,
        paddingHorizontal: SPACING.s16,
        backgroundColor: colors.lightGrayishLimeGreen,
      },
      headerText: {
        fontSize: 12,
        color: colors.veryDarkLimeGreen,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
