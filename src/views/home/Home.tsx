import useHome from './hooks/useHome';
import { useHomeStyle } from './HomeStyle';
import { SafeAreaView, View } from 'react-native';
import ToggleTab from './component/toggleTab/Tab';
import AppText from '../../components/text/AppText';
import React, { useCallback, useEffect } from 'react';
import SvgButton from '../../components/svgButton/SvgButton';
import SametiContainer from './component/sametiListContainer/SametiListContainer';

const Home = () => {
    const {styles} = useHomeStyle();
    const {navigation, onTogglePress, toggleType, onContainerPress} = useHome();

    const header = useCallback(()=> {
        return (
            <View style={styles.header}>
                <AppText fontFamily={'semiBold'} style={styles.headerText}>Hi User</AppText>
                <SvgButton icon={'notificationIcon'} onPress={()=> {}} size={24} />
            </View>
        );
    }, [styles]);


    useEffect(()=> {
        navigation.setOptions({
            header: header,
            headerShown: true,
        });
    }, [header, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
               <ToggleTab toggleType={toggleType} onTogglePress={onTogglePress} />
               <SametiContainer onPress={onContainerPress}/>
            </View>
        </SafeAreaView>
    );
};

export default Home;
