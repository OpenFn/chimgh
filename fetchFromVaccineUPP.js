get(
  '/applicationList/region/central',
  // '/applicationList/date/2021-03-07',
  {
    headers: {
      "content-type": "application/json",
      "Authorization": state.configuration.password
    },
  },
  state => { // a callback for viewing or modifying the response before we load to dhis2?
    console.log('VacinneUPP responded with:', state.data, 'items.');
    return state;
  }
);
