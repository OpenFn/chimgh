alterState(state => {
  const { dateOfReporting, value } = state.summary;

  const dataValue = {
    completeDate: `${dateOfReporting.substring(
      0,
      4
    )}-${dateOfReporting.substring(5, 7)}-${dateOfReporting.substring(8, 10)}`,
    dataSet: 'DtF8c3KI77R',
    period: `${dateOfReporting.substring(0, 4)}${dateOfReporting.substring(
      5,
      7
    )}${dateOfReporting.substring(8, 10)}`,
    orgUnit: 'E4h5WBOg71F',
    children = true
    dataValues: [
      {
        dataElement: 'CnPsS2xE8UN',
        value,
      },
    ],
  };

  console.log('Importing data on DHIS2...');
  console.log(dataValue);

  return dataValueSet(dataValue)(state);
});