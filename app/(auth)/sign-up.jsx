import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { images } from "../../constants";
// import { createUser } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submit = async () => {
    // if (form.username === "" || form.email === "" || form.password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }

    // setSubmitting(true);
    // try {
    // const result = await createUser(form.email, form.password, form.username);
    // setUser(result);
    setIsLogged(true);

    router.replace("/home");
    // } catch (error) {
    //   Alert.alert("Error", error.message);
    // } finally {
    //   setSubmitting(false);
    // }
  };

  return (
    // <SafeAreaView className="bg-primary h-full">
    //   <ScrollView>
    //     <View
    //       className="w-full flex justify-center h-full px-4 my-6"
    //       style={{
    //         minHeight: Dimensions.get("window").height - 100,
    //       }}
    //     >
    //       <Image
    //         source={images.logo}
    //         resizeMode="contain"
    //         className="w-[115px] h-[34px]"
    //       />

    //       <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
    //         Sign Up to Aora
    //       </Text>

    //       <FormField
    //         title="Username"
    //         value={form.username}
    //         handleChangeText={(e) => setForm({ ...form, username: e })}
    //         otherStyles="mt-10"
    //       />

    //       <FormField
    //         title="Email"
    //         value={form.email}
    //         handleChangeText={(e) => setForm({ ...form, email: e })}
    //         otherStyles="mt-7"
    //         keyboardType="email-address"
    //       />

    //       <FormField
    //         title="Password"
    //         value={form.password}
    //         handleChangeText={(e) => setForm({ ...form, password: e })}
    //         otherStyles="mt-7"
    //       />

    //       <CustomButton
    //         title="Sign Up"
    //         handlePress={submit}
    //         containerStyles="mt-7"
    //         isLoading={isSubmitting}
    //       />

    //       <View className="flex justify-center pt-5 flex-row gap-2">
    //         <Text className="text-lg text-gray-100 font-pregular">
    //           Have an account already?
    //         </Text>
    //         <Link
    //           href="/sign-in"
    //           className="text-lg font-psemibold text-secondary"
    //         >
    //           Login
    //         </Link>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

    <SafeAreaView style={styles.safeArea}>
      <View>

        <View style={styles.header}>
          <Image
            style={styles.himg}
            source={require("../../assets/NanoSemicLogo_whiteBG.jpg")}
          />
          <Text style={styles.headerText}>
            NANO SEMIC
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.centerImg}
            // source={require('../../assets/NanoSemicLogo_Black.png')}
            source={require('../../assets/test.png')}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#333"
            keyboardType="email-address"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#333"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#333"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          {/* <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity> */}

          <TouchableOpacity style={styles.loginButton} onPress={submit}>
            <Text style={styles.loginButtonText}>Register</Text>

          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Have an account? </Text>
            {/* <TouchableOpacity onPress={navigateToLogin}>
              <Text
                style={{
                  fontWeight: '500',
                  // fontStyle: "italic",
                  fontSize: 14,
                  color: "black",
                  textDecorationLine: "underline",
                }}
              >
                Login
              </Text>
            </TouchableOpacity> */}
            <Link
              href="/sign-in"
              style={{
                fontWeight: '500',
                // fontStyle: "italic",
                fontSize: 14,
                color: "black",
                textDecorationLine: "underline",
              }}
            >
              Login
            </Link>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SignUp;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    top: 15,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    paddingTop: "10%",
    backgroundColor: "#fff",
  },
  himg: {
    // Image: Logo WBG;
    width: 50,
    height: 50,
    margin: 5,
    marginRight: 13,
    gap: 0,
    borderRadius: 10,
    opacity: 1,

  },
  centerImg: {
    width: 238,
    height: 236,
    // color: 'black',
  },
  headerText: {

    fontWeight: "400",
    fontSize: 18,
  },
  imgContainer: {
    // backgroundColor: 'red',
    height: 336,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  inputContainer: {
    marginTop: 0,
    paddingHorizontal: 20,
    alignItems: 'center',
    // backgroundColor:'black',

  },
  input: {
    width: 266,
    height: 40,
    backgroundColor: "white",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    fontSize: 16,
    fontWeight: '500'

  },
  forgotPasswordButton: {
    width: 266,
    alignItems: "flex-end",
    marginTop: 5,
    // backgroundColor: 'red'
  },
  forgotPasswordText: {
    justifyContent: 'flex-end',
    color: "black",
    fontSize: 12,
    fontWeight: '500'
  },
  loginButton: {
    width: 152,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: "center",
    marginBottom: 10,

  },
  loginButtonText: {
    fontSize: 18,
    color: "black",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16
  }
})