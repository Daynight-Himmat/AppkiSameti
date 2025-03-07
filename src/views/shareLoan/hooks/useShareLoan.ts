import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../constants/routeConstant';

const useShareLoanAmount = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'submitSameti'>>();
  const onSubmitPress = () => navigation.navigate('finalSubmit');

  return {
    onSubmitPress,
  };
};

export default useShareLoanAmount;
