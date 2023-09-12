import auth from '@react-native-firebase/auth';

const register = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return userCredential.user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    } else {
      console.error(error);
    }
  }
};

const login = async (email: any, password: any) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return userCredential.user;
  } catch (error: any) {
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    if (error.code === 'auth/wrong-password') {
      console.log('Password is incorrect!');
    } else {
      console.error(error);
    }
  }
};
const logout = async (): Promise<void> => {
  try {
    await auth().signOut();
  } catch (error: any) {
    console.error(error);
  }
};

export {register, login, logout};
