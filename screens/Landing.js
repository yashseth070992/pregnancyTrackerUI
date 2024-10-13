import React from 'react';
import { FlatList } from 'react-native';
import BabyGrowthCard from './Dashboard/BabyGrowthCard';
import MotherSymptoms from './Dashboard/MotherSymptoms';
import ThingsToDo from './Dashboard/ThingsToDo';
import Celebration from './Dashboard/Celebration';
import RecommendationList from './Dashboard/RecommendationList';
import HeaderComponent from './Dashboard/HeaderComponent';
import { globalStyles } from '../styles/globalStyles';

const Landing = ({ currentWeek, onNextWeek, onPreviousWeek }) => {
  const data = [{ key: 'recommendationList' }]; // Placeholder data for FlatList

  return (
    <>
      <HeaderComponent
        currentWeek={currentWeek}
        dateRange="Oct 04 - Oct 10"
        onNextWeek={onNextWeek}
        onPreviousWeek={onPreviousWeek}
      />
      <FlatList
        data={data}
        style={globalStyles.container}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={
          <>
            <BabyGrowthCard week={currentWeek} />
            <MotherSymptoms week={currentWeek} />
            <ThingsToDo week={currentWeek} />
            <Celebration week={currentWeek} />
          </>
        }
        renderItem={() => <RecommendationList />}
      />
    </>
  );
};

export default Landing;
