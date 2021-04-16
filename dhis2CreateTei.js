each(
  '$.applicants[*]',
  state => {
    console.log('Applicant found with ref:', state.data.reference);
    console.log(state.data);
    return state;
  }
  // TODO: decide how to create dhis2 tei...
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
