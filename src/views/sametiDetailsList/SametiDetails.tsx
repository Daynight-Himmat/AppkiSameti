import Svg from '../../assets/svg';
import React, { useCallback } from 'react';
import AppText from '../../components/text/AppText';
import { CASE_DATA } from '../../constants/constants';
import { rupeeSymbol } from '../../helpers/appHelper';
import Divider from '../../components/divider/Divider';
import useSametiDetails from './hooks/useSametiDetails';
import { FlatList, SafeAreaView, View } from 'react-native';
import ListView from '../../components/listComponents/List';
import LabelText from '../../components/labelText/LabelText';
import { useSametiDetailsStyle } from './SametiDetailsStyle';

const SametiDetails = () => {
  const {styles, colors} = useSametiDetailsStyle();
  const {} = useSametiDetails();

  const renderLeft = useCallback(() => {
    return (
      <View style={styles.person}>
        <Svg.personIcon height={18} width={18} fill={colors.white}/>
      </View>
    );
  }, [colors, styles]);

  const renderItem = useCallback(({item}: { item: any}) => {
    return (
      <View style={styles.renderContainer}>
        <ListView leftIcon={renderLeft()} title={item.username} subTitle={item.enrollNo.toString()} />
        {renderAmount('Share Amount', '500')}
        {renderAmount('Interest Amount', '500')}
        {renderAmount('Loan Amount', '500')}
        {renderAmount('Penalty Amount', '500')}
        <Divider />
        {renderAmount('Total Amount', '500')}
      </View>
    );
  }, [renderLeft, styles]);

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
          {renderAmount('Total Interest Amount', '1000')}
          {renderAmount('Total Loan Amount', '1000')}
          {renderAmount('Total Old Amount', '1000')}
          {renderAmount('Total Penalty Amount', '1000')}
          <Divider />
          {renderAmount('Grand total Amount', '1000')}
        </View>
        <AppText fontFamily={'semiBold'} style={styles.heading}>Sameti Member Amounts</AppText>
        <FlatList
            data={CASE_DATA}
            renderItem={renderItem}
            keyExtractor={(_, i)=> i.toString()}
          />
      </View>n
    </SafeAreaView>
  );
};

export default SametiDetails;
