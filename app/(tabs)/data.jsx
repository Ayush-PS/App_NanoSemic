import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart, BarChart, ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Safe threshold for arsenic in ppb (parts per billion)
const safeThreshold = 10;

const Data = () => {
  // Simulating real-time data update from the arsenic sensor
  const [arsenicLevels, setArsenicLevels] = useState([10, 25, 18, 30, 40]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate sensor data update
      setArsenicLevels(prevLevels => [
        ...prevLevels.slice(1),
        Math.floor(Math.random() * 50),
      ]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Data for LineChart depicting arsenic levels over time
  const lineData = {
    labels: ['5s ago', '4s ago', '3s ago', '2s ago', '1s ago', 'Now'],
    datasets: [
      {
        data: arsenicLevels,
        color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Blue color for trend line
      },
    ],
  };

  // Data for BarChart showing real-time arsenic levels across multiple sources (simulated)
  const barData = {
    labels: ['Region 1', 'Region 2', 'Region 3', 'Region 4'],
    datasets: [
      {
        data: [arsenicLevels[0], arsenicLevels[1], arsenicLevels[2], arsenicLevels[3]], // Simulated real-time data
      },
    ],
  };

  // Progress Chart (Gauge-like) to show current arsenic level vs safe threshold
  const progressData = {
    labels: ['Current Arsenic Level'],
    data: [arsenicLevels[arsenicLevels.length - 1] / 50], // Normalize between 0 and 1 for the gauge
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Arsenic Sensor Dashboard</Text>

      <View style={styles.warning}>
        {arsenicLevels[arsenicLevels.length - 1] > safeThreshold ? (
          <Text style={styles.warningText}>Warning: Arsenic level above safe threshold!</Text>
        ) : (
          <Text style={styles.safeText}>Arsenic levels are within safe limits.</Text>
        )}
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Real-Time Arsenic Levels (Last 5 Updates)</Text>
        <LineChart
          data={lineData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Arsenic Levels by Region (Simulated)</Text>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Red color for bar chart
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Arsenic Level Progress</Text>
        <ProgressChart
          data={progressData}
          width={screenWidth - 40}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Green for safe, can dynamically change based on thresholds
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          hideLegend={false}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  warning: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFF3CD',
    borderRadius: 10,
    borderColor: '#FFEEBA',
    borderWidth: 1,
  },
  warningText: {
    color: '#856404',
    textAlign: 'center',
  },
  safeText: {
    color: '#155724',
    textAlign: 'center',
  },
  chartContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  chart: {
    borderRadius: 16,
  },
});

export default Data;
