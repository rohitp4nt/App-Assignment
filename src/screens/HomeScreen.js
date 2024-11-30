import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import { Home, Search, Plus, Play, Bell, ChevronLeft, LayoutGrid, LineChart, User, Pencil, Bot } from 'lucide-react-native';



const STORIES = [
  { id: '1', type: 'OpenAI', image: 'https://pbs.twimg.com/profile_images/651768664056696832/xht4j-S5_400x400.jpg' },
  { id: '2', type: 'Profile 1', image: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/08/Jimmy-Donaldson-MrBeast-getty-H-2024.jpg?w=1296&h=730&crop=1' },
  { id: '3', type: 'Profile 2', image: 'https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg?w=385' },
  { id: '4', type: 'Rohit', image: 'https://media.licdn.com/dms/image/v2/D5603AQHvA2kkWgVtcQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732479790107?e=1738195200&v=beta&t=2waa83ml04ozZT9wexW73GTQ7j4HOaz_UrToP_QeXyU' },
  { id: '5', type: 'Profile 3', image: 'https://www.nasa.gov/wp-content/uploads/2023/05/nasa_meatball_1_2.jpeg' },
  { id: '6', type: 'Apple', image: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/08/Jimmy-Donaldson-MrBeast-getty-H-2024.jpg?w=1296&h=730&crop=1' },
];
export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      
      {/* Top Icons */}
      <View style={styles.topIcons}>
        <LayoutGrid size={22} color="#000" onPress={() => navigation.navigate('JobView')} />
        <Bot size={22}  onPress={() => navigation.navigate('AIDirectory')}/>
        <User size={22} color="#000"  onPress={() => navigation.navigate('ProfileScreen')} />
      </View>

      {/* Stories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
        contentContainerStyle={styles.storiesContent}
      >
        {STORIES.map((story) => (
          <View key={story.id} style={styles.storyCircle}>
            <Image 
              source={{ uri: story.image }}
              style={styles.storyImage}
            />
          </View>
        ))}
      </ScrollView>

      {/* Header */}
      <View style={styles.header} >
        <TouchableOpacity style={styles.backButton} >
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>TOI</Text>
          </View>
          <Text style={styles.titleText}  onPress={() => navigation.navigate('TimesOfIndia')}>Times of India</Text>
        </View>
      </View>

      {/* News Feed */}
      <ScrollView style={styles.feed}>
        {/* News Item 1 */}
        <View style={styles.newsItem}>
          <View style={styles.newsHeader}>
            <View style={styles.newsLogoCircle}>
              <Text style={styles.newsLogoText}>TOI</Text>
            </View>
            <View style={styles.newsHeaderText}>
              <Text style={styles.newsSource}>Times of India</Text>
              <Text style={styles.timeAgo}>1d ago</Text>
            </View>
          </View>
          <Text style={styles.newsContent}>
            NEW DELHI: Ace wrestler Vinesh Phogat is probably going to run in the next Haryana Assembly polls, people close to her informed IANS on Tuesday.
          </Text>
          <Image 
            source={{ uri: "https://media.assettype.com/newindianexpress%2F2024-08-06%2Facdhrkwr%2FVinesh%20Phogat%20Semi.jpg?rect=0%2C9%2C3341%2C1879&w=1024&auto=format%2Ccompress&fit=max" }}
            style={styles.newsImage}
          />
        </View>

        {/* News Item 2 */}
        <View style={styles.newsItem}>
          <View style={styles.newsHeader}>
            <View style={styles.newsLogoCircle}>
              <Text style={styles.newsLogoText}>TOI</Text>
            </View>
            <View style={styles.newsHeaderText}>
              <Text style={styles.newsSource}>Times of India</Text>
              <Text style={styles.timeAgo}>1d ago</Text>
            </View>
          </View>
          <Text style={styles.newsContent}>
            NEW DELHI: The Reserve Bank of India on Tuesday announced that the RBI Governor Shaktikanta Das has received an "A+" rating in the Global Finance Central Banker Report Cards 2024 for the second consecutive year. – RBI (@RBI)
          </Text>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: "https://pbs.twimg.com/profile_images/651768664056696832/xht4j-S5_400x400.jpg" }}
              style={styles.newsImage}
            />
            <TouchableOpacity style={styles.editButton}>
              <Pencil size={16} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Home color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Details')}>
          <Search color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} >
          <Plus color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SocialPost')}>
          <Play color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} >
          <Bell color="#000" size={24} />
        </TouchableOpacity>
      </View>

      {/* Home Indicator */}
      {Platform.OS === 'ios' && <View style={styles.homeIndicator} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    gap: 24,
  },
  middleIcon: {
    marginHorizontal: 0,
  },
  storiesContainer: {
    maxHeight: 84,
    marginBottom: 12,
    marginTop:12,
  },
  storiesContent: {
    paddingHorizontal: 16,
    gap: 12,
    flexDirection: 'row',
  },
  storyCircle: {
    width: 64,
    height: 64,
    borderRadius: 33,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  storyImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  backButton: {
    marginRight: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e32b24',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  feed: {
    flex: 1,
  },
  newsItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  newsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  newsLogoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e32b24',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  newsLogoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  newsHeaderText: {
    flex: 1,
  },
  newsSource: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  timeAgo: {
    fontSize: 13,
    color: '#666',
    marginTop: 1,
  },
  newsContent: {
    fontSize: 15,
    lineHeight: 20,
    color: '#000',
    marginBottom: 12,
  },
  imageContainer: {
    position: 'relative',
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  editButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 8,
  },
});

