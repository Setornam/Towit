import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from './firebaseConfig';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'User registered successfully');
    } catch (error) {
      Alert.alert('Error', `Error registering user: ${error.message}`);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;
