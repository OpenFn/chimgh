each(
  dataPath("data['*']"),
  update(
    'trackedEntityInstances',
    dataValue('tracked_entity_instance'),
    {
      orgUnit: dataValue('organisation_unit_ID'),
      trackedEntityType: dataValue('tei_Type'),
      attributes: [
        { attribute: 'TfdH5KvFmMy', value: dataValue('fIrst_Name') },
        { attribute: 'Fw63dm0dm9D', value: dataValue('community') },
        {
          attribute: 'aJJvi3jiLZr',
          value: dataValue('cOVISHILED_Unique_System_Identifier_EPI'),
        },
        { attribute: 'aW66s2QSosT', value: dataValue('last_Name') },
        { attribute: 'KVcSC9ERqZD', value: dataValue('service_Number') },
        { attribute: 'LY2bDXpNvS7', value: dataValue('occupation') },
        // { attribute: ?, value: dataValue(district) },
        {
          attribute: 'Ma2rjtbd1uA',
          value: dataValue('category_of_group_for_vaccination'),
        },
        {
          attribute: 'IAVTRgjua0t',
          value: dataValue('type_of_National_ID_presented'),
        },
        { attribute: 'Dc49UKxCyKw', value: dataValue('estimated_Age') },
        { attribute: 'VCtm2pySeEV', value: dataValue('traceable_Address') },
        {
          attribute: 'lveGxTaTfzn',
          value: dataValue('source_of_information_on_COVID19_vaccination'),
        },
        { attribute: 'Ewi7FUfcHAD', value: dataValue('national_ID') },
        { attribute: 'aYptYXqMGsc', value: dataValue('middle_Name') },
        {
          attribute: 'dQSkYCrTvR3',
          value: dataValue('vaccination_Card_Number'),
        },
        // { attribute: ?, value: dataValue(region) },
        { attribute: 'ciCR6BBvIT4', value: dataValue('mobile_Phone_Number') },
        { attribute: 'YCqoNJZKvAG', value: dataValue('area_URBAN_RURAL') },
        { attribute: 'oindugucx72', value: dataValue('sex') },
        // { attribute: ?, value: dataValue(subDistrict) },
        { attribute: 'mAWcalQYYyk', value: dataValue('date_of_Birth') },
        { attribute: 'z9HLHqvi1Ri', value: dataValue('security_Services') },
        {
          attribute: 'TEc5BcYJm5Q',
          value: dataValue('type_of_vaccination_site'),
        },
      ],
      enrollments: [
        {
          orgUnit: dataValue('organisation_unit_ID'),
          program: dataValue('program'),
          enrollmentDate: dataValue('enrollment_date'),
          incidentDate: dataValue('incident_date'),
          events: [
            {
              program: dataValue('program'),
              event: dataValue('event'),
              orgUnit: dataValue('organisation_unit_ID'),
              eventDate: dataValue('event_date'),
              // status: COMPLETED,
              // storedBy: admin,
              dataValues: [
                {
                  dataElement: 'bbnyNYD1wgS',
                  value: dataValue('cOVAX__Vaccine_Type'),
                },
                {
                  dataElement: 'Yp1F4txx8tm',
                  value: dataValue('c0VAXBatchNumber'),
                },
                {
                  dataElement: 'rpkH9ZPGJcX',
                  value: dataValue('cOVAX__Manufacturer'),
                },
                {
                  dataElement: 'LUIsbsm3okG',
                  value: dataValue('cOVAX__Dose_Number'),
                },
              ],
            },
          ],
        },
      ],
    },
    { ignoreEmptyCollection: true }
  )
);
