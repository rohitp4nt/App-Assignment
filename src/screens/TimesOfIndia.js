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

export default function TimesOfIndia({ navigation }) {
  const news = [
    {
      id: 1,
      title:
        "Ace wrestler Vinesh Phogat is probably going to run in the next Haryana Assembly polls, people close to her informed IANS on Tuesday.",
      author: "Times of India",
      time: "1d ago",
      image: "https://media.assettype.com/newindianexpress%2F2024-08-06%2Facdhrkwr%2FVinesh%20Phogat%20Semi.jpg?rect=0%2C9%2C3341%2C1879&w=1024&auto=format%2Ccompress&fit=max",
    },
    {
      id: 2,
      title:
        "The Reserve Bank of India on Tuesday announced that the RBI Governor Shaktikanta Das has received an 'A+' rating in the Global Finance Central Banker Report Cards 2024 for the second consecutive year.",
      author: "Times of India",
      time: "1d ago",
      image: "https://images.hindustantimes.com/img/2024/08/10/550x309/ANI-20240810165-0_1723298378805_1723298420403.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft color="#000" size={24} onPress={() => navigation.navigate('Home')}/>
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Image
            source={{ uri: "https://pbs.twimg.com/profile_images/651768664056696832/xht4j-S5_400x400.jpg" }}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Times of India</Text>
        </View>
      </View>

      {/* News Feed */}
      <ScrollView style={styles.feed}>
        {news.map((item) => (
          <View key={item.id} style={styles.newsItem}>
            <View style={styles.newsHeader}>
              <Image
                source={{ uri: "https://pbs.twimg.com/profile_images/651768664056696832/xht4j-S5_400x400.jpg" }}
                style={styles.authorLogo}
              />
              <View>
                <Text style={styles.authorName}>{item.author}</Text>
                <Text style={styles.timeAgo}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.newsText}>{item.title}</Text>
            <Image source={{ uri: item.image }} style={styles.newsImage} />
          </View>
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
        <TouchableOpacity style={styles.navItem} >
          <Play color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Details')}>
          <Bell color="#000" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // White header
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
  },
  headerText: {
    color: '#000', // Black text
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  feed: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light feed background
  },
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Light border
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
  },
  authorName: {
    color: '#000', // Black text
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#666', // Gray text
    fontSize: 14,
  },
  newsText: {
    color: '#000', // Black text
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#e0e0e0', // Light gray placeholder
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff', // White navbar
  },
  navItem: {
    alignItems: 'center',
  },
});
