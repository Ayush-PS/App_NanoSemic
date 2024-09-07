import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";

const Profile = () => {
  // Dummy user data for now
  const user = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    profilePic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAMFBMVEXk5ueutLfn6eq4vcCrsbTh4+TY29yorrHN0dOxt7rd4OG1ur3T1tjFycu8wMPCxsi8+Gz1AAAD1ElEQVR4nO2b24KjKhBFtUTul///20GTntgmMUCZKs8Z1lP3U68GC0rYDkOn0+l0Op1Op9PpdDqdzkkAwGBlxs7Lj5dk1smMP5jgZ26hHQBSO6HE+CD/FrW9znhmxWi2gj+ewqTLaEqnng1/xjPOF9CEOagXo/jQHMPArQlyPFJcNZ1ktgxvZ3qrqTktIX4axrtl4LOcXZljtkxsjlOp42LJM5ZQ4cg244XPI6cl6DrHbEm/Etlax9x0ULccYD5LPQ1lJHasnuzVUpJK2gbFjKF8KiG0DCT1/tjmOI6OThFSq+RIN5RzQ2nfoCtw0K2O2dISSc6VG+IvSarNsX22F4gkZUk3/g5FszcianskWypbtu0NNN0vYGZ7HCcKx8HiJA3FIgQe80hmSYret61L2+ApJAPOUZBIJqQkxRrUJf8tSWzh0Ej+F5Yg7DpJcpAhkTsOTW+O27sdSUMJuJGMNK3ahHGkeslBVY4iOgBsOPXbSFKdDlSdQ++geSRxy7nyNI7LLVgzdKe9dfcOW0SgcsyvOc3rOeHhPrjGgaQqm5XGN0ayM7UbTQdrxPdN0HSyT9NbbCwb1kqSl9nfVC9DHBe1c22FTwzXtFDZoRN15HvLqnVIMEVvwFeMI1uipWJ7ZEzdgHwV/3qeasOaXwJbsPWIxBwAhI9vPEJQ9blHmnM8SIJdIaq2sCQT32TqhEjcObUHYFMW2guOhvth3AGDD9GIByYGeb1gL8BspdYhxhS0X8PH3EqvgN9w6+xYlayV3us73ktpb6HuK5A9bH4cJ2fMvV7EvYSMczFp5mlfo+86OaUOQr1CqTFqbwcW1SVaHqenhef1ailcDJ54Uc9/TaZ1Oylm+WeiH8hEYZDaHMa236FE8iTp+NxRTDVDuB9QE77doudSCSVP4aGnmuQ3Zx3yk4hUvHnGr1XRcU9WZzm6rxwUgD3+xqGWZdLPVgRdHHwvRIzp3DkHiznLf6955pyDxpb0G9SJHxUhUn4fECcdGoD80jDeUGccrGISnUWcEE5F5wQKLNHnG6gYYikGVT6lXy4hEShLGseF9iInmesbrvEcmKBmHoi2zyJA4wIhtZYtCVXMfXGbZcuqfnbX89myunhwOe1Gy1pHZHC3TbLyysw2XmgjLav6S3RorlHSVQ0lh2JGVWQrOarmTvk4zlyKFTFV0v1wRyy9Cpgjm2P595fIqClOsnBz5JztbFkoyai45CuLJGfSFm1PWX0z7TZ/KcqTYD8bwFIUXsTlik+QLGkrq/M+Z1PSClncF39oiipHxokX/dnx6bKVnBLHTqfz/+APXWkyEiWeyDsAAAAASUVORK5CYII=" // Dummy profile picture
  };

  // Dummy device data
  const devices = [
    { $id: 1, name: "Smart Light", status: "Active" },
    { $id: 2, name: "Thermostat", status: "Inactive" },
    { $id: 3, name: "Security Camera", status: "Active" }
  ];

  const logout = async () => {
    // Handle logout logic here
    console.log("User logged out");
    router.replace("sign-in");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.profilePic }}
          style={styles.profilePic}
          resizeMode="cover"
        />
        <Text style={styles.userName}>
          {user.name}
        </Text>
        <Text style={styles.userEmail}>
          {user.email}
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {/* User Info Section */}
        <View style={styles.content}>
          {/* Devices Info */}
          <View style={styles.devicesInfo}>
            <Text style={styles.devicesText}>Total Devices</Text>
            <Text style={styles.devicesCount}>{devices.length}</Text>
            <Text style={styles.totalDevicesText}>Devices</Text>
          </View>

          {/* User Devices Section */}
          {devices.length > 0 ? (
            <View style={styles.devicesList}>
              <Text style={styles.devicesHeading}>Connected Devices</Text>
              {devices.map((device) => (
                <View
                  key={device.$id}
                  style={styles.deviceCard}
                >
                  <Text style={styles.deviceName}>
                    {device.name}
                  </Text>
                  <Text style={styles.deviceStatus}>
                    Status: {device.status}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.noDevices}>
              <Text style={styles.noDevicesText}>No devices connected yet.</Text>
            </View>
          )}

          {/* Logout Button */}
          <TouchableOpacity
            onPress={logout}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001840',
  },
  header: {
    backgroundColor: '#001840',
    padding: 24,
    alignItems: 'center',
  },
  profilePic: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  userName: {
    color: '#FFA001',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  userEmail: {
    color: '#FFA001',
    fontSize: 16,
  },
  scrollView: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: "#fff",
    flex: 1, // Ensures ScrollView takes up remaining space
  },
  content: {
    padding: 24,
  },
  devicesInfo: {
    backgroundColor: '#FFA001',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  devicesText: {
    color: '#001840',
    fontSize: 26,
    fontWeight: 'bold',
  },
  devicesCount: {
    color: '#001840',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 8,
  },
  totalDevicesText: {
    color: '#001840',
    marginTop: 4,
  },

  devicesList: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  devicesHeading: {
    color: '#001840',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  deviceCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deviceStatus: {
    color: '#6B7280',
    marginTop: 4,
  },
  noDevices: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  noDevicesText: {
    color: '#6B7280',
  },
  logoutButton: {
    backgroundColor: '#001840',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
  },
  logoutButtonText: {
    color: '#FFA001',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
