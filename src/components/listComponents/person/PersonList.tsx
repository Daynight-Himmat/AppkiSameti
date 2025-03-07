import React from 'react';
import ListView from '../List';
import {View} from 'react-native';
import Svg from '../../../assets/svg';
import AppText from '../../text/AppText';
import {usePersonStyle} from './PersonStyle';
import {CommonUser} from '../../../interfaces/commonInterface';

interface PersonListInterface {
  data: CommonUser;
  condition?: boolean;
  onRightPress?: () => void;
}

const PersonList = React.memo(
  ({data, condition, onRightPress}: PersonListInterface) => {
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
          <AppText fontFamily={'semiBold'} style={styles.title}>
            {data?.username}
          </AppText>
          <AppText>{data?.enrollNo}</AppText>
        </View>
      );
    };

    return (
      <ListView
        title={renderTitleIcon()}
        leftIcon={renderLeftIcon()}
        onRightIconPress={onRightPress}
        rightContainer={styles.rightIcon}
        rightIcon={condition ? 'arrowUpIcon' : 'arrowDownIcon'}
      />
    );
  },
);

export default PersonList;
