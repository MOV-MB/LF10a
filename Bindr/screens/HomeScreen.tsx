import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile' as never);
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={goToProfile} />
    </View>
  );
};

export default HomeScreen;
