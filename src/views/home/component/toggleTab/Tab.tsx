import { useTabsStyle } from './TabsStyle';
import React, { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import AppText from '../../../../components/text/AppText';
import { SametiType } from '../../../../interfaces/commonInterface';

interface ToggleInterface {
    toggleType:  SametiType;
    onTogglePress: (type: SametiType) => void;
}

const ToggleTab = React.memo(({toggleType, onTogglePress}: ToggleInterface) => {
    const {styles, colors} = useTabsStyle();

    const renderTab = useCallback((type: boolean, typeName: SametiType) => {
        return (
            <Pressable style={[styles.toggleSwitch, {backgroundColor: type ? colors.darkGray : colors.lightBlue}]} onPress={()=> onTogglePress(typeName)}>
                <AppText fontFamily={'semiBold'} style={[styles.toggleText, {color:type ? colors.lightBlue : colors.darkGray}]}>{typeName.toLocaleUpperCase()}</AppText>
            </Pressable>
        );
    }, [colors, onTogglePress, styles]);

    return(
        <View style={styles.toggleButton}>
            {renderTab(toggleType === 'sameti', 'sameti')}
            {renderTab(toggleType === 'vc', 'vc')}
        </View>
    );
});

export default ToggleTab;
