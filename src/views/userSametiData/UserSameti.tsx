import React from 'react';
import { Pressable, View } from 'react-native';
import { useUserSametiDataStyle } from './UserSametiStyle';
import PersonList from '../../components/listComponents/person/PersonList';
import CheckBoxController from '../../controller/CheckBoxController/CheckBoxController';
import useSametiUserData from './hooks/useSametiUserData';
import RenderAppButton from '../../components/button/RenderButton';
import AppText from '../../components/text/AppText';
import CheckBox from '../../components/checkBox/CheckBox';
import { TextInput } from 'react-native-gesture-handler';
import AppTextInput from '../../components/textInput/AppTextInput';
import AppTextControlInput from '../../controller/TextInputController/TextInputController';


const UserSametiData = () => {
    const {styles, colors} = useUserSametiDataStyle();

    const {control, onPaymentTypePress, paymentType} = useSametiUserData();

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.dataContainer}>
                   <PersonList data={{}}/>
                   <View style={styles.amountContainer}>
                        <CheckBoxController label="Share Amount:- 500" control={control} controllerName={''}/>
                        <AppText>Total Amount:- 500</AppText>
                        <View style={styles.amountType}>
                            <AppText>Amount submit with</AppText>
                            <View style={styles.buttonView}>
                                <Pressable style={[styles.caseButton, {backgroundColor: paymentType === 'case' ? colors.darkGray : colors.veryLightGray}]} onPress={()=> onPaymentTypePress('case')}>
                                    <AppText style={[styles.buttonText, {color: paymentType === 'case' ? colors.white : colors.darkGray}]}>Case</AppText>
                                </Pressable>
                                <Pressable style={[styles.caseButton, {backgroundColor: paymentType === 'online' ? colors.darkGray : colors.veryLightGray}]} onPress={()=> onPaymentTypePress('online')}>
                                    <AppText style={[styles.buttonText, {color: paymentType === 'case' ? colors.darkGray : colors.white}]}>Online</AppText>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.caseStructureContainer}>
                            <AppText style={styles.caseStructureTitle}>Case Structure</AppText>
                            <View>
                                <View style={styles.checkContainer}>
                                    <CheckBox onChange={() => { } } value={false} labelField={'1'} checkBoxSide={'Left'} style={styles.checkBox} size={18}/>
                                    <AppTextControlInput controllerName={'1'} control={control} style={styles.checkBoxText} />
                                </View>
                            </View>
                        </View>
                        <RenderAppButton onPress={()=> {}} title={'Submit'} />
                   </View>
                </View>
            </View>
        </View>
    );
};

export default UserSametiData;
