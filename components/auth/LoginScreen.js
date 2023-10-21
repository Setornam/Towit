import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here, e.g., with Firebase or an authentication service
    if (email === 'user@example.com' && password === 'password') {
      // Successful login
      navigation.navigate('Home');
    } else {
      // Failed login
      Alert.alert('Login Failed', 'Please check your email and password.');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('Signup'); // Navigate to the Signup screen
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} style={styles.button}/>
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    padding: 10,
  },

  
});

export default LoginScreen;
