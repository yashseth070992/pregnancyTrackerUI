import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper'; // Use Card from react-native-paper
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

const HeaderComponent = ({
  currentWeek,
  message,
  dateRange,
  onPreviousWeek,
  onNextWeek,
}) => {
  return (
    <View style={globalStyles.headerContainer}>
      {/* Left Icon for navigating to previous week */}
      <TouchableOpacity onPress={onPreviousWeek} style={globalStyles.iconLeft}>
        <Icon
          name="arrow-back"
          size={30}
          color={globalStyles.iconColor.color}
        />
      </TouchableOpacity>

      {/* Middle content with centered text */}
      <View style={globalStyles.contentContainer}>
        <Text style={globalStyles.pregnancyText}>
          {currentWeek} weeks pregnant
        </Text>
        <Text style={globalStyles.dateRange}>{dateRange}</Text>
        <Text style={globalStyles.messageText}>{message}</Text>
        <Text style={globalStyles.subText}>132 days left</Text>
      </View>

      {/* Right Icon for navigating to next week */}
      <TouchableOpacity onPress={onNextWeek} style={globalStyles.iconRight}>
        <Icon
          name="arrow-forward"
          size={30}
          color={globalStyles.iconColor.color}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
