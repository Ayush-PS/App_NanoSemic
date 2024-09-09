import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Modal, Pressable, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';

// Dummy device data
const DUMMY_DEVICES = [
  { id: '1', name: 'Device A', data: 'Data from Device A...' },
  { id: '2', name: 'Device B', data: 'Data from Device B...' },
  { id: '3', name: 'Device C', data: 'Data from Device C...' },
  { id: '4', name: 'Device D', data: 'Data from Device D...' },
];

// Item component for each device
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
  </TouchableOpacity>
);

const Devices = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(''); // For custom alert
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to handle device connection
  const handleConnect = (device) => {
    setConnectedDevice(device);
    setAlertMessage(`Connected to ${device.name}`);
    setIsModalVisible(true);
  };

  // Function to handle scanning for devices
  const handleScan = () => {
    setIsLoading(true); // Show loading indicator
    setTimeout(() => {
      setIsLoading(false); // Hide loading after 2 seconds
      setAlertMessage('Scanning for devices...');
      setIsModalVisible(true);
    }, 2000);
  };

  // Rendering each item
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#FFA001' : '#001840';
    const color = item.id === selectedId ? 'black' : 'white';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          handleConnect(item);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.buttonText}>Scan for Devices</Text>
      </Pressable>

      <FlatList
        data={DUMMY_DEVICES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={selectedId}
      />

      {connectedDevice && (
        <View style={styles.connectedContainer}>
          <Text style={styles.connectedText}>Connected to: {connectedDevice.name}</Text>
          <Link href="/data" style={styles.link}>
            <Text style={styles.linkText}>View Data</Text>
          </Link>
        </View>
      )}

      {/* Custom Alert Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.customAlert}>
            <Text style={styles.alertText}>{alertMessage}</Text>
            <Pressable
              style={[styles.scanButton, { backgroundColor: '#FFA001' }]}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Loading Indicator */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Scanning...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  connectedContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  connectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  scanButton: {
    backgroundColor: '#005A9C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#005A9C',
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  customAlert: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
  },
});

export default Devices;
