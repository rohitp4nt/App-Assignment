import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Home,
  Search,
  Plus,
  Play,
  Bell,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  BarChart2,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function SocialPost({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Main Image with Overlay */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: '/placeholder.svg?height=800&width=400' }}
            style={styles.mainImage}
            resizeMode="cover"
          />
          
          {/* Right Side Actions */}
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Heart color="white" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MessageCircle color="white" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Share2 color="white" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Bookmark color="white" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <BarChart2 color="white" size={28} />
            </TouchableOpacity>
          </View>

          {/* Bottom Content Overlay */}
          <View style={styles.overlay}>
            <View style={styles.profileSection}>
              <Image
                source={{ uri: '/placeholder.svg?height=32&width=32' }}
                style={styles.profileImage}
              />
              <View style={styles.textContent}>
                <Text style={styles.title}>Billionaire lifestyle</Text>
                <Text style={styles.description}>
                  Billionaire travels Across the worlds.{'\n'}
                  #Billionaire #Rome #lifestyle
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Home color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Details')}>
          <Search color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SocialPost')}>
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
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  mainImage: {
    width: width,
    height: '100%',
  },
  actions: {
    position: 'absolute',
    right: 16,
    top: '40%',
    transform: [{ translateY: -100 }],
    alignItems: 'center',
    gap: 20,
  },
  actionButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 80,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#333',
  },
  textContent: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navButton: {
    padding: 8,
  },
});

