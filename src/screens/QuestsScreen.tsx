// QuestsScreen.tsx - Daily Quests and Challenges Screen

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from '../navigation/AppNavigator';

type QuestsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Quests'>,
  NativeStackScreenProps<RootStackParamList>
>;

const QuestsScreen: React.FC<QuestsScreenProps> = ({ navigation }) => {
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
          <Text style={styles.headerTitle}>DAILY QUESTS</Text>
        </View>
        
        {/* Quest Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>DAILY QUESTS</Text>
            <Text style={styles.summaryValue}>4/7</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>XP TODAY</Text>
            <Text style={styles.summaryValue}>145</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>STREAK</Text>
            <Text style={styles.summaryValue}>8 DAYS</Text>
          </View>
        </View>
        
        {/* Daily Quests */}
        <View style={styles.questsContainer}>
          <Text style={styles.sectionTitle}>TODAY'S QUESTS</Text>
          
          <View style={styles.questItem}>
            <View style={[styles.questStatus, styles.questCompleted]} />
            <View style={styles.questContent}>
              <View style={styles.questHeader}>
                <Text style={styles.questTitle}>Complete 10,000 steps</Text>
                <Text style={styles.questCategory}>HEALTH</Text>
              </View>
              <Text style={styles.questProgress}>COMPLETED</Text>
              <View style={styles.questReward}>
                <Text style={styles.questRewardText}>+50 XP</Text>
                <Text style={styles.questBonusText}>+10 Health</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.questItem}>
            <View style={[styles.questStatus, styles.questCompleted]} />
            <View style={styles.questContent}>
              <View style={styles.questHeader}>
                <Text style={styles.questTitle}>Save $30 today</Text>
                <Text style={styles.questCategory}>WEALTH</Text>
              </View>
              <Text style={styles.questProgress}>COMPLETED</Text>
              <View style={styles.questReward}>
                <Text style={styles.questRewardText}>+35 XP</Text>
                <Text style={styles.questBonusText}>+5 Finance</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.questItem}>
            <View style={styles.questStatus} />
            <View style={styles.questContent}>
              <View style={styles.questHeader}>
                <Text style={styles.questTitle}>Read for 30 minutes</Text>
                <Text style={styles.questCategory}>KNOWLEDGE</Text>
              </View>
              <Text style={styles.questProgress}>15 / 30 mins</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '50%' }]} />
              </View>
              <View style={styles.questReward}>
                <Text style={styles.questRewardText}>+25 XP</Text>
                <Text style={styles.questBonusText}>+5 Intelligence</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.questItem}>
            <View style={styles.questStatus} />
            <View style={styles.questContent}>
              <View style={styles.questHeader}>
                <Text style={styles.questTitle}>Track expenses</Text>
                <Text style={styles.questCategory}>WEALTH</Text>
              </View>
              <Text style={styles.questProgress}>0 / 3 entries</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '0%' }]} />
              </View>
              <View style={styles.questReward}>
                <Text style={styles.questRewardText}>+20 XP</Text>
                <Text style={styles.questBonusText}>+3 Finance</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Weekly Challenges */}
        <View style={styles.challengesContainer}>
          <Text style={styles.sectionTitle}>WEEKLY CHALLENGES</Text>
          
          <View style={styles.challengeItem}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeTitle}>Fitness Warrior</Text>
              <Text style={styles.challengeTimeLeft}>3 DAYS LEFT</Text>
            </View>
            <Text style={styles.challengeDesc}>Complete 5 workouts this week</Text>
            <Text style={styles.challengeProgress}>3/5 completed</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '60%' }]} />
            </View>
            <View style={styles.challengeReward}>
              <Text style={styles.challengeRewardText}>Reward: +100 XP, +20 Health, "Fitness Warrior" badge</Text>
            </View>
          </View>
          
          <View style={styles.challengeItem}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeTitle}>Money Master</Text>
              <Text style={styles.challengeTimeLeft}>3 DAYS LEFT</Text>
            </View>
            <Text style={styles.challengeDesc}>Stay under budget in all categories</Text>
            <Text style={styles.challengeProgress}>4/7 days on budget</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '57%' }]} />
            </View>
            <View style={styles.challengeReward}>
              <Text style={styles.challengeRewardText}>Reward: +150 XP, +15 Finance, +5% interest bonus</Text>
            </View>
          </View>
        </View>
        
        {/* Monthly Goals */}
        <View style={styles.goalsContainer}>
          <Text style={styles.sectionTitle}>MONTHLY GOALS</Text>
          
          <View style={styles.goalItem}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalTitle}>Knowledge Expansion</Text>
              <Text style={styles.goalDifficulty}>HARD</Text>
            </View>
            <Text style={styles.goalDesc}>Read 4 books this month</Text>
            <View style={styles.goalFooter}>
              <Text style={styles.goalProgress}>2/4 completed</Text>
              <Text style={styles.goalReward}>+300 XP</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '50%' }]} />
            </View>
          </View>
          
          <View style={styles.goalItem}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalTitle}>Savings Milestone</Text>
              <Text style={styles.goalDifficulty}>MEDIUM</Text>
            </View>
            <Text style={styles.goalDesc}>Reach $1,000 in savings</Text>
            <View style={styles.goalFooter}>
              <Text style={styles.goalProgress}>$850/$1,000</Text>
              <Text style={styles.goalReward}>+250 XP</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '85%' }]} />
            </View>
          </View>
        </View>
        
        {/* Create Custom Quest Button */}
        <TouchableOpacity style={styles.createQuestButton}>
          <Text style={styles.createQuestText}>CREATE CUSTOM QUEST</Text>
        </TouchableOpacity>
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
    color: '#4CAF50',
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
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
    flexWrap: 'wrap', // Allow wrapping on very small screens
  },
  summaryItem: {
    alignItems: 'center',
    minWidth: '25%', // Ensure items don't get too small
    marginVertical: '2%',
  },
  summaryLabel: {
    color: '#bbb',
    fontSize: 12,
    marginBottom: '5%',
  },
  summaryValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '4%',
    letterSpacing: 1,
  },
  questsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
  },
  questItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: '4%',
    marginBottom: '3%',
    alignItems: 'flex-start',
  },
  questStatus: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#555',
    marginRight: '4%',
    marginTop: '1%',
  },
  questCompleted: {
    backgroundColor: '#4CAF50',
  },
  questContent: {
    flex: 1,
  },
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
    flexWrap: 'wrap', // Allow wrapping on small screens
  },
  questTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginRight: '2%',
    marginBottom: '1%',
  },
  questCategory: {
    color: '#bbb',
    fontSize: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: '2%',
    paddingVertical: 2,
    borderRadius: 4,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  questProgress: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: '2%',
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: '2%',
  },
  progressFill: {
    height: 6,
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  questReward: {
    flexDirection: 'row',
    gap: '3%',
    flexWrap: 'wrap', // Allow wrapping on small screens
  },
  questRewardText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
  questBonusText: {
    color: '#4dabf7',
    fontSize: 14,
  },
  challengesContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
  },
  challengeItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: '4%',
    marginBottom: '3%',
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
    flexWrap: 'wrap', // Allow wrapping on small screens
  },
  challengeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: '2%',
  },
  challengeTimeLeft: {
    color: '#ff5252',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  challengeDesc: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: '2%',
  },
  challengeProgress: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: '2%',
  },
  challengeReward: {
    marginTop: '2%',
  },
  challengeRewardText: {
    color: '#ffd700',
    fontSize: 12,
  },
  goalsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '5%',
  },
  goalItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: '4%',
    marginBottom: '3%',
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
    flexWrap: 'wrap', // Allow wrapping on small screens
  },
  goalTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: '2%',
  },
  goalDifficulty: {
    color: '#ff5252',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 82, 82, 0.2)',
    paddingHorizontal: '2%',
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  goalDesc: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: '3%',
  },
  goalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
    flexWrap: 'wrap', // Allow wrapping on small screens
  },
  goalProgress: {
    color: '#bbb',
    fontSize: 14,
    flex: 1,
    marginRight: '2%',
  },
  goalReward: {
    color: '#ffd700',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  createQuestButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: '4%',
    alignItems: 'center',
    marginBottom: '8%',
  },
  createQuestText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default QuestsScreen;
