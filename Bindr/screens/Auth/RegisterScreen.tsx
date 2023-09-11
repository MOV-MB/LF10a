import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {register} from '../../services/authService'; // Import your authentication service

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await register(email, password); // Call the register function from authService
      // Redirect to the login screen upon successful registration
      // You can use navigation for this purpose
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
