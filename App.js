import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/auth/login/Login";
import Home from "./src/pages/home/Home";

// style

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
