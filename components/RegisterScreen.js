import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  TextInput,
} from "react-native";
const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput style={styles.username} placeholder="username" />
        <TextInput style={styles.email} placeholder="email" />
        <TextInput style={styles.password} placeholder="password" />
        <Button title="Register" />
      </View>
      <View style={styles.loginbtn}>
        <Button
          title="Go to Login"
          color="black"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    backgroundColor: "pink",
    width: 200,
    padding: 15,
    color: "#fff",
    borderRadius: 2,
  },
  password: {
    backgroundColor: "pink",
    width: 200,
    padding: 15,
    color: "#fff",
    borderRadius: 2,
    marginTop: 20,
  },
  email: {
    backgroundColor: "pink",
    width: 200,
    padding: 15,
    color: "#fff",
    borderRadius: 2,
    marginTop: 20,
  },
  loginbtn: {
    marginTop: 50,
    color: "red",
    backgroundColor: "skyblue",
    borderRadius: 5,
    padding: 2,
  },
});
