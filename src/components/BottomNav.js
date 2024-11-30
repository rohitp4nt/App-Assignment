// src/components/BottomNav.js
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Home, Search, Plus, Play, Bell } from 'lucide-react-native';

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Home')} // Update to use 'Home' instead of 'HomeScreen'
      >
        <Home color="#000" size={24} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('Details')} >
        <Search color="#000" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Plus color="#000" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Play color="#000" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Bell color="#000" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default BottomNav;
