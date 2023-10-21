import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';


const PasswordReset = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to the Signup screen
  };

  
  

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.headingText}>Forgot Password</Text>
      </View>

      <View style={styles.formContainer}>
      <Text style={styles.boldText}>Trouble Logging in?</Text>
      <Text style={styles.formText}>Enter your Email and we will send you a link to reset your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
       
        <TouchableOpacity  style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.returnLogin}>
        <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.returnText}>Return to Login Page</Text>
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
    height: 280,
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

  formText: {
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
  },
  boldText:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  returnLogin:{
    backgroundColor: '#FF914D',
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: -210,
  },

  returnText:{
    color: 'white',
    fontSize: 20,
  }
});

export default PasswordReset;
