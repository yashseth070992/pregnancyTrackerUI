import React from 'react';
import { symptomsData } from './data/symptomsData';
import ListItems from '../../components/ListItems'; // Use the new ListItems component

const MotherSymptoms = ({ week }) => {
  const symptoms = symptomsData[week] || symptomsData[4];
  return <ListItems data={symptoms} heading="Common Symptoms" />;
};

export default MotherSymptoms;
