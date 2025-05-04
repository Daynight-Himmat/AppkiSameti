import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useSearchBoxStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      searchContainer: {
        paddingTop: SPACING.s10,
        paddingHorizontal: SPACING.s16,
      },
      searchInput: {
        borderRadius: 4,
        backgroundColor: colors.veryLightGray,
      },
      textStyle: {
        color: colors.gray,
      },
    });
  }, [colors]);

  return {styles, colors};
};
