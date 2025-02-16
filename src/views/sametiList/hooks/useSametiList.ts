import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../constants/routeConstant';

const useSametiList = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList, 'sametiList'>>();

    const onSametiPress = () => navigation.navigate('userSametiData');

    return {onSametiPress};
};

export default useSametiList;
