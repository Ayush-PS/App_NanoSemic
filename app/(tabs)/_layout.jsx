import { StatusBar } from "expo-status-bar";
import { Link, Redirect, Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { icons } from "../../constants";
import { Loader } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('');


  // const navigation = useNavigation < HomeScreenNavigationProp > ();

  const handleSelectDevice = (device) => {
    setSelectedDevice(device);
    setDropdownVisible(false);
    // navigation.navigate('Device', { selectedDevice: device });
  };



  const toggleHamburgerMenu = () => {
    setHamburgerMenuVisible(!hamburgerMenuVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          style={styles.himg}
          source={require("../../assets/NanoSemicLogo_whiteBG.jpg")}
        />
        <Text style={styles.headerText}>NANO SEMIC</Text>
        <TouchableOpacity style={styles.hamburgerMenu} onPress={toggleHamburgerMenu}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {hamburgerMenuVisible && (


        <View style={styles.hamburgerMenuDropdown}>
          <Link style={styles.hamburgerMenuItem} href='/about' onPress={toggleHamburgerMenu}>
            <Ionicons name="information-circle" size={24} color="black" />
            <Text style={styles.hamburgerMenuText}> About</Text>
          </Link>
          {/* <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Device 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Device 3</Text>
          </TouchableOpacity> */}
        </View>
      )}
      {/* <Stack>

        <Stack.Screen name="home" options={{ headerShown: false }} /> 
        <Stack.Screen name="about" options={{ headerShown: false }} /> 
      </Stack> */}

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#001840",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
            // display: 'none'
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="device"
          options={{
            title: "Device",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.devices}
                color={color}
                name="device"
                focused={focused}
              />
            ),
          }}
        // initialParams={{ selectedDevice: device }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Hstory"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"

          options={{
            title: "About",
            tabBarButton: () => null, // This will hide the tab from the navigation bar
            headerShown: false
          }}
        />
      </Tabs>

      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#001840" style="light" />
    </SafeAreaView>
  );
};

export default TabLayout;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
  },
  himg: {
    width: 55,
    height: 55,

  },
  headerText: {
    fontWeight: "400",
    fontSize: 20,
  },
  hamburgerMenu: {
    padding: 10,
  },
  hamburgerMenuDropdown: {
    position: "absolute",
    top: '15%',
    right: 25,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1,

  },
  hamburgerMenuItem: {
    flexDirection: 'row',
    padding: 10,
    // borderBottomWidth: 1,
    // borderColor: "#ccc",
  },
  hamburgerMenuText: {
    fontSize: 16,
  },
  imgContainer: {
    flex: 0.7,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  centerImg: {
    margin: 30,
    width: 150,
    height: 150,
  },
  logoImg: {
    width: 220,
    height: 220,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: "center"
  },
  addButtonText: {
    fontSize: 16,
    color: "black",
    marginLeft: 5,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    // margin:10,
    position: "absolute",
    top: 620,
    alignItems: "center",
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    maxHeight: 150,
    overflow: "hidden",
    // zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    alignItems: "center",
    // backgroundColor: "red"
  },
  dropdownText: {
    fontSize: 16,
  },
});