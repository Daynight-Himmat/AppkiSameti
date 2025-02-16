import React from 'react';
import Svg from '../../../../assets/svg';
import { Pressable, View } from 'react-native';
import AppText from '../../../../components/text/AppText';
import { useSametiContainer } from './SametiContainerStyle';

interface SametiListInterface {
    onPress?: () => void;
}

const SametiContainer = React.memo(({onPress}: SametiListInterface) => {
    const {styles, colors} = useSametiContainer();
    return (
        <Pressable style={styles.sametiContainer} onPress={onPress}>
            <View style={styles.titleContainer}>
                <AppText fontFamily={'semiBold'} style={styles.title}>Sameti name</AppText>
                <View style={styles.groupMember}>
                    <Svg.groupIcon fill={colors.black} />
                    <AppText fontFamily={'semiBold'} style={styles.groupCounter}>40</AppText>
                </View>
            </View>
            <View style={styles.timeContainer}>
                <Svg.dateIcon fill={colors.black} />
                <AppText style={styles.groupCounter}>10 Jan, 2024</AppText>
            </View>
            <AppText style={styles.amountText}>Total Amount yet:- 1000</AppText>
            <AppText style={styles.amountText}>Per member Amount yet:- 1000</AppText>
        </Pressable>
    );
});

export default SametiContainer;
