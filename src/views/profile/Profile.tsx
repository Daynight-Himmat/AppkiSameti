import Svg from '../../assets/svg';
import useProfile from './hooks/useProfile';
import { useProfileStyle } from './ProfileStyle';
import AppText from '../../components/text/AppText';
import React, { useCallback, useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import ListView from '../../components/listComponents/List';
import { ProfileProps } from '../../interfaces/profileinterface';
import { PROFILE_DATA } from '../../constants/profileConstants';

const Profile = () => {
  const { styles, colors } = useProfileStyle();
  const { navigation } = useProfile();

  const renderItem = ({ item }: { item: ProfileProps }) => (
    <ListView
      isSeprator={true}
      title={item?.title}
      leftIcon={item?.icon}
      rightIcon={'forwordArrowIcon'}
      leftIconColor={item?.iconColor}
      rightIconColor={item?.iconColor}
      listContainer={styles.listContainer}
      onPress={() => {}}
      titleStyle={{ color: item?.iconColor ? item?.iconColor : colors.gray }}
    />
  );

  const profileHeader = useCallback(() => {
    return (
      <View style={styles.profile}>
        <View style={styles.profileContainer}>
          <View style={styles.personIcon}>
            <Svg.personIcon height={24} width={24} fill={colors.black} />
          </View>
          <View style={styles.nameContainer}>
            <AppText fontFamily={'semiBold'} style={styles.name}>
              UserName
            </AppText>
            <AppText style={styles.email}>{'emailAddress@gmail.com'}</AppText>
          </View>
        </View>
      </View>
    );
  }, [styles, colors]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: profileHeader,
    });
  }, [navigation, profileHeader]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          data={PROFILE_DATA}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => i?.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
