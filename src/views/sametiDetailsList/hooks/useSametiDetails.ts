import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../constants/routeConstant';

const useSametiDetails = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'submitSameti'>>();
  const onSubmitPress = () => navigation.navigate('shareLoan');

  return {
    onSubmitPress,
  };
};

export default useSametiDetails;
