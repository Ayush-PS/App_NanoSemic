import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, StyleSheet, Platform } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import * as Location from 'expo-location';

const App = () => {
  // const [manager] = useState(new BleManager());
  // const [devices, setDevices] = useState([]);
  // const [connectedDevice, setConnectedDevice] = useState(null);

  // // useEffect(() => {
  // //   requestPermissions();

  // //   return () => {
  // //     manager.destroy();
  // //   };
  // // }, []);

  // // const requestPermissions = async () => {
  // //   if (Platform.OS === 'android') {
  // //     const { status } = await Location.requestForegroundPermissionsAsync();
  // //     if (status !== 'granted') {
  // //       alert('Permission to access location was denied');
  // //     }
  // //   }
  // // };

  // const scanAndConnect = () => {
  //   manager.startDeviceScan(null, null, (error, device) => {
  //     if (error) {
  //       console.error(error);
  //       return;
  //     }

  //     if (device && device.name && !devices.find(d => d.id === device.id)) {
  //       setDevices(prevDevices => [...prevDevices, device]);
  //     }
  //   });
  // };

  // const connectToDevice = async (device) => {
  //   manager.stopDeviceScan();

  //   try {
  //     const connectedDevice = await device.connect();
  //     await connectedDevice.discoverAllServicesAndCharacteristics();
  //     setConnectedDevice(connectedDevice);
  //     console.log('Connected to', connectedDevice.name);
  //   } catch (error) {
  //     console.error('Connection error', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* <Button title="Scan for devices" onPress={scanAndConnect} />
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceItem}>
            <Text>{item.name}</Text>
            <Button title="Connect" onPress={() => connectToDevice(item)} />
          </View>
        )}
      />
      {connectedDevice && (
        <Text>Connected to: {connectedDevice.name}</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  deviceItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
