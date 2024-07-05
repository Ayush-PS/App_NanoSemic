import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const Home = () => {
  // const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);

  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await refetch();
  //   setRefreshing(false);
  // };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('');


  // const navigation = useNavigation < HomeScreenNavigationProp > ();

  const handleSelectDevice = (device) => {
    setSelectedDevice(device);
    setDropdownVisible(false);
    // navigation.navigate('Device', { selectedDevice: device });
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerMenuVisible(!hamburgerMenuVisible);
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    // <SafeAreaView className="bg-primary">
    //   <FlatList
    //     data={posts}
    //     keyExtractor={(item) => item.$id}
    //     renderItem={({ item }) => (
    //       <VideoCard
    //         title={item.title}
    //         thumbnail={item.thumbnail}
    //         video={item.video}
    //         creator={item.creator.username}
    //         avatar={item.creator.avatar}
    //       />
    //     )}
    //     ListHeaderComponent={() => (
    //       <View className="flex my-6 px-4 space-y-6">
    //         <View className="flex justify-between items-start flex-row mb-6">
    //           <View>
    //             <Text className="font-pmedium text-sm text-gray-100">
    //               Welcome Back
    //             </Text>
    //             <Text className="text-2xl font-psemibold text-white">
    //               JSMastery
    //             </Text>
    //           </View>

    //           <View className="mt-1.5">
    //             <Image
    //               source={images.logoSmall}
    //               className="w-9 h-10"
    //               resizeMode="contain"
    //             />
    //           </View>
    //         </View>

    //         <SearchInput />

    //         <View className="w-full flex-1 pt-5 pb-8">
    //           <Text className="text-lg font-pregular text-gray-100 mb-3">
    //             Latest Videos
    //           </Text>

    //           <Trending posts={latestPosts ?? []} />
    //         </View>
    //       </View>
    //     )}
    //     ListEmptyComponent={() => (
    //       <EmptyState
    //         title="No Videos Found"
    //         subtitle="No videos created yet"
    //       />
    //     )}
    //     refreshControl={
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }
    //   />
    // </SafeAreaView>
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
          <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Add Device</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Device 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Device 3</Text>
          </TouchableOpacity> */}
        </View>

      )}

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
      <View>

        <TouchableOpacity style={styles.addButton} onPress={toggleDropdown}>
          <Text style={styles.addButtonText}>SELECT DEVICE</Text>
          {dropdownVisible ? <Ionicons name="arrow-up" size={24} color="black" /> : <Ionicons name="arrow-down" size={24} color="black" />}
        </TouchableOpacity>
      </View>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <ScrollView style={{ width: '100%' }}>
            {['device 1', 'device 2', 'device 3', 'device 4', 'device 5', 'device 6'].map((device) => (
              <TouchableOpacity key={device} style={styles.dropdownItem} onPress={() => handleSelectDevice(device)}>
                <Text style={styles.dropdownText}>{device}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: "10%",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  himg: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 10,
  },
  headerText: {
    fontWeight: "400",
    fontSize: 18,
  },
  hamburgerMenu: {
    padding: 10,
  },
  hamburgerMenuDropdown: {
    position: "absolute",
    top: 125,
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
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
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