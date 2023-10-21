import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './components/auth/LoginScreen';
import HomeScreen from './components/auth/HomeScreen';
import SignUp from './components/auth/SignUp';
import PasswordReset from './components/auth/PasswordReset';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: ' ', 
            headerStyle: {
              backgroundColor: '#f2f2f2',
            },
          }}
        />
        <Stack.Screen
          name="Create Your Account"
          component={SignUp}
          options={{
            title: ' ', 
            headerStyle: {
              backgroundColor: '#FF914D',
              elevation: 0,
            },
            headerTintColor: 'white',
          }}
        />
         <Stack.Screen
          name="Password Reset"
          component={PasswordReset}
          options={{
            title: ' ', 
            headerStyle: {
              backgroundColor: '#FF914D',
              elevation: 0,
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
