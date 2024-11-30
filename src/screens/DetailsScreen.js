import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import { Home, Search, Plus, Play, Bell } from 'lucide-react-native';

const TRENDING_USERS = [
  {
    id: '1',
    name: 'Elon musk',
    username: '@elon_musk',
    avatar: 'https://static01.nyt.com/images/2021/05/09/fashion/07ELON-MEMES1print/merlin_186856077_79eae717-8121-4e4d-9a26-1137eb410690-superJumbo.jpg?quality=75&auto=webp'
  },
  {
    id: '2',
    name: 'Anushaksen',
    username: '@anushka',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Anushka_Sen_snapped_at_Amazon_Prime_Video_India%27s_announcement_slate_2024.jpg'
  },
  {
    id: '3',
    name: 'Anushaksen',
    username: '@anushka',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Anushka_Sen_snapped_at_Amazon_Prime_Video_India%27s_announcement_slate_2024.jpg'
  },
  {
    id: '4',
    name: 'Anushaksen',
    username: '@anushka',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Anushka_Sen_snapped_at_Amazon_Prime_Video_India%27s_announcement_slate_2024.jpg'
  },
  {
    id: '5',
    name: 'Anushaksen',
    username: '@ansuhak',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Anushka_Sen_snapped_at_Amazon_Prime_Video_India%27s_announcement_slate_2024.jpg'
  },
  {
    id: '6',
    name: 'Anushaksen',
    username: '@ansuhak',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Anushka_Sen_snapped_at_Amazon_Prime_Video_India%27s_announcement_slate_2024.jpg'
  },
];

const HASHTAGS = ['millionairelifestyles', 'samaltman', 'openai'];

export default function TrendingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#666" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#666"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Hashtags */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.hashtagsContainer}
        contentContainerStyle={styles.hashtagsContent}
      >
        {HASHTAGS.map((tag) => (
          <TouchableOpacity key={tag} style={styles.hashtagButton}>
            <Text style={styles.hashtagText}>#{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Trending Section */}
      <View style={styles.trendingHeader}>
        <Text style={styles.trendingTitle}>Trending</Text>
      </View>

      {/* Trending Users */}
      <ScrollView style={styles.trendingList}>
        {TRENDING_USERS.map((user) => (
          <TouchableOpacity key={user.id} style={styles.userItem} onPress={() => navigation.navigate('ProfileScreen')}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userHandle}>{user.username}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  searchContainer: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F7',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#000',
  },
  hashtagsContainer: {
    maxHeight: 36,
    marginBottom: 16,
  },
  hashtagsContent: {
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: 'row',
  },
  hashtagButton: {
    backgroundColor: '#F2F3F7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  hashtagText: {
    fontSize: 14,
    color: '#666',
  },
  trendingHeader: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  trendingTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  trendingList: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F3F7',
  },
  userInfo: {
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  userHandle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
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

