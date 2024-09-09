import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const Home = () => {
  return (
    <>
      <View style={styles.safeArea}>

        <View style={styles.imgContainer}>
          <Image
            style={styles.logoImg}
            source={require("../../assets/test.png")}
          />
          <Image
            style={styles.centerImg}
            source={require("../../assets/Device.png")}
          />
        </View>

      </View>
      <View style={styles.container}>
        <Link style={styles.addButton} href="/device">
          <View style={styles.addButtonContent}>
            <Text style={styles.addButtonText}> ADD DEVICE </Text>
            <Ionicons name="add" size={32} color="black" />
          </View>
        </Link>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imgContainer: {
    flex: 0.7,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  centerImg: {
    margin: 30,
    width: 180,
    height: 180,
  },
  logoImg: {
    width: 230,
    height: 230,
    marginBottom:"2%",
    marginTop:"10%",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 180,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    //marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: '10%',
  },
  addButtonContent: {
    //width:180,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addButtonText: {
    fontSize: 18,
    color: "black",
    


  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
