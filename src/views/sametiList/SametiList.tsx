import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { useSametiListStyle } from './SametiListStyle';
import AppText from '../../components/text/AppText';
import Svg from '../../assets/svg';
import RenderAppButton from '../../components/button/RenderButton';
import useSametiList from './hooks/useSametiList';

const SametiList = () => {
    const {styles, colors} = useSametiListStyle();
    const {onSametiPress} = useSametiList();

    const renderItem = () => {
        return (
            <Pressable style={styles.listContainer}>
                <AppText fontFamily={'semiBold'} style={styles.title}>10 Jan 2024</AppText>
                <Svg.forwordArrowIcon fill={colors.darkGray} />
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FlatList data={[1,2,3,4,5]} renderItem={renderItem} keyExtractor={(_, index)=> index.toString()}/>
                <RenderAppButton
                    title="Start Sameti"
                    onPress={onSametiPress}
                />
            </View>
        </View>
    );
};

export default SametiList;
