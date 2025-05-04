import {ReactNode, useMemo} from 'react';
import {DEFAULT_COLORS} from '../../styles';
import {useTheme} from '../../hooks';
import {SCREEN_WIDTH, SHADOW, SPACING} from '../../styles';
import {PressableStateCallbackType, StyleSheet} from 'react-native';

interface props {
  leftIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  rightIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  type?: any;
  editable?: boolean;
}

export const useAppTextInputStyle = ({
  leftIcon,
  type,
  editable = true,
}: props) => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        ...SHADOW.shadow1,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: !editable ? 0.5 : 1,
        backgroundColor: DEFAULT_COLORS.white,
      },
      margin: {
        marginBottom: SPACING.s4,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      rightIcon: {
        position: 'absolute',
        right: SPACING.s20,
      },
      label: {
        color: colors.primary,
        marginBottom: SPACING.s3,
        alignSelf: 'flex-start',
        marginTop: SPACING.s10,
      },
      required: {
        color: colors.red,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.toastError,
      },
      textInputStyles: {
        padding: 0,
        height: 48,
        width: '100%',
        color: colors.primary,
        paddingLeft: leftIcon ? SPACING.s45 : 16,
        paddingRight: type === 'password' ? 50 : 16,
      },
      prefixTextStyles: {
        marginEnd: 4,
        color: colors.black,
        alignSelf: 'center',
        textAlignVertical: 'center',
      },
      prefixContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      inputLabelContainer: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      compulsory: {
        color: DEFAULT_COLORS.blue,
      },
      leftIcon: {
        position: 'absolute',
        left: SPACING.s14,
      },
      floatingLabel: {
        position: 'absolute',
        top: -10,
        left: SPACING.s12,
        backgroundColor: colors.white,
        paddingHorizontal: SPACING.s6,
      },
      percentage: {
        right: SPACING.s12,
        position: 'absolute',
      },
      labelText: {
        color: colors.darkGrayishBlue,
      },
      inputControlContainer: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        marginVertical: SPACING.s2,
        borderColor: colors.grayishBlue,
      },
      inputText: {
        color: colors.black,
      },
      valueText: {
        color: colors.gray,
      },
      labelContainer: {
        height: 38,
        width: SCREEN_WIDTH / 1.7,
        justifyContent: 'center',
      },
      cancelIconContainer: {
        width: 18,
        padding: 2,
        height: 18,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
      },
      title: {
        fontSize: 10,
        color: colors.black,
      },
      titleContainer: {
        color: colors.black,
        paddingHorizontal: SPACING.s10,
      },
      item: {
        height: 25,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: colors.black,
        paddingRight: SPACING.s2,
        marginBottom: SPACING.s10,
        marginVertical: SPACING.s6,
        paddingVertical: SPACING.s4,
        marginHorizontal: SPACING.s2,
      },
      authDropDownContainer: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.white,
        marginTop: SPACING.s14,
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
      },
      authLabel: {
        fontSize: 16,
        color: colors.gray,
        alignSelf: 'flex-start',
        marginTop: SPACING.s8,
        paddingHorizontal: SPACING.s10,
      },
      inputStyle: {
        flexDirection: 'row',
      },
      valueContainer: {
        height: 38,
        justifyContent: 'center',
        width: SCREEN_WIDTH / 1.3,
        paddingHorizontal: SPACING.s10,
      },
      noDataText: {
        fontSize: 14,
        color: colors.grayishBlue,
      },
      noDataContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      flatListContainer: {
        flexGrow: 1,
        paddingRight: SPACING.s16,
      },
    });
  }, [editable, colors, leftIcon, type]);

  return {styles, colors};
};
