// StatusScreen.jsx - Main status window inspired by Solo Leveling

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StatusScreen = () => {
  return (
    <LinearGradient 
      colors={['#1a1a2e', '#16213e']} 
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Status Window Header */}
        <View style={styles.header}>
          <Text style={styles.systemText}>SYSTEM</Text>
          <Text style={styles.headerTitle}>STATUS WINDOW</Text>
        </View>
        
        {/* Character Level & XP */}
        <View style={styles.levelContainer}>
          <View style={styles.levelBox}>
            <Text style={styles.levelLabel}>LEVEL</Text>
            <Text style={styles.levelNumber}>27</Text>
          </View>
          <View style={styles.xpContainer}>
            <Text style={styles.xpText}>XP: 14,580 / 15,000</Text>
            <View style={styles.xpBarBackground}>
              <View style={[styles.xpBarFill, { width: '97%' }]} />
            </View>
          </View>
        </View>

        {/* Main Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>STATS</Text>
          
          <TouchableOpacity style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: '#ff5252' }]}>
              <Text style={styles.statIconText}>💪</Text>
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statName}>HEALTH</Text>
              <Text style={styles.statValue}>Lv. 31</Text>
            </View>
            <View style={styles.statProgress}>
              <View style={[styles.statProgressFill, { width: '78%', backgroundColor: '#ff5252' }]} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: '#ffb142' }]}>
              <Text style={styles.statIconText}>💰</Text>
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statName}>WEALTH</Text>
              <Text style={styles.statValue}>Lv. 22</Text>
            </View>
            <View style={styles.statProgress}>
              <View style={[styles.statProgressFill, { width: '65%', backgroundColor: '#ffb142' }]} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: '#3498db' }]}>
              <Text style={styles.statIconText}>📚</Text>
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statName}>KNOWLEDGE</Text>
              <Text style={styles.statValue}>Lv. 35</Text>
            </View>
            <View style={styles.statProgress}>
              <View style={[styles.statProgressFill, { width: '88%', backgroundColor: '#3498db' }]} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: '#9b59b6' }]}>
              <Text style={styles.statIconText}>🌎</Text>
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statName}>TRAVEL</Text>
              <Text style={styles.statValue}>Lv. 19</Text>
            </View>
            <View style={styles.statProgress}>
              <View style={[styles.statProgressFill, { width: '45%', backgroundColor: '#9b59b6' }]} />
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Daily Quests */}
        <View style={styles.questsContainer}>
          <Text style={styles.sectionTitle}>DAILY QUESTS</Text>
          
          <View style={styles.questItem}>
            <View style={styles.questStatus} />
            <View style={styles.questInfo}>
              <Text style={styles.questTitle}>Complete 10,000 steps</Text>
              <Text style={styles.questProgress}>8,734 / 10,000</Text>
            </View>
            <Text style={styles.questReward}>+50 XP</Text>
          </View>
          
          <View style={styles.questItem}>
            <View style={[styles.questStatus, styles.questCompleted]} />
            <View style={styles.questInfo}>
              <Text style={styles.questTitle}>Save $30 today</Text>
              <Text style={styles.questProgress}>COMPLETED</Text>
            </View>
            <Text style={styles.questReward}>+35 XP</Text>
          </View>
          
          <View style={styles.questItem}>
            <View style={styles.questStatus} />
            <View style={styles.questInfo}>
              <Text style={styles.questTitle}>Read for 30 minutes</Text>
              <Text style={styles.questProgress}>15 / 30 mins</Text>
            </View>
            <Text style={styles.questReward}>+25 XP</Text>
          </View>
        </View>
        
        {/* Recent Achievements */}
        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>RECENT ACHIEVEMENTS</Text>
          
          <View style={styles.achievementsList}>
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Text style={styles.achievementIcon}>🏆</Text>
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>Budget Master</Text>
                <Text style={styles.achievementDesc}>Saved target amount for 3 consecutive months</Text>
              </View>
            </View>
            
            <View style={styles.achievementItem}>
              <View style={styles.achievementBadge}>
                <Text style={styles.achievementIcon}>🏃</Text>
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>Consistent Athlete</Text>
                <Text style={styles.achievementDesc}>Completed 20 workouts in one month</Text>
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
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  systemText: {
    color: '#4dabf7',
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
  levelContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  levelBox: {
    backgroundColor: '#4dabf7',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
  },
  levelLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  levelNumber: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  xpContainer: {
    flex: 1,
    marginLeft: 15,
  },
  xpText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  xpBarBackground: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: 8,
    backgroundColor: '#4dabf7',
    borderRadius: 4,
  },
  statsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    letterSpacing: 1,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: 10,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIconText: {
    fontSize: 18,
  },
  statInfo: {
    marginLeft: 15,
    flex: 1,
  },
  statName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statValue: {
    color: '#ddd',
    fontSize: 16,
  },
  statProgress: {
    height: 5,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 5,
  },
  statProgressFill: {
    height: 5,
    borderRadius: 3,
  },
  questsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  questItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: 12,
  },
  questStatus: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#555',
    marginRight: 10,
  },
  questCompleted: {
    backgroundColor: '#4CAF50',
  },
  questInfo: {
    flex: 1,
  },
  questTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  questProgress: {
    color: '#bbb',
    fontSize: 12,
  },
  questReward: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  achievementsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  achievementsList: {
    gap: 10,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  achievementBadge: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#ffd700',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  achievementIcon: {
    fontSize: 22,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  achievementDesc: {
    color: '#bbb',
    fontSize: 12,
  },
});

export default StatusScreen;
