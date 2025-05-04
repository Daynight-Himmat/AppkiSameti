import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

interface props {
  size?: number;
  isSelect?: boolean;
  type?: 'check' | 'radio' | 'address' | 'none' | undefined;
}

export const useListItemStyle = ({size, isSelect}: props) => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      list: {
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: SPACING.s8,
        paddingBottom: SPACING.s6,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        borderBottomColor: colors.grayishBlue,
      },
      itemContainer: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: SPACING.s6,
      },
      itemIconContainer: {
        borderWidth: 2,
        borderRadius: 100,
        width: size || 24,
        height: size || 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.gray,
        padding: (size || 24) / 8,
      },
      iconSubContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: colors.gray,
      },
      iconContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: SPACING.s10,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      itemText: {
        width: '95%',
        fontSize: 18,
        fontWeight: '500',
        color: colors.gray,
        paddingRight: SPACING.s20,
        paddingHorizontal: SPACING.s10,
      },
      titleContainer: {
        width: '100%',
      },
      checkContainer: {
        borderWidth: 2,
        borderRadius: 2,
        width: size || 16,
        height: size || 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.green,
        backgroundColor: isSelect ? colors.green : colors.white,
      },
      listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.s1,
        paddingVertical: SPACING.s6,
        borderColor: colors.grayishBlue,
      },
      leftContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING.s6,
      },
      title: {
        alignItems: 'center',
        color: colors.darkGray,
        justifyContent: 'center',
      },
      subTitle: {
        color: colors.gray,
        paddingVertical: SPACING.s4,
      },
      rightContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING.s6,
      },
      viewContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: SPACING.s6,
      },
    });
  }, [colors, isSelect, size]);

  return {styles, colors};
};
