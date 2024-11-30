import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kelpetern</Text>
      <Text style={styles.subtitle}>from OZY VERSE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Background color
    position: 'relative', // Allows absolute positioning
  },
  title: {
    fontSize: 36, // Main title font size
    fontWeight: 'bold',
    color: 'black', // Main title text color
  },
  subtitle: {
    position: 'absolute', // Positions subtitle at the bottom
    bottom: 30, // Adjust distance from bottom
    fontSize: 16, // Subtitle font size
    color: 'gray', // Subtitle text color
  },
});

export default SplashScreen;
