import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './screens/Auth/AuthContext';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <PaperProvider>
      <UserProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </UserProvider>
    </PaperProvider>
  );
};

export default App;
