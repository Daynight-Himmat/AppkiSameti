import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useHomeStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer: {
        paddingHorizontal: SPACING.s16,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.s16,
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundColor,
      },
      headerText: {
        color: colors.darkGray,
        fontSize: 22,
      },
      sametiContainer: {
        padding: 16,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: colors.lightBlue,
      },
      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      title: {
        fontSize: 22,
        color: colors.darkGray,
      },
      groupMember: {
        flexDirection: 'row',
      },
      groupCounter: {
        color: colors.darkGray,
        paddingLeft: 6,
      },
      timeContainer: {
        flexDirection: 'row',
        paddingVertical: SPACING.s6,
      },
      amountText: {
        paddingTop: 3,
        color: colors.darkGray,
      },
      heading: {
        fontSize: 18,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
