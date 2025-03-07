import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import AppText from '../../components/text/AppText';
import { rupeeSymbol } from '../../helpers/appHelper';
import Divider from '../../components/divider/Divider';
import { useFinalSubmitStyle } from './FinalSubmitStyle';
import useFinalSametiSubmit from './hooks/useFinalSubmit';
import LabelText from '../../components/labelText/LabelText';
import RenderAppButton from '../../components/button/RenderButton';

const FinalSubmitSameti = () => {
  const {styles} = useFinalSubmitStyle();
  const {onSubmitPress} = useFinalSametiSubmit();

    const renderAmount = (amountType: string, amount: string) => {
    return (
      <LabelText keyText={amountType} value={rupeeSymbol(amount)} labelFontFamily={'semiBold'} valueFontFamily={'semiBold'} />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.userContainer}>
          <AppText fontFamily={'semiBold'} style={styles.heading}>Total Amounts</AppText>
          {renderAmount('Total Share Amount', '1000')}
          {renderAmount('Total Share Amount', '1000')}
          {renderAmount('Total Interest Amount', '1000')}
          {renderAmount('Total Loan Amount', '1000')}
          {renderAmount('Total Old Amount', '1000')}
          {renderAmount('Total Penalty Amount', '1000')}
          <Divider />
          {renderAmount('Grand total Amount', '1000')}
        </View>
        <View style={styles.userContainer}>
          <AppText fontFamily={'semiBold'} style={styles.heading}>Total Loan Holder</AppText>
          {renderAmount('Member name', '1000')}
          {renderAmount('Member name', '1000')}
          {renderAmount('Member name', '1000')}
        </View>
      </ScrollView>
      <View style={styles.renderButton}>
        <RenderAppButton onPress={onSubmitPress} title={'Submit'} />
      </View>
    </SafeAreaView>
  );
};

export default FinalSubmitSameti;
