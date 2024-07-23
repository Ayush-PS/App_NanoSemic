import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TouchableOpacity } from "react-native";
import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    // <SafeAreaView className="bg-primary h-full">
    //   <Loader isLoading={loading} />

    //   <ScrollView
    //     contentContainerStyle={{
    //       height: "100%",
    //     }}
    //   >
    //     <View className="w-full flex justify-center items-center h-full px-4">
    //       <Image
    //         source={images.logo}
    //         className="w-[130px] h-[84px]"
    //         resizeMode="contain"
    //       />

    //       <Image
    //         source={images.cards}
    //         className="max-w-[380px] w-full h-[298px]"
    //         resizeMode="contain"
    //       />

    //       <View className="relative mt-5">
    //         <Text className="text-3xl text-white font-bold text-center">
    //           Discover Endless{"\n"}
    //           Possibilities with{" "}
    //           <Text className="text-secondary-200">Aora</Text>
    //         </Text>

    //         <Image
    //           source={images.path}
    //           className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
    //           resizeMode="contain"
    //         />
    //       </View>

    //       <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
    //         Where Creativity Meets Innovation: Embark on a Journey of Limitless
    //         Exploration with Aora
    //       </Text>

    //       <CustomButton
    //         title="Continue with Email"
    //         handlePress={() => router.push("/sign-in")}
    //         containerStyles="w-full mt-7"
    //       />
    //     </View>
    //   </ScrollView>

    //   <StatusBar backgroundColor="#161622" style="light" />
    // </SafeAreaView>
    <SafeAreaView style={styles.safeArea}>
     
        <View style={styles.header}>
            <Image
              style={styles.himg}
              source={require("../assets/NanoSemicLogo_whiteBG.jpg")}
            />
            <Text style={{ fontSize: 19, color: "white" }}>
              NANO SEMIC
            </Text>
            <View style={{ width: 55, height: 55, borderRadius: 40 }}></View>

          {/* <TouchableOpacity>
            <Text style={styles.headerText}>Sign Up</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.main}>
          <Image
            style={styles.mainImage}
            source={require("../assets/NanoSemicLogo_Black.png")}
          />
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => router.push("/sign-in")}
          >
            <Text style={styles.signInText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 19, color: "#000" }}>
            New to NanoSemic.pvt.ltd ?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-up")}
          >
            <Text
              style={{
                fontStyle: "italic",
                fontSize: 19,
                color: "#000",
                textDecorationLine: "underline",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
         <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#001840",
  },
  header: {
    flex: 0.07,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  himg: {
    width: 55,
    height: 55,
    borderRadius: 40,
    marginRight: 20,
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  main: {
    flex: 1,
    backgroundColor: "#001840",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: 300,
    height: 300,
    marginBottom: 150,
  },
  signInButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: 200,
  },
  signInText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#001840",
  },
  footer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});