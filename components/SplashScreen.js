import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
  Animated,
} from "react-native";
function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      duration: 1500,
      toValue: 1,
      delay: 1500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <View>
      <Animated.Image
        style={[styles.image, { opacity: fadeAnim }]}
        source={require("../assets/logo.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
export default SplashScreen;
