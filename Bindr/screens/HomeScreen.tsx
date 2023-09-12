import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from './Auth/AuthContext';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const currentUser = useContext(UserContext);

  const goToProfile = () => {
    navigation.navigate('Profile' as never);
  };

  const goToChat = () => {
    navigation.navigate('Chat' as never);
  };

  const goToLogin = () => {
    navigation.navigate('Login' as never);
  };

  const goToSwiping = () => {
    navigation.navigate('Swiping' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={goToProfile}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToSwiping}>
        <Text style={styles.buttonText}>Start Swiping</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToChat}>
        <Text style={styles.buttonText}>Go to Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
