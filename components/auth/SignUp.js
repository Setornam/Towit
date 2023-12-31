import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';


const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignUp = async () => {
    
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.headingText}>Create Your Account</Text>
      </View>

      <View style={styles.formContainer}>
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setPasswordConfirmation}
          value={passwordConfirmation}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '18%',
    backgroundColor: '#FF914D',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    paddingLeft: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    width: '85%',
    height: 450,
    borderRadius: 10,
    position: 'relative',
    top: 0,
    paddingTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF914D',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  headingText: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingLeft: 50,
    color: 'white',
  },
});

export default SignUp;
