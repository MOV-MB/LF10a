import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text, TextInput, Button} from 'react-native-paper';

const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    age: 28,
    bio: 'I love hiking and exploring new places.',
    profileImage: require('../assets/profile.jpg'),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userData.name);
  const [editedAge, setEditedAge] = useState(userData.age.toString());
  const [editedBio, setEditedBio] = useState(userData.bio);
  const saveChanges = () => {
    setUserData({
      ...userData,
      name: editedName,
      age: parseInt(editedAge, 10),
      bio: editedBio,
    });
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={150}
        source={userData.profileImage}
        style={styles.avatar}
      />
      {isEditing ? (
        <View style={styles.editContainer}>
          <TextInput
            label="Name"
            value={editedName}
            onChangeText={setEditedName}
            style={styles.editInput}
          />
          <TextInput
            label="Age"
            value={editedAge}
            onChangeText={setEditedAge}
            keyboardType="numeric"
            style={styles.editInput}
          />
          <TextInput
            label="Bio"
            value={editedBio}
            onChangeText={setEditedBio}
            multiline
            style={styles.editInput}
          />
          <Button
            mode="contained"
            onPress={saveChanges}
            style={styles.saveButton}>
            Save
          </Button>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Name: {userData.name}</Text>
          <Text style={styles.text}>Age: {userData.age}</Text>
          <Text style={styles.text}>Bio: {userData.bio}</Text>
          <Button
            onPress={() => setIsEditing(true)}
            style={styles.editButton}
            mode="outlined">
            Edit Profile
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  editButton: {
    marginVertical: 10,
  },
  editContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editInput: {
    width: '100%',
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 10,
  },
});

export default ProfileScreen;
