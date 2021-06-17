// Your job goes here.
upsertTEI('lZGmxYbs97q', {
  orgUnit: 'TSyzvBiovKh',
  trackedEntityType: 'nEenWmSyUEp',
  attributes: [
    {
      attribute: 'lZGmxYbs97q',
      value: '77790012',
    },
    {
      attribute: 'w75KJ2mc4zz',
      value: 'Gigiwe',
    },
    {
      attribute: 'zDhUuAYrxNC',
      value: 'Mwanza',
    },
  ],
});
upsert(
   'trackedEntityInstances',
   {
      attributeId: 'lZGmxYbs97q',
         attributeValue: state =>
            state.data.attributes.find(obj => obj.attribute === 'lZGmxYbs97q')
            .value,
   },
   state.data,
   { ou: 'TSyzvBiovKh' }
);
