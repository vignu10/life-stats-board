// StatDetailScreen.jsx - Detailed stats page for Health category

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StatDetailScreen = () => {
  return (
    <LinearGradient 
      colors={['#1a1a2e', '#16213e']} 
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.systemText}>HEALTH STATS</Text>
          <Text style={styles.headerTitle}>LEVEL 31</Text>
        </View>
        
        {/* XP Progress */}
        <View style={styles.xpContainer}>
          <Text style={styles.xpText}>XP: 8,240 / 10,000</Text>
          <View style={styles.xpBarBackground}>
            <View style={[styles.xpBarFill, { width: '82%' }]} />
          </View>
        </View>
        
        {/* Main Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>BASE ATTRIBUTES</Text>
          
          <View style={styles.statRow}>
            <View style={styles.statItem}>
              <Text style={styles.statName}>STAMINA</Text>
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>74</Text>
                <Text style={styles.statBonus}>+3</Text>
              </View>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statName}>STRENGTH</Text>
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>68</Text>
                <Text style={styles.statBonus}>+2</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.statRow}>
            <View style={styles.statItem}>
              <Text style={styles.statName}>AGILITY</Text>
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>81</Text>
                <Text style={styles.statBonus}>+5</Text>
              </View>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statName}>ENDURANCE</Text>
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>63</Text>
                <Text style={styles.statBonus}>+1</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Activity Stats */}
        <View style={styles.activityContainer}>
          <Text style={styles.sectionTitle}>ACTIVITY LOG</Text>
          
          <View style={styles.activityItem}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityName}>Daily Steps</Text>
              <Text style={styles.activityTimeframe}>TODAY</Text>
            </View>
            <View style={styles.activityStats}>
              <Text style={styles.activityValue}>8,734</Text>
              <Text style={styles.activityTarget}>/ 10,000 target</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '87%' }]} />
            </View>
          </View>
          
          <View style={styles.activityItem}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityName}>Workout Minutes</Text>
              <Text style={styles.activityTimeframe}>THIS WEEK</Text>
            </View>
            <View style={styles.activityStats}>
              <Text style={styles.activityValue}>143</Text>
              <Text style={styles.activityTarget}>/ 150 target</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '95%' }]} />
            </View>
          </View>
          
          <View style={styles.activityItem}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityName}>Sleep Hours</Text>
              <Text style={styles.activityTimeframe}>7-DAY AVG</Text>
            </View>
            <View style={styles.activityStats}>
              <Text style={styles.activityValue}>6.8</Text>
              <Text style={styles.activityTarget}>/ 8 target</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '85%' }]} />
            </View>
          </View>
          
          <View style={styles.activityItem}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityName}>Water Intake</Text>
              <Text style={styles.activityTimeframe}>TODAY</Text>
            </View>
            <View style={styles.activityStats}>
              <Text style={styles.activityValue}>1.6L</Text>
              <Text style={styles.activityTarget}>/ 2.5L target</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '64%' }]} />
            </View>
          </View>
          
          <View style={styles.activityItem}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityName}>Meditation</Text>
              <Text style={styles.activityTimeframe}>THIS MONTH</Text>
            </View>
            <View style={styles.activityStats}>
              <Text style={styles.activityValue}>280</Text>
              <Text style={styles.activityTarget}>minutes</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '70%' }]} />
            </View>
          </View>
        </View>
        
        {/* Skills Section */}
        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>HEALTH SKILLS</Text>
          
          <View style={styles.skillItem}>
            <View style={styles.skillInfo}>
              <Text style={styles.skillName}>Morning Runner</Text>
              <Text style={styles.skillLevel}>Lv. 4</Text>
            </View>
            <Text style={styles.skillDesc}>+15% XP from morning workouts</Text>
          </View>
          
          <View style={styles.skillItem}>
            <View style={styles.skillInfo}>
              <Text style={styles.skillName}>Recovery Master</Text>
              <Text style={styles.skillLevel}>Lv. 2</Text>
            </View>
            <Text style={styles.skillDesc}>+10% faster recovery between workouts</Text>
          </View>
          
          <View style={styles.skillItem}>
            <View style={styles.skillInfo}>
              <Text style={styles.skillName}>Sleep Optimizer</Text>
              <Text style={styles.skillLevel}>Lv. 3</Text>
            </View>
            <Text style={styles.skillDesc}>+5 Health XP per night of 8+ hours sleep</Text>
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
    marginBottom: 15,
    marginTop: 10,
  },
  systemText: {
    color: '#ff5252',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  xpContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  xpText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  xpBarBackground: {
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: 10,
    backgroundColor: '#ff5252',
    borderRadius: 5,
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
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: 15,
    width: '48%',
    alignItems: 'center',
  },
  statName: {
    color: '#ddd',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  statValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statBonus: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  activityContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  activityItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  activityName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  activityTimeframe: {
    color: '#bbb',
    fontSize: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  activityStats: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  activityValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  activityTarget: {
    color: '#bbb',
    fontSize: 14,
    marginLeft: 5,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: 6,
    backgroundColor: '#ff5252',
    borderRadius: 3,
  },
  skillsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  skillItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  skillInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  skillName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  skillLevel: {
    color: '#ff5252',
    fontSize: 14,
    fontWeight: 'bold',
  },
  skillDesc: {
    color: '#bbb',
    fontSize: 13,
  },
});

export default StatDetailScreen;
