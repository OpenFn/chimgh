each(
  dataPath('data[*]'),
  update('trackedEntityInstances', dataValue('tracked_entity_instance'), {
    orgUnit: dataValue('organisation_unit_UID'),
    // trackedEntityType: 'nEenWmSyUEp', // does not exits
    trackedEntityType: 'MCPQUTHX1Ze', // type "person"
    attributes: [
      {
        attribute: 'TfdH5KvFmMy', // first name
        value: dataValue('fIrst_Name'),
      },
      // ...and more!!!
    ],
  })
);
