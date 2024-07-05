import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Device = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

    // const route = useRoute < DeviceScreenRouteProp > ();
    // const { selectedDevice } = route.params;

    // const navigation = useNavigation < StackNavigationProp < RootStackParamList >> ();

    // const toggleDropdown = () => {
    //     setDropdownVisible(!dropdownVisible);
    // };

    // const toggleHamburgerMenu = () => {
    //     setHamburgerMenuVisible(!hamburgerMenuVisible);
    // };
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Image
                    style={styles.himg}
                    source={require("../../assets/NanoSemicLogo_whiteBG.jpg")}
                />
                <Text style={styles.headerText}>NANO SEMIC</Text>
            </View>



            <View style={styles.imgContainer}>
                <Image
                    style={styles.logoImg}
                    source={require("../../assets/test.png")}
                />
            </View>

            <View style={styles.deviceInfoContainer}>
                <Text style={styles.deviceInfoText}>{selectedDevice}: Arsenic%</Text>
            </View>
            <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>

                {/* <LineGraph /> */}
                <TouchableOpacity style={styles.loginButton} >
                    <Text style={styles.loginButtonText}>More Details</Text>

                </TouchableOpacity>
            </View>
            {/* <View style={styles.deviceInfoContainer}>
                <Text style={styles.deviceInfoText}>Arsenic %</Text>
            </View> */}

        </SafeAreaView>
    );
};

export default Device;
