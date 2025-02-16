import { useState } from 'react';
import { SametiType } from '../../../interfaces/commonInterface';
import { RootStackParamList } from '../../../constants/routeConstant';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const useHome = () => {

    const [toggleType, setToggleType] = useState<SametiType>('sameti');
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'home'>>();

    const onTogglePress = (type: SametiType) => {
        setToggleType(type);
    };

    const onContainerPress = () => {
        navigation.navigate('sametiList');
    };

    return {
        navigation,
        toggleType,
        onTogglePress,
        onContainerPress,
    };
};

export default useHome;
