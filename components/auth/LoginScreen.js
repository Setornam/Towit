import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';




const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    const auth = getAuth(firebaseApp);
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home'); // Navigate to the Home screen after successful login
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };
  
  const handleSignUp = () => {
    navigation.navigate('Create Your Account'); // Navigate to the Signup screen
  };

  const handlePasswordReset = () => {
    navigation.navigate('Password Reset'); // Replace 'PasswordReset' with the correct screen name
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/towitlogo.png')} // Replace with your logo image path
          style={styles.logo}
        />
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
        <View style={styles.resetLinkContainer}>
            <TouchableOpacity
            onPress={handlePasswordReset}
            
            >
            <Text style={styles.passwordResetLink}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={[styles.button, { width: 300 }]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.linkContainer, { width: 300 }]}

        >
          <Text>Don't have an account? </Text>
          <Text style={styles.link}>Create an Account</Text>
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
    backgroundColor: '#FF914D',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '68%',
    backgroundColor: '#f2f2f2',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
  },
  logo: {
    width: 400, // Set the width and height as needed
    height: 400,
    position: 'relative',
    top: 0,
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
  formContainer:{
    backgroundColor: 'white',
    width: '85%',
    height: 300,
    borderRadius: 10,
    position: 'relative',
    top: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '100%',
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

  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  link:{
    color: 'blue',
  },

  passwordResetLink: {
    color: 'blue',
  },

  resetLinkContainer:{
    width: '80%',
  }


  
});

export default LoginScreen;
