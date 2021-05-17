import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

// this is just a routing initialization
const Stack = createStackNavigator();

// this is the header style
const globalScreenOptions = {
    headerStyle: {backgroundColor: "#2C6BED"},
    headerTitleStyle: {color: "white"},
    headerTintColor: "white",
};


export default function App() {
  return (
      <NavigationContainer>
          {/* this is the header*/}
          <Stack.Navigator screenOptions={globalScreenOptions}>
              {/* with stack screen we are adding the screens for people to go in app*/}
              <Stack.Screen name="Login" component={LoginScreen}/>
              {/* this is the register screen*/}
              <Stack.Screen name="Register" component={RegisterScreen}/>
              <Stack.Screen name="Home" component={HomeScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

// writing styles in heres
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
