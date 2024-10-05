import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BabyGrowthCard from './BabyGrowthCard';
import MotherSymptoms from './MotherSymptoms';
import ThingsToDo from './ThingsToDo';
import Celebration from './Celebration';
import DailyReads from './DailyReads';
import RecommendationList from './RecommendationList';
import HeaderComponent from './HeaderComponent'; // Import the new header component
import { globalStyles } from '../../styles/globalStyles';

const Dashboard = ({ currentWeek }) => {
  const data = [{ key: 'recommendationList' }]; // Placeholder data for FlatList

  return (
    <FlatList
      data={data}
      style={globalStyles.container}
      keyExtractor={(item) => item.key}
      ListHeaderComponent={
        <>
          <HeaderComponent
            currentWeek={currentWeek}
            dateRange="Oct 04 - Oct 10"
            message="Cozy times ahead 😊"
          />

          <BabyGrowthCard week={currentWeek} />
          <MotherSymptoms week={currentWeek} />
          <ThingsToDo week={currentWeek} />
          <Celebration week={currentWeek} />
        </>
      }
      renderItem={() => <RecommendationList />}
      ListFooterComponent={<DailyReads week={currentWeek} />}
    />
  );
};

export default Dashboard;
