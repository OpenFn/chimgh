each(
  dataPath('data[*]'),
  update('trackedEntityInstances', dataValue('tracked_entity_instance'), {
    orgUnit: dataValue('organisation_unit_UID'),
    trackedEntityType: dataValue('tei_Type'),
    attributes: [
      { attribute: 'TfdH5KvFmMy', value: dataValue('fIrst_Name') },
      { attribute: 'Fw63dm0dm9D', value: dataValue('community') },
      // {
      //   attribute: 'aJJvi3jiLZr',
      //   value: dataValue('cOVISHILED_Unique_System_Identifier_EPI'),
      // },
      { attribute: 'aW66s2QSosT', value: dataValue('last_Name') },
      // { attribute: '?', value: dataValue('cOVAX__Vaccine_Type') },
      // {
      //   attribute: '?',
      //   value: dataValue('cOVAX_Suggested_date_for_next_dose'),
      // },
      { attribute: 'KVcSC9ERqZD', value: dataValue('service_Number') },
      { attribute: 'LY2bDXpNvS7', value: dataValue('occupation') },
      // { attribute: '?', value: dataValue('organisation_unit_name') },
      // { attribute: '?', value: dataValue('district') },
      // {
      //   attribute: '?',
      //   value: dataValue('category_of_group_for_vaccination'),
      // },
      // { attribute: '?', value: dataValue('type_of_National_ID_presented') },
      // { attribute: '?', value: dataValue('estimated_Age') },
      // { attribute: '?', value: dataValue('traceable_Address') },
      // {
      //   attribute: '?',
      //   value: dataValue('source_of_information_on_COVID19_vaccination'),
      // },
      // { attribute: '?', value: dataValue('c0VAXBatchNumber') },
      { attribute: 'Ewi7FUfcHAD', value: dataValue('national_ID') },
      // { attribute: '?', value: dataValue('cOVAX__Manufacturer') },
      // { attribute: '?', value: dataValue('cOVAX__Dose_Number') },
      // { attribute: '?', value: dataValue('event_date') },
      { attribute: 'aYptYXqMGsc', value: dataValue('middle_Name') },
      // { attribute: '?', value: dataValue('organisation_unit_UID') },
      // { attribute: '?', value: dataValue('tei_Type') },
      // { attribute: '?', value: dataValue('vaccination_Card_Number') },
      // { attribute: '?', value: dataValue('region') },
      // { attribute: '?', value: dataValue('cOVAX__AEFIs_present') },
      // { attribute: '?', value: dataValue('event') },
      // { attribute: '?', value: dataValue('mobile_Phone_Number') },
      // { attribute: '?', value: dataValue('area_URBAN_RURAL') },
      // { attribute: '?', value: dataValue('cOVAX__Dose_Expiry_Date') },
      { attribute: 'oindugucx72', value: dataValue('sex') },
      // { attribute: '?', value: dataValue('subDistrict') },
      // { attribute: '?', value: dataValue('incident_date') },
      // { attribute: '?', value: dataValue('cOVAX__Total_doses') },
      // { attribute: '?', value: dataValue('program_stage') },
      // { attribute: '?', value: dataValue('enrollment_date') },
      // { attribute: '?', value: dataValue('date_of_Birth') },
      // { attribute: '?', value: dataValue('security_Services') },
      // { attribute: '?', value: dataValue('program_instance') },
      // { attribute: '?', value: dataValue('type_of_vaccination_site') },
      // ...and more!!!
    ],
  })
);
