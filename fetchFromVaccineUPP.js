get(
  '/applicationList/region/central',
  {
    headers: {
      "content-type": "application/json",
      "Authorization": state.configuration.password
    },
  },
  state => { // a callback for viewing or modifying the response before we load to dhis2?
    console.log('VacinneUPP responded with:', state.data.length, 'items.');
    return state;
  }
);
