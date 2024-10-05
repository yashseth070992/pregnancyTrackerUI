import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BabyGrowthCard from './BabyGrowthCard';
import MotherSymptoms from './MotherSymptoms';
import ThingsToDo from './ThingsToDo';
import Celebration from './Celebration';
import DailyReads from './DailyReads';
import RecommendationList from './RecommendationList';
import { globalStyles } from '../../styles/globalStyles';

const Dashboard = ({ currentWeek }) => {
  const data = [{ key: 'recommendationList' }]; // Placeholder data for FlatList

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      ListHeaderComponent={(
        <>
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
        </>
      )}
      renderItem={() => <RecommendationList />}
      ListFooterComponent={<DailyReads week={currentWeek} />}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
  },
});

export default Dashboard;