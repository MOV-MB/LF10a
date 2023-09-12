import database from '@react-native-firebase/database';
export const storeUserData = (userId: string, userData: any) => {
  const userRef = database().ref(`/users/${userId}`);
  return userRef.set(userData);
};

export const getUserData = (userId: string) => {
  const userRef = database().ref(`/users/${userId}`);
  return userRef.once('value').then(snapshot => snapshot.val());
};

export const updateUserData = (userId: string, updatedData: any) => {
  const userRef = database().ref(`/users/${userId}`);
  return userRef.update(updatedData);
};

export const deleteUserData = (userId: string) => {
  const userRef = database().ref(`/users/${userId}`);
  return userRef.remove();
};
