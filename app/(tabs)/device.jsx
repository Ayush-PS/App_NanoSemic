import { Text, TouchableOpacity, View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Device 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Device 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Device 3',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);

const Device = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#FFA001' : '#001840';
        const color = item.id === selectedId ? 'black' : 'white';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <View style={styles.safeArea}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    );
};

export default Device;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#fff",
        marginBottom: 20,
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
        justifyContent: "center",
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
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        width: "100%",
        alignItems: "center",
    },
    dropdownText: {
        fontSize: 16,
    },
    item: {
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 8,
        borderRadius: 20,
    },
    title: {
        fontSize: 32,
    },
});
