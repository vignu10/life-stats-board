// AchievementsScreen.tsx - Achievements and Titles Screen

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from '../navigation/AppNavigator';

type AchievementsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Achievements'>,
  NativeStackScreenProps<RootStackParamList>
>;

const AchievementsScreen: React.FC<AchievementsScreenProps> = ({ navigation }) => {
  // Get window dimensions for responsive layouts
  const { width } = useWindowDimensions();
  return (
    <LinearGradient 
      colors={['#1a1a2e', '#16213e']} 
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.systemText}>SYSTEM</Text>
          <Text style={styles.headerTitle}>ACHIEVEMENTS</Text>
        </View>
        
        {/* Character Titles */}
        <View style={styles.titlesContainer}>
          <Text style={styles.sectionTitle}>YOUR TITLES</Text>
          
          <View style={styles.titlesList}>
            <TouchableOpacity style={[styles.titleItem, styles.activeTitleItem]}>
              <Text style={styles.titleName}>Budget Master</Text>
              <Text style={styles.titleStatus}>ACTIVE</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.titleItem}>
              <Text style={styles.titleName}>Knowledge Seeker</Text>
              <Text style={styles.titleDesc}>+5% XP from reading activities</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.titleItem}>
              <Text style={styles.titleName}>Consistent Athlete</Text>
              <Text style={styles.titleDesc}>+10% Stamina in Health stats</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.titleItem}>
              <Text style={styles.titleName}>Early Riser</Text>
              <Text style={styles.titleDesc}>+15% efficiency for tasks before 9AM</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Achievement Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>CATEGORIES</Text>
          
          <View style={styles.categoriesList}>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={[styles.categoryIcon, { backgroundColor: '#ff5252' }]}>
                <Text style={styles.categoryIconText}>ud83dudcaa</Text>
              </View>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>HEALTH</Text>
                <Text style={styles.categoryProgress}>12/20 Achievements</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categoryItem}>
              <View style={[styles.categoryIcon, { backgroundColor: '#ffb142' }]}>
                <Text style={styles.categoryIconText}>ud83dudcb0</Text>
              </View>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>WEALTH</Text>
                <Text style={styles.categoryProgress}>8/15 Achievements</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categoryItem}>
              <View style={[styles.categoryIcon, { backgroundColor: '#3498db' }]}>
                <Text style={styles.categoryIconText}>ud83dudcda</Text>
              </View>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>KNOWLEDGE</Text>
                <Text style={styles.categoryProgress}>14/18 Achievements</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categoryItem}>
              <View style={[styles.categoryIcon, { backgroundColor: '#9b59b6' }]}>
                <Text style={styles.categoryIconText}>ud83cudf0e</Text>
              </View>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>TRAVEL</Text>
                <Text style={styles.categoryProgress}>6/12 Achievements</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Recent Achievements */}
        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>RECENT ACHIEVEMENTS</Text>
          
          <View style={styles.achievementsList}>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Text style={styles.achievementIcon}>ud83cudfc6</Text>
              </View>
              <View style={styles.achievementInfo}>
                <View style={styles.achievementHeader}>
                  <Text style={styles.achievementTitle}>Budget Master</Text>
                  <Text style={styles.achievementDate}>APR 23</Text>
                </View>
                <Text style={styles.achievementDesc}>Saved target amount for 3 consecutive months</Text>
                <Text style={styles.achievementReward}>Reward: "Budget Master" title, +200 XP</Text>
              </View>
            </View>
            
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Text style={styles.achievementIcon}>ud83cudfc3</Text>
              </View>
              <View style={styles.achievementInfo}>
                <View style={styles.achievementHeader}>
                  <Text style={styles.achievementTitle}>Consistent Athlete</Text>
                  <Text style={styles.achievementDate}>APR 15</Text>
                </View>
                <Text style={styles.achievementDesc}>Completed 20 workouts in one month</Text>
                <Text style={styles.achievementReward}>Reward: "Consistent Athlete" title, +150 XP</Text>
              </View>
            </View>
            
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Text style={styles.achievementIcon}>ud83dudcda</Text>
              </View>
              <View style={styles.achievementInfo}>
                <View style={styles.achievementHeader}>
                  <Text style={styles.achievementTitle}>Bookworm</Text>
                  <Text style={styles.achievementDate}>MAR 30</Text>
                </View>
                <Text style={styles.achievementDesc}>Read 5 books in a single month</Text>
                <Text style={styles.achievementReward}>Reward: +100 XP, +5 Intelligence</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Locked Achievements */}
        <View style={styles.lockedContainer}>
          <Text style={styles.sectionTitle}>UPCOMING ACHIEVEMENTS</Text>
          
          <View style={styles.achievementsList}>
            <View style={styles.lockedItem}>
              <View style={styles.lockedBadge}>
                <Text style={styles.lockedIcon}>?</Text>
              </View>
              <View style={styles.lockedInfo}>
                <Text style={styles.lockedTitle}>Global Explorer</Text>
                <Text style={styles.lockedDesc}>Visit 5 different countries</Text>
                <Text style={styles.lockedProgress}>Progress: 3/5 countries</Text>
              </View>
            </View>
            
            <View style={styles.lockedItem}>
              <View style={styles.lockedBadge}>
                <Text style={styles.lockedIcon}>?</Text>
              </View>
              <View style={styles.lockedInfo}>
                <Text style={styles.lockedTitle}>Financial Freedom</Text>
                <Text style={styles.lockedDesc}>Reach savings goal for 6 consecutive months</Text>
                <Text style={styles.lockedProgress}>Progress: 4/6 months</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  scrollView: {
    flex: 1,
    padding: '4%', // Percentage-based padding for better responsiveness
  },
  header: {
    alignItems: 'center',
    marginBottom: '6%',
    marginTop: '3%',
  },
  systemText: {
    color: '#ffd700',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '4%',
    letterSpacing: 1,
  },
  titlesContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
  },
  titlesList: {
    gap: '2%',
  },
  titleItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: '4%',
    marginBottom: '3%',
  },
  activeTitleItem: {
    borderColor: '#ffd700',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
  titleName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleStatus: {
    color: '#ffd700',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  titleDesc: {
    color: '#bbb',
    fontSize: 13,
    marginTop: '2%',
  },
  categoriesContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
  },
  categoriesList: {
    gap: '3%',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: '3%',
    marginBottom: '3%',
    flexWrap: 'wrap', // Allow wrapping on very small screens
  },
  categoryIcon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '4%',
  },
  categoryIconText: {
    fontSize: 20,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryProgress: {
    color: '#bbb',
    fontSize: 13,
    marginTop: '1%',
  },
  achievementsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
  },
  achievementsList: {
    gap: '3%',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: '4%',
    marginBottom: '3%',
  },
  achievementBadge: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#ffd700',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '4%',
  },
  achievementIcon: {
    fontSize: 22,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
    flexWrap: 'wrap', // Allow wrapping on small screens
  },
  achievementTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: '2%',
  },
  achievementDate: {
    color: '#bbb',
    fontSize: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: '2%',
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  achievementDesc: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: '2%',
  },
  achievementReward: {
    color: '#ffd700',
    fontSize: 12,
  },
  lockedContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
  },
  lockedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: '4%',
    opacity: 0.8,
    marginBottom: '3%',
  },
  lockedBadge: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '4%',
  },
  lockedIcon: {
    color: '#aaa',
    fontSize: 22,
    fontWeight: 'bold',
  },
  lockedInfo: {
    flex: 1,
  },
  lockedTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lockedDesc: {
    color: '#bbb',
    fontSize: 14,
    marginVertical: '1%',
  },
  lockedProgress: {
    color: '#4dabf7',
    fontSize: 12,
  },
});

export default AchievementsScreen;
