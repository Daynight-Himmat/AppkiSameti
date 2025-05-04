import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useTheme} from '../../../hooks';
import {SCREEN_WIDTH} from '../../../styles';

export const useImageViewStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      contentContainer: {
        flex: 1,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        borderRadius: 16,
        width: SCREEN_WIDTH,
        backgroundColor: colors.white,
      },
      icon: {
        zIndex: 1,
        top: 22,
        right: 22,
        position: 'absolute',
      },
    });
  }, [colors]);

  return {styles, colors};
};
