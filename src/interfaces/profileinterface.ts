import Svg from '../assets/svg';
import {ColorValue} from 'react-native';
import {ProfileStackParamsList} from '../constants/routeConstant';

export interface ProfileProps {
  id?: number;
  title?: string;
  address?: string;
  icon: keyof typeof Svg;
  iconColor?: ColorValue;
  route: keyof ProfileStackParamsList;
}
