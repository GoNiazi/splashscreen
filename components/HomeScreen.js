import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textcol}>Modules</Text>
      </View>
      <View style={styles.modules}>
        <Text style={styles.textcol}>Image Caption</Text>
      </View>
      <View style={styles.modules}>
        <Text style={styles.textcol}>OCR detection</Text>
      </View>
      <View style={styles.modules}>
        <Text style={styles.textcol}>Color detection</Text>
      </View>
      <View style={styles.modules}>
        <Text style={styles.textcol}>Currency detection</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F3A88",
    // justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 20,
    backgroundColor: "#1C98AC",
    width: 200,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  modules: {
    marginTop: 40,
    backgroundColor: "#1C98AC",
    width: 250,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textcol: {
    color: "#fff",
  },
});

export default HomeScreen;
