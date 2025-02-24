import React from 'react';
import AppText from '../../components/text/AppText';
import { CASE_DATA, CASE_TYPE } from '../../constants/constants';
import { FlatList, Pressable, View } from 'react-native';
import useSametiUserData from './hooks/useSametiUserData';
import CheckBox from '../../components/checkBox/CheckBox';
import { useUserSametiDataStyle } from './UserSametiStyle';
import RenderAppButton from '../../components/button/RenderButton';
import PersonList from '../../components/listComponents/person/PersonList';
import CheckBoxController from '../../controller/CheckBoxController/CheckBoxController';
import AppTextControlInput from '../../controller/TextInputController/TextInputController';
import { PLACEHOLDER } from '../../constants/stringConstants';


const UserSametiData = () => {
    const {styles, colors} = useUserSametiDataStyle();

    const {control, onPaymentTypePress, paymentType, openUser, onIconPress, onSubmitPress} = useSametiUserData();

    const renderItem = ({item}:{item: any}) => {
        return (
            <View style={styles.checkContainer}>
                <CheckBox onChange={() => {}} value={false} labelField={item} checkBoxSide={'Left'} style={styles.checkBox} size={18} itemTextStyle={styles.checkTextStyle} checkColor={colors.darkGray} />
                <AppTextControlInput
                    maxLength={7}
                    type={'number'}
                    control={control}
                    controllerName={`${item}`}
                    style={styles.checkBoxText}
                    placeholder={item.toString()}
                    textStyle={styles.checkTextStyle}
                />
            </View>
        );
    };

    const renderInput = (label: string, controllerName: string, placeholder: string) => {
        return (
             <View style={styles.labelInputContainer}>
                <AppText>{label}</AppText>
                <AppTextControlInput
                    maxLength={7}
                    type={'number'}
                    control={control}
                    placeholder={placeholder}
                    style={styles.inputContainer}
                    textStyle={styles.lableInput}
                    controllerName={controllerName}
                />
            </View>
        );
    };

    const renderUser = ({item, index} : {item: any, index: any}) => {
        return (
            <View style={styles.dataContainer}>
                   <PersonList data={item} condition={index !== openUser} onRightPress={()=> onIconPress(index)}/>
                   {index === openUser && <View style={styles.amountContainer}>
                        <CheckBoxController label="Share Amount:- 500" control={control} controllerName={'shareAmount'}  checkColor={colors.darkGray}/>
                        {renderInput('Loan Amount', 'loanAmount', PLACEHOLDER.loanAmount)}
                        {renderInput('Interest Amount', 'interestAmount', PLACEHOLDER.interestAmount)}
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
                        {paymentType === 'case' && <View style={styles.caseStructureContainer}>
                            <AppText fontFamily={'bold'} style={styles.caseStructureTitle}>Case Structure</AppText>
                            <FlatList data={CASE_TYPE} renderItem={renderItem} numColumns={2} />
                        </View>}
                        <View style={styles.totalAmountContainer}>
                            {renderInput('Total Amount', 'totalAmount', PLACEHOLDER.totalAmount)}
                        </View>
                        <RenderAppButton onPress={()=> onSubmitPress()} title={'Submit'} />
                   </View>}
                </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FlatList data={CASE_DATA} renderItem={renderUser} keyExtractor={(_, index)=> index.toString()}/>
            </View>
        </View>
    );
};

export default UserSametiData;
