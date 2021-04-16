get(
  '/applicationList/date/2021-03-27',
  // '/applicationList/date/2021-03-07',
  {
    headers: {
      "content-type": "application/json",
      "Authorization": state.configuration.password
    },
  },
  state => { // a callback for viewing or modifying the response before we load to dhis2?
    const applicants = state.data.data;
    console.log('VacinneUPP responded with:', applicants.length, 'items.');
    return { ...state, applicants, data: [], references: [] };
  }
);
