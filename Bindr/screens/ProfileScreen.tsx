import React from 'react';
import {View, Text, Image} from 'react-native';

const ProfileScreen: React.FC = () => {
  // Replace with actual user data
  const userData = {
    name: 'John Doe',
    age: 28,
    bio: 'I love hiking and exploring new places.',
    profileImage: require('../assets/profile.jpg'),
  };

  return (
    <View>
      <Image source={userData.profileImage} style={{width: 200, height: 200}} />
      <Text>Name: {userData.name}</Text>
      <Text>Age: {userData.age}</Text>
      <Text>Bio: {userData.bio}</Text>
    </View>
  );
};

export default ProfileScreen;
