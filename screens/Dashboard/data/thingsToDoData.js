export const thingsToDoData = {
  4: [
    'Take prenatal vitamins',
    'Start tracking your pregnancy weeks',
    'Schedule your first prenatal appointment',
  ],
  5: ['Stay hydrated', 'Eat a balanced diet', 'Avoid caffeine'],
  // ... other weeks
};

function checkPathTypes(pathTypes,hostset) {
  hostset && hostset.hostMembersList && hostset.hostMembersList.map((hosts)=>{
    const pathType =hosts && hosts.hostPaths && hosts.hostPaths.length >0 && hosts.pathTypes[0].pathType
    pathTypes[pathType] =pathTypes[pathType] +1 ||1;
    return pathTypes
  })
}
