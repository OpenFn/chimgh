alterState(state => {
   console.log('Passed from the previous job:', JSON.stringify(state.data, null, 2));
   return state;
});

createTEI({
   orgUnit: 'TSyzvBiovKh',
   trackedEntityType: 'nEenWmSyUEp',
   attributes: [
      {
         attribute: 'lZGmxYbs97q',
         value: valUpsertTEI,
      },
      {
         attribute: 'w75KJ2mc4zz',
         value: 'Gigiwe',
      },
   ],
   enrollments: [
      {
         orgUnit: 'TSyzvBiovKh',
         program: 'fDd25txQckK',
         programState: 'lST1OZ5BDJ2',
         enrollmentDate: '2021-01-04',
         incidentDate: '2021-01-04',
      },
   ],
});
