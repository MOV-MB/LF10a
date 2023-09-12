import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './screens/Auth/AuthContext';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
