import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {loginFormSchema} from '../../../helpers/yupHelper';
import {PaymentType} from '../../../interfaces/commonInterface';
import {RootStackParamList} from '../../../constants/routeConstant';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const useSametiUserData = () => {
  const {control} = useForm<any, any>({
    resolver: loginFormSchema,
    mode: 'onBlur',
  });
  const [paymentType, setPaymentType] = useState<PaymentType>('case');
  const [openUser, setOpenUser] = useState<number>(0);
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'userSametiData'>>();

  const onPaymentTypePress = (type: PaymentType) => {
    setPaymentType(type);
  };

  const onIconPress = (index: number) => setOpenUser(index);

  const onSubmitPress = () => navigation.navigate('submitSameti');

  return {
    control,
    openUser,
    setOpenUser,
    paymentType,
    onIconPress,
    onSubmitPress,
    onPaymentTypePress,
  };
};

export default useSametiUserData;
