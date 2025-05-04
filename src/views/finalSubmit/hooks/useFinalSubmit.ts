import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../constants/routeConstant';

const useFinalSametiSubmit = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'submitSameti'>>();
  const onSubmitPress = () => navigation.navigate('sametiList');

  return {
    onSubmitPress,
  };
};

export default useFinalSametiSubmit;
