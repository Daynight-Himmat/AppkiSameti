import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from '../../../helpers/yupHelper';
import { PaymentType } from '../../../interfaces/commonInterface';

const useSametiUserData = () => {

    const { control } = useForm<any, any>({
      resolver: loginFormSchema,
      mode: 'onBlur',
    });
    const [paymentType, setPaymentType] = useState<PaymentType>('case');

    const onPaymentTypePress = (type: PaymentType) => {
      setPaymentType(type);
    };

    return {
        control,
        paymentType,
        onPaymentTypePress,
    };
};

export default useSametiUserData;
