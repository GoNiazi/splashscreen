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

export default function App() {
  const [splashscreen, setsplashscreen] = useState(true);

  setTimeout(() => {
    setsplashscreen(false);
  }, 5000);
  const { landscape } = useDeviceOrientation();
  return (
    <>
      {splashscreen ? <SplashScreen></SplashScreen> : <HomeScreen></HomeScreen>}
    </>
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
