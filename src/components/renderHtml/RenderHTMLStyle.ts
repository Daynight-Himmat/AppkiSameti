import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

const useRenderHTMLStyle = () => {
  const {colors} = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
      },
      imageContainer: {
        marginVertical: 10,
      },
      image: {
        width: '60%',
        height: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageView: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      p: {
        color: colors.white,
        fontSize: 14,
      },
    });
  }, [colors]);
  return {
    styles,
    colors,
  };
};

export default useRenderHTMLStyle;
