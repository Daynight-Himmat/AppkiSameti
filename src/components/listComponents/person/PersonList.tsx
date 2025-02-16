import React from 'react';
import ListView from '../List';
import {View} from 'react-native';
import Svg from '../../../assets/svg';
import AppText from '../../text/AppText';
import { usePersonStyle } from './PersonStyle';

interface PersonListInterface {
    data: any
}

const PersonList = React.memo(({}: PersonListInterface) => {

    const {styles, colors} = usePersonStyle();

    const renderLeftIcon = () => {
        return (
            <View style={styles.personIcon}>
                <Svg.personIcon fill={colors.white} />
            </View>
        );
    };

      const renderTitleIcon = () => {
        return (
            <View>
                <AppText fontFamily={'semiBold'} style={styles.title}>Community Member Name</AppText>
                <AppText>Community Member Enroll No.</AppText>
            </View>
        );
    };
    return (
        <ListView leftIcon={renderLeftIcon()} title={renderTitleIcon()} rightIcon={'forwordArrowIcon'} onRightIconPress={()=> {}}/>
    );
});

export default PersonList;
