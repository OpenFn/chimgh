// map data from SIC to DHIS2
fn(state => {
  const { data } = state;
  const dataValueSets = data.map(r => {
    const year = r.period.substring(0, 4);
    const month = r.period.slice(-2);
    const lastDayOfMonth = new Date(year, month, 0);

    return {
      dataSet: 'DtF8c3KI77R',
      completeDate: lastDayOfMonth.toISOString(),
      period: r.period,
      orgUnit: r.fac_metadata,
      dataValues: [
        dv('boG7vI44cg6', r.number_of_children_not_given_smc_medicine_12_to_59_months_male),
        dv('DgofSPFzUIi', r.number_of_adrs_reported_by_volunteers_female),
        dv('o3Muv5wiR51', r.twelve_to_59_months_male),
        dv('s5D3zpoFFCb', r.number_of_children_given_smc_medicine_3_to_11_months_female),
        dv('zZQTMXDfCxC', r.TOTAL_NUMBER_OF_BLISTERS_RECEIVED_3_to_11_MOTNHS),
        dv('XaOfCVgktZF', r.number_of_children_given_smc_medicine_3_to_11_months_male),
        dv('H3wlEVccmQY', r.number_of_adrs_reported_by_volunteers_male),
        dv('SJhM0dnoH5L', r.number_of_children_not_given_smc_medicine_12_to_59_months_female),
        dv('sHQTg4kDQU2', r.NUMBER_OF_BLISTERS_WASTED_CHILDREN_12_TO_59_MONTHS),
        dv('Uf7gdUYC1Ya', r.number_of_children_not_given_smc_medicine_3_to_11_months_female),
        dv('fUjDn631Ej8', r.TOTAL_NUMBER_OF_BLISTERS_RECEIVED_12_to_59_MOTNHS),
        dv('SJXPwlNh73N', r.NUMBER_OF_BLISTERS_WASTED_CHILDREN_3_TO_11_MONTHS),
        dv('nhWsdEsFVgG', r.number_of_blisters_given_out_12_to_59_months),
        dv('PYkrk0rd4kP', r.twelve_to_59_months_female),
        dv('mKjXJHSqaCi', r.number_of_children_not_given_smc_medicine_3_to_11_months_male),
        dv('mbw3kTNJcyr', r.three_to_11_months_female),
        // dv('icGSlG7m8v2', r.XXX, // no apparent source data for "SMC_Target Pop 3-59 months"
        dv('XDd2Z4rkCxj', r.number_of_children_given_smc_medicine_12_to_59_months_male),
        // dv('cqvjZK88xhW', r.XXX), // no apparent source data for "SMC_Total Population"
        dv('dCYR9d2eAJd', r.number_of_children_given_smc_medicine_12_to_59_months_female),
        dv('ojuXUxUCvZk', r.NUMBER_OF_BLISTERS_GIVEN_TO_CHILDREN_3_TO_11_MONTHS),
        dv('dqeWPFiJZtY', r.number_of_households_visited),
        dv('ctEkqKT0uEA', r.three_to_11_months_male),
      ],
    };
  });

  return { ...state, dataValueSets };
});

// log mapped dhis2 data
fn(state => {
  console.log(JSON.stringify(state.dataValueSets, null, 2));
  return state;
});

// send data to dhis2
each(
  '$.dataValueSets[*]',
  create('dataValueSets', state => state.data)
);
