import React from 'react';
import useShareLoan from './hooks/useShareLoan';
import { FlatList, SafeAreaView, View } from 'react-native';
import AppText from '../../components/text/AppText';
import { useShareLoanStyle } from './ShareLoanStyle';
import { rupeeSymbol } from '../../helpers/appHelper';
import Divider from '../../components/divider/Divider';
import LabelText from '../../components/labelText/LabelText';
import RenderAppButton from '../../components/button/RenderButton';
import SvgButton from '../../components/svgButton/SvgButton';
import { CASE_DATA } from '../../constants/constants';

const ShareLoan = () => {
  const {styles, colors} = useShareLoanStyle();
  const {onSubmitPress} = useShareLoan();

  const renderAmount = (amountType: string, amount: string) => {
    return (
      <LabelText keyText={amountType} value={rupeeSymbol(amount)} labelFontFamily={'semiBold'} valueFontFamily={'semiBold'} />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
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
        <View style={styles.shareLoanContainer}>
          <AppText fontFamily={'semiBold'} style={styles.heading}>Share Loan Amount</AppText>
          <SvgButton icon={'plusIcon'} iconColor={colors.black} />
        </View>
        {renderAmount('Grand total Amount', '1000')}
        <Divider />
          <FlatList data={CASE_DATA} renderItem={(item)=> <View><AppText>{item.item.username}</AppText></View>}/>
          <Divider />
        {renderAmount('Left Amount After share', '1000')}
      </View>
      <View style={styles.renderButton}>
        <RenderAppButton onPress={onSubmitPress} title={'Submit'} />
      </View>
    </SafeAreaView>
  );
};

export default ShareLoan;
