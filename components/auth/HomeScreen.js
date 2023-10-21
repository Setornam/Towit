// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the App!</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomeScreen;
