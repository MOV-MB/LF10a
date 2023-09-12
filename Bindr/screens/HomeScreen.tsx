import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from './Auth/AuthContext';
import {logout} from '../services/authService';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const currentUser = useContext(UserContext);

  const goToLogin = () => {
    navigation.navigate('Login' as never);
  };
  const goToProfile = () => {
    navigation.navigate('Profile' as never);
  };
  const goToChat = () => {
    console.log('Not Implemented yet');
    //navigation.navigate('Chat' as never);
  };
  const goToSwiping = () => {
    navigation.navigate('Swiping' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {currentUser?.email}</Text>
      <Button
        mode="contained"
        onPress={goToProfile}
        style={styles.button}
        labelStyle={styles.buttonText}>
        Go to Profile
      </Button>
      <Button
        mode="contained"
        onPress={goToSwiping}
        style={styles.button}
        labelStyle={styles.buttonText}>
        Start Swiping
      </Button>
      <Button
        mode="contained"
        onPress={goToChat}
        style={styles.button}
        labelStyle={styles.buttonText}>
        Go to Chat
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          logout();
          goToLogin();
        }}
        style={styles.button}
        labelStyle={styles.buttonText}>
        Logout
      </Button>
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
