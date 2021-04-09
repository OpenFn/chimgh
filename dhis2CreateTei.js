alterState(state => {
   console.log('Data from the previous job:', state.applicants);
   return state;
});

each(
  dataPath('applicants'),
  state => {
    console.log(state.data.reference)
    return state;
  }
  // createTEI({
  //   orgUnit: 'TSyzvBiovKh',
  //   trackedEntityType: 'nEenWmSyUEp',
  //   attributes: [
  //     {
  //       attribute: 'lZGmxYbs97q',
  //       value: dataValue('applicantFirstName'),
  //     },
  //     {
  //       attribute: 'w75KJ2mc4zz',
  //       value: dataValue('applicantSurname'),
  //     },
  //   ],
  //   enrollments: [
  //     {
  //       orgUnit: 'TSyzvBiovKh',
  //       program: 'fDd25txQckK',
  //       programState: 'lST1OZ5BDJ2',
  //       // enrollmentDate: '2021-01-04',
  //       // incidentDate: '2021-01-04',
  //     },
  //   ],
  // })
);
