import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import { Grid, Home, Search, Plus, Play, Bell } from 'lucide-react-native';

const CategoryRow = ({ title, items }) => (
  <View style={styles.categorySection}>
    <Text style={styles.categoryTitle}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.iconRow}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.iconButton}>
          <Image
            source={{ uri: item.icon }}
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default function AIDirectory({navigation}) {
  const chatbots = [
    { id: '1', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWn_rtuyxZY3LgtaUgRbvAvCXOyEjIbjqqQ&s' },
    { id: '2', icon: 'https://miro.medium.com/v2/resize:fit:2000/1*AsXti9JBcuEGIODbisEAYw.jpeg' },
    { id: '3', icon: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2024/01/image-108.png' },
    { id: '4', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKqWKPwtSFzq42wcMUpgdDCSqGwdKJIZ7sg&s' },
  ];

  const generative = [
    { id: '1', icon: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwZw935w9sVkUUPQtSAmV7mzln8c6UOnTnW7RK8PCYejCqTAtnAhS452Ec9H2kfGF2E-&format=source' },
    { id: '2', icon: 'https://play-lh.googleusercontent.com/Gcbg63BqBVa-0Ki--TjC-o26iaptfP0YgccBCei6jiyS8aRjWtKxNm-5ZwYGi87qXmg' },
    { id: '3', icon: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwZw935w9sVkUUPQtSAmV7mzln8c6UOnTnW7RK8PCYejCqTAtnAhS452Ec9H2kfGF2E-&format=source' },
  ];

  const productivity = [
    { id: '1', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWn_rtuyxZY3LgtaUgRbvAvCXOyEjIbjqqQ&s' },
    { id: '2', icon: 'https://miro.medium.com/v2/resize:fit:2000/1*AsXti9JBcuEGIODbisEAYw.jpeg' },
    { id: '3', icon: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2024/01/image-108.png' },
    { id: '4', icon: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwZw935w9sVkUUPQtSAmV7mzln8c6UOnTnW7RK8PCYejCqTAtnAhS452Ec9H2kfGF2E-&format=source' },
  ];

  const assistant = [
    { id: '1', icon: 'https://play-lh.googleusercontent.com/Gcbg63BqBVa-0Ki--TjC-o26iaptfP0YgccBCei6jiyS8aRjWtKxNm-5ZwYGi87qXmg' },
    { id: '2', icon: 'https://play-lh.googleusercontent.com/Gcbg63BqBVa-0Ki--TjC-o26iaptfP0YgccBCei6jiyS8aRjWtKxNm-5ZwYGi87qXmg' },
    { id: '3', icon: 'https://play-lh.googleusercontent.com/Gcbg63BqBVa-0Ki--TjC-o26iaptfP0YgccBCei6jiyS8aRjWtKxNm-5ZwYGi87qXmg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Grid size={24} color="#000" />
        <Text style={styles.headerTitle}>A.i</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <CategoryRow title="ChatBots" items={chatbots} />
        <CategoryRow title="Generative" items={generative} />
        <CategoryRow title="Productivity" items={productivity} />
        <CategoryRow title="Assistant" items={assistant} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 8,
    gap: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  categorySection: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
  iconRow: {
    paddingLeft: 16,
  },
  iconButton: {
    marginRight: 12,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navItem: {
    alignItems: 'center',
  },
});
