// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import TimesOfIndia from './src/screens/TimesOfIndia'
import ProfileScreen from './src/screens/ProfileScreen'
import AIDirectory from './src/screens/AIDirectory.js';
import JobView from './src/screens/JobView.js';
import SocialPost from './src/screens/SocialPost.js';
import SplashScreen from './src/screens/SplashScreen.js';

// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TimesOfIndia" component={TimesOfIndia} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AIDirectory" component={AIDirectory} options={{ headerShown: false }} />
        <Stack.Screen name="JobView" component={JobView} options={{ headerShown: false }} />
        <Stack.Screen name="SocialPost" component={SocialPost} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
