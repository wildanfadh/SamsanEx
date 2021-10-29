import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Samsan App</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.boxs}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <Text>Oke Berhasil!</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: "green",
    maxHeight: "10%",
  },
  textHeader: {
    color: "#fff",
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  boxs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxHeight: "40%",
    marginBottom: 80,
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: "green",
    borderRadius: 10,
  },
});
