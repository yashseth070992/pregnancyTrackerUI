import React from 'react';
import { thingsToDoData } from './data/thingsToDoData';
import ListItems from '../../components/ListItems'; // Use the new ListItems component

const ThingsToDo = ({ week }) => {
  const thingsToDo = thingsToDoData[week] || thingsToDoData[4];
  return <ListItems data={thingsToDo} heading="Things To Do" />;
};

export default ThingsToDo;
