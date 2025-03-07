import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../constants/routeConstant';

const useFinalSametiSubmit = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'submitSameti'>>();
  const onSubmitPress = () => navigation.navigate('shareLoan');

  return {
    onSubmitPress,
  };
};

export default useFinalSametiSubmit;
