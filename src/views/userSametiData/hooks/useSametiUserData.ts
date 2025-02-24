import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from '../../../helpers/yupHelper';
import { PaymentType } from '../../../interfaces/commonInterface';

const useSametiUserData = () => {

    const { control, getValues } = useForm<any, any>({
      resolver: loginFormSchema,
      mode: 'onBlur',
    });
    const [paymentType, setPaymentType] = useState<PaymentType>('case');
    const [openUser, setOpenUser] = useState<number>(0);

    const onPaymentTypePress = (type: PaymentType) => {
      setPaymentType(type);
    };

    const onIconPress = (index: number) => setOpenUser(index);

    const onSubmitPress = () => console.log('this sis testing ', getValues());

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
