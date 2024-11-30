import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Home, Search, Plus, Play, Bell, MoreHorizontal } from 'lucide-react-native';

export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Image */}
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-ngxEzJvdcIqy2YmXrBXGpaVvJ3GB2OVuZGLMDMznJZ5qv3DQu-5XAcTIDd0sWhjB08&usqp=CAU" }}
            style={styles.headerImage}
          />
          <TouchableOpacity style={styles.moreButton}>
            <MoreHorizontal color="#000" size={24} />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://static01.nyt.com/images/2021/05/09/fashion/07ELON-MEMES1print/merlin_186856077_79eae717-8121-4e4d-9a26-1137eb410690-superJumbo.jpg?quality=75&auto=webp" }}
            style={styles.profileImage}
          />
          
          <View style={styles.nameContainer}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Elon Musk</Text>
              <Image
                source={{ uri: "/placeholder.svg?height=20&width=20" }}
                style={styles.verifiedBadge}
              />
            </View>
            <Text style={styles.handle}>@elon_musk</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusButton}>
              <Text style={styles.plusButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>729</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>19M</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
          </View>

          {/* Bio */}
          <Text style={styles.bio}>
            Elon Reeve Musk is a businessman, investor, CEO of Tesla, CTO of SpaceX, Chairman of Neuralink, and Technical Engineer.
          </Text>

          {/* Birth Date */}
          <Text style={styles.birthDate}>28 June 1971</Text>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Replies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Media</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Articles</Text>
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
    backgroundColor: '#fff', // white background
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  moreButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  profileContainer: {
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#fff', // white border around the profile image
    marginTop: -40,
  },
  nameContainer: {
    marginTop: 8,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // black text for name
    marginRight: 8,
  },
  verifiedBadge: {
    width: 20,
    height: 20,
  },
  handle: {
    fontSize: 16,
    color: '#666', // dark gray text for handle
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8,
  },
  followButton: {
    backgroundColor: '#000', // black background for follow button
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    flex: 1,
  },
  followButtonText: {
    color: '#fff', // white text
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333', // dark border color
    flex: 1,
  },
  messageButtonText: {
    color: '#000', // black text
    fontWeight: 'bold',
    textAlign: 'center',
  },
  plusButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333', // dark border color
  },
  plusButtonText: {
    color: '#000', // black text
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 24,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statNumber: {
    color: '#000', // black color for stats numbers
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666', // dark gray color for stat labels
  },
  bio: {
    color: '#000', // black text for bio
    marginTop: 16,
    lineHeight: 20,
  },
  birthDate: {
    color: '#666', // dark gray for birth date
    marginTop: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333', // dark border for tab separator
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  tabText: {
    color: '#000', // black text for tabs
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // white background for bottom nav
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  navItem: {
    alignItems: 'center',
  },
});
