import {useMemo} from 'react';
import {SPACING} from '../../styles';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

export const useWelComeLabelStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      iconContainer: {
        marginTop: 30,
        marginBottom: SPACING.s20,
      },
      icon: {
        alignSelf: 'flex-start',
        marginBottom: SPACING.s10,
      },
      subContainer: {
        flex: 1,
        paddingHorizontal: SPACING.s16,
      },
      logo: {
        alignSelf: 'center',
      },
      welcomeContainer: {
        alignItems: 'flex-start',
        marginVertical: SPACING.s10,
      },
      label: {
        fontSize: 24,
        color: colors.darkGray,
      },
      subLabel: {
        paddingTop: SPACING.s4,
        color: colors.darkGrayishBlue,
      },
      buttonContainer: {
        marginVertical: SPACING.s24,
        paddingHorizontal: SPACING.s16,
      },
    });
  }, [colors]);

  return {styles, colors};
};
