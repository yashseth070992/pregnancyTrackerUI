import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import BabyGrowthCard from './BabyGrowthCard';
import MotherSymptoms from './MotherSymptoms';
import ThingsToDo from './ThingsToDo';
import Celebration from './Celebration';
import DailyReads from './DailyReads';
import RecommendationList from './RecommendationList';
import { globalStyles } from '../../styles/globalStyles';

const Dashboard = ({ currentWeek }) => {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.heading}>
          Week {currentWeek} of Pregnancy
        </Text>
        <Text style={globalStyles.paragraph}>
          You’re rocking it! Keep going strong.
        </Text>
      </View>

      <BabyGrowthCard week={currentWeek} />

      <MotherSymptoms week={currentWeek} />

      <ThingsToDo week={currentWeek} />
      <Celebration week={currentWeek} />
      <RecommendationList week={currentWeek} />
      <DailyReads week={currentWeek} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
  },
});

export default Dashboard;
