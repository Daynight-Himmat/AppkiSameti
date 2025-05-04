import {useMemo} from 'react';
import {useTheme} from '../../hooks';
import {StyleSheet} from 'react-native';
import {SPACING} from '../../styles';

export const useSametiListStyle = () => {
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
      listContainer: {
        padding: 6,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SPACING.s6,
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.s16,
        backgroundColor: colors.veryLightGray,
      },
      title: {
        fontSize: 18,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
