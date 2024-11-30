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
} from 'react-native';
import { ArrowLeft, Home, Search, Plus, Play, Bell } from 'lucide-react-native';

export default function NewsFeed() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Image 
            source={{ uri: "/placeholder.svg?height=32&width=32" }}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Times of India</Text>
        </View>
      </View>

      {/* News Feed */}
      <ScrollView style={styles.feed}>
        {/* News Item 1 */}
        <View style={styles.newsItem}>
          <View style={styles.newsHeader}>
            <Image 
              source={{ uri: "/placeholder.svg?height=32&width=32" }}
              style={styles.authorLogo}
            />
            <View>
              <Text style={styles.authorName}>Times of India</Text>
              <Text style={styles.timeAgo}>1d ago</Text>
            </View>
          </View>
          <Text style={styles.newsText}>
            NEW DELHI: Ace wrestler Vinesh Phogat is probably going to run in the next Haryana Assembly polls, people close to her informed IANS on Tuesday.
          </Text>
          <Image 
            source={{ uri: "/placeholder.svg?height=200&width=400" }}
            style={styles.newsImage}
          />
        </View>

        {/* News Item 2 */}
        <View style={styles.newsItem}>
          <View style={styles.newsHeader}>
            <Image 
              source={{ uri: "/placeholder.svg?height=32&width=32" }}
              style={styles.authorLogo}
            />
            <View>
              <Text style={styles.authorName}>Times of India</Text>
              <Text style={styles.timeAgo}>1d ago</Text>
            </View>
          </View>
          <Text style={styles.newsText}>
            NEW DELHI: The Reserve Bank of India on Tuesday announced that the RBI Governor Shaktikanta Das has received an "A+" rating in the Global Finance Central Banker Report Cards 2024 for the second consecutive year. – RBI (@RBI)
          </Text>
          <Image 
            source={{ uri: "/placeholder.svg?height=200&width=400" }}
            style={styles.newsImage}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ff0000',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  feed: {
    flex: 1,
    backgroundColor: '#000',
  },
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  newsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: '#ff0000',
  },
  authorName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#666',
    fontSize: 14,
  },
  newsText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#333',
  },
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

