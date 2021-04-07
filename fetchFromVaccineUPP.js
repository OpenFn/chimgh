get(
  'applicationList', // the endpoint
  {
    headers: {"content-type": "application/json"}, // some special parameters?
    // authentication: {username: "user", password: "pass"}
  },
  state => { // a callback for viewing or modifying the response before we load to dhis2?
    console.log('VacinneUPP responded with:', JSON.stringify(state.data, null, 2));
    return state;
  }
);
