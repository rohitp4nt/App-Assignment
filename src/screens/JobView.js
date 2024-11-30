import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Home, Search, Plus, Play, Bell } from 'lucide-react-native';

const JobCard = ({ company, location, timeAgo, logo }) => (
  <View style={styles.jobCard}>
    <Image source={{ uri: logo }} style={styles.companyLogo} />
    <View style={styles.jobInfo}>
      <View style={styles.companyNameRow}>
        <Text style={styles.companyName}>{company}</Text>
        <Text style={styles.star}>★</Text>
      </View>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.timeAgo}>{timeAgo}</Text>
    </View>
  </View>
);

const NetworkAvatar = ({ image }) => (
  <Image source={{ uri: image }} style={styles.networkAvatar} />
);

const CategoryButton = ({ title }) => (
  <TouchableOpacity style={styles.categoryButton}>
    <Text style={styles.categoryButtonText}>{title}</Text>
  </TouchableOpacity>
);

const BottomNavButton = ({ icon: Icon }) => (
  <TouchableOpacity style={styles.navButton}>
    <Icon color="#000" size={24} />
  </TouchableOpacity>
);

export default function JobView({navigation}) {
  const jobs = [
    {
      id: '1',
      company: "SpaceX",
      location: "Hawthorne, California",
      timeAgo: "1 days Ago",
      logo: "https://play-lh.googleusercontent.com/Gcbg63BqBVa-0Ki--TjC-o26iaptfP0YgccBCei6jiyS8aRjWtKxNm-5ZwYGi87qXmg"
    },
    {
      id: '2',
      company: "Tesla",
      location: "Austin, Texas",
      timeAgo: "7 days Ago",
      logo: "https://play-lh.googleusercontent.com/Gcbg63BqBVa-0Ki--TjC-o26iaptfP0YgccBCei6jiyS8aRjWtKxNm-5ZwYGi87qXmg"
    },
    {
      id: '3',
      company: "Neuralink",
      location: "Fremont, California",
      timeAgo: "2 weeks Ago",
      logo: "https://play-lh.googleusercontent.com/Gcbg63BqBVa-0Ki--TjC-o26iaptfP0YgccBCei6jiyS8aRjWtKxNm-5ZwYGi87qXmg"
    }
  ];

  const networks = [
    { id: '1', image: "https://placeholder.com/60x60" },
    { id: '2', image: "https://placeholder.com/60x60" },
    { id: '3', image: "https://placeholder.com/60x60" },
    { id: '4', image: "https://placeholder.com/60x60" },
    { id: '5', image: "https://placeholder.com/60x60" }
  ];

  const categories = [
    ["Product", "Brands", "Business", "Assets"],
    ["Patents", "Models", "Portfolio", "Events"]
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>View Job's</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.jobList}>
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </View>

        <View style={styles.networksSection}>
          <Text style={styles.sectionTitle}>Networks</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.networksScroll}>
            {networks.map((network) => (
              <NetworkAvatar key={network.id} image={network.image} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoriesSection}>
          {categories.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.categoryRow}>
              {row.map((category) => (
                <CategoryButton key={category} title={category} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Home color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Details')}>
          <Search color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Details')}>
          <Plus color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Details')}>
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
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  jobList: {
    padding: 16,
  },
  jobCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  jobInfo: {
    flex: 1,
  },
  companyNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 4,
  },
  star: {
    color: '#FFD700',
    fontSize: 16,
  },
  location: {
    color: '#666666',
    fontSize: 14,
    marginTop: 2,
  },
  timeAgo: {
    color: '#999999',
    fontSize: 12,
    marginTop: 2,
  },
  networksSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  networksScroll: {
    flexDirection: 'row',
  },
  networkAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  categoriesSection: {
    padding: 16,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    padding: 8,
  },
});

