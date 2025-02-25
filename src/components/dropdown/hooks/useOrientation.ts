import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

const isOrientationPortrait = ({ width, height }: ScaledSize) =>
  height >= width;
const isOrientationLandscape = ({ width, height }: ScaledSize) =>
  width >= height;

export function useDeviceOrientation() {
  const screen = Dimensions.get('screen');
  const initialState = {
    portrait: isOrientationPortrait(screen),
    landscape: isOrientationLandscape(screen),
  };

  const [orientation, setOrientation] = useState(initialState);

  useEffect(() => {
    const onChange = ({ screen: screens }: { screen: ScaledSize }) => {
      setOrientation({
        portrait: isOrientationPortrait(screens),
        landscape: isOrientationLandscape(screens),
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      if (typeof subscription?.remove === 'function') {
        subscription.remove();
      }
    };
  }, []);

  return orientation.portrait ? 'PORTRAIT' : 'LANDSCAPE';
}
