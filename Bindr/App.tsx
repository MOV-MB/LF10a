import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import firebase from '@react-native-firebase/app';
import {
  FIREBASE_APP_ID,
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_AUTH_DOMAIN,
} from '@env';

const firebaseConfig: any = {
  apiKey: FIREBASE_API_KEY,
  databaseURL: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  appId: FIREBASE_APP_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
};

if (!firebase.apps.length) {
  firebase
    .initializeApp(firebaseConfig)
    .then(() => {
      console.log('Firebase is initialized.');
    })
    .catch(Error => {
      console.error('Firebase initialization error:', Error);
    });
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
