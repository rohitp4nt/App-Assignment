import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/components/Home';
import Search from '../src/components/Search';
import Reels from '../src/components/Reels';
import Profile from '../src/components/Profile';
import HeroSection from '../src/components/HeroSection';
import { Home as HomeIcon, Search as SearchIcon, Video, User } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') return <HomeIcon color={color} size={size} />;
            if (route.name === 'Search') return <SearchIcon color={color} size={size} />;
            if (route.name === 'Reels') return <Video color={color} size={size} />;
            if (route.name === 'Profile') return <User color={color} size={size} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Hero" component={HeroSection} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
