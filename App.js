import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "./components/RegisterScreen";
export default function App() {
  const [splashscreen, setsplashscreen] = useState(true);
  const Stack = createNativeStackNavigator();
  setTimeout(() => {
    setsplashscreen(false);
  }, 5000);
  const { landscape } = useDeviceOrientation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashscreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ title: "Welcome" }}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
});
