import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';

const About = () => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => {
        setExpanded(!expanded);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>About Us</Text>
                <Text style={styles.expandedText}>
                    Nano Semic Pvt. Ltd. is one of the brand new members in the discrete semiconductor innovation space. The creation of advanced sensing platforms, specialized sensing materials and layers, characterization kits, and other smart sensor products based on semiconductors is our primary area of expertise.
                </Text>
            </View>
            {/* {expanded && (
                <Text style={styles.expandedText}>
                    Nano Semic Pvt. Ltd. is one of the brand new members in the discrete semiconductor innovation space. The creation of advanced sensing platforms, specialized sensing materials and layers, characterization kits, and other smart sensor products based on semiconductors is our primary area of expertise.
                </Text>
            )} */}
            <View style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Our Company</Text>
                <Text style={styles.expandedText}>
                    Nano Semic Pvt. Ltd. was founded in 2024 and is presently incubated with IIT Bhubaneswar Research and Entrepreneurship Park. We are a semiconductor products and services company. We aim to develop semiconductor-based sensors and sensor-related products including sensing platforms, sensing layers, and characterization kits.
                </Text>
                <Text style={styles.expandedText}>
                    Our products would cater to a wide range of applications such as:
                </Text>
                <Text style={styles.bulletPoint}>
                    • Industries and residential complexes for sensing gas leaks, pollutants in water etc.
                </Text>
                <Text style={styles.bulletPoint}>
                    • Healthcare sector for non-invasive disease diagnosis.
                </Text>
                <Text style={styles.bulletPoint}>
                    • Universities and schools for research, teaching, and training.
                </Text>
            </View>
            {/* {expanded && (
                <Text style={styles.expandedText}>
                    Nano Semic Pvt. Ltd. is one of the brand new members in the discrete semiconductor innovation space. The creation of advanced sensing platforms, specialized sensing materials and layers, characterization kits, and other smart sensor products based on semiconductors is our primary area of expertise.
                </Text>
            )} */}
            <View style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Mission</Text>
                <Text style={styles.expandedText}>
                    Nano Semic Pvt. Ltd. is one of the brand new members in the discrete semiconductor innovation space. The creation of advanced sensing platforms, specialized sensing materials and layers, characterization kits, and other smart sensor products based on semiconductors is our primary area of expertise.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 0,
    },
    aboutUsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 10,
    },
    expandedText: {
        fontSize: 16,
        fontWeight: '300',
        color: 'white',
        textAlign: 'justify',
        lineHeight: 22,
        marginTop: 10,
        marginRight: 5,
    },
    button: {
        backgroundColor: '#001840',
        padding: 10,
        borderRadius: 5,
        marginVertical: 3,
        marginHorizontal: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    bulletPoint: {
        fontSize: 16,
        fontWeight: '300',
        color: 'white',
        textAlign: 'justify',
        lineHeight: 22,
        paddingLeft: 10,
    },
});

export default About;
