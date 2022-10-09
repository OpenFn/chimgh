//get('https://www.sicappgh.org/api/get-dhis-data');
get(
  "https://dhims.chimgh.org/dhims/api/dataValueSets",
  {
    query: {
      dataSet: "bYPgExf4Gqo", 
      orgUnit: "smsOYQsusrD",
      period:  "202206",
      children: "true"
    },
    headers: {"content-type": "application/json"}
  },
  state => {
     console.log("-------------debugging-------------");
     console.table(state.data.dataValues);
     console.log("-------------debugging-------------");
     return state;
  }
);