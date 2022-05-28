 get(
  'https://www.sicappgh.org/api/get-dhis-data',
  // '/applicationList/date/2021-03-07',
  {
    headers: {
      'content-type': 'application/json',
     // Authorization: state.configuration.password,
    },
  },
state => {
     const applicants = state.data.data;
    console.log();
    return state;
  }
);