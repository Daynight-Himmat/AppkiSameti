import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../constants/routeConstant';

const useProfile = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'profile'>>();

  return {
    navigation,
  };
};

export default useProfile;
