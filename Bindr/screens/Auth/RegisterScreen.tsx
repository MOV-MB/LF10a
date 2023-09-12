import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {register} from '../../services/authService';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await register(email, password);
      navigation.navigate('Home' as never);
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error, e.g., show an error message to the user
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
      {/* Add navigation to the login screen if needed */}
    </View>
  );
};

export default RegisterScreen;
