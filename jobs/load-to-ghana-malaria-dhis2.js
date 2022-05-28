each(
  '$.data[*]',
  create('dataValueSets', {
    dataSet: 'DtF8c3KI77R',
    completeDate: state => {
      const { period } = state.data;
      const year = period.substring(0, 4);
      const month = period.slice(-2);
      const lastDayOfMonth = new Date(year, month, 0);
      return lastDayOfMonth.toISOString();
    },
    period: dataValue('period'),
    orgUnit: dataValue('fac_metadata'),
    dataValues: [
      dv('boG7vI44cg6', dataValue('number_of_children_not_given_smc_medicine_12_to_59_months_male')),
      dv('DgofSPFzUIi', dataValue('number_of_adrs_reported_by_volunteers_female')),
      dv('o3Muv5wiR51', dataValue('twelve_to_59_months_male')),
      dv('s5D3zpoFFCb', dataValue('number_of_children_given_smc_medicine_3_to_11_months_female')),
      dv('zZQTMXDfCxC', dataValue('TOTAL_NUMBER_OF_BLISTERS_RECEIVED_3_to_11_MOTNHS')),
      dv('XaOfCVgktZF', dataValue('number_of_children_given_smc_medicine_3_to_11_months_male')),
      dv('H3wlEVccmQY', dataValue('number_of_adrs_reported_by_volunteers_male')),
      dv('SJhM0dnoH5L', dataValue('number_of_children_not_given_smc_medicine_12_to_59_months_female')),
      dv('sHQTg4kDQU2', dataValue('NUMBER_OF_BLISTERS_WASTED_CHILDREN_12_TO_59_MONTHS')),
      dv('Uf7gdUYC1Ya', dataValue('number_of_children_not_given_smc_medicine_3_to_11_months_female')),
      dv('fUjDn631Ej8', dataValue('TOTAL_NUMBER_OF_BLISTERS_RECEIVED_12_to_59_MOTNHS')),
      dv('SJXPwlNh73N', dataValue('NUMBER_OF_BLISTERS_WASTED_CHILDREN_3_TO_11_MONTHS')),
      dv('nhWsdEsFVgG', dataValue('number_of_blisters_given_out_12_to_59_months')),
      dv('PYkrk0rd4kP', dataValue('twelve_to_59_months_female')),
      dv('mKjXJHSqaCi', dataValue('number_of_children_not_given_smc_medicine_3_to_11_months_male')),
      dv('mbw3kTNJcyr', dataValue('three_to_11_months_female')),
      // dv('icGSlG7m8v2', dataValue('')), // no apparent source data for "SMC_Target Pop 3-59 months"
      dv('XDd2Z4rkCxj', dataValue('number_of_children_given_smc_medicine_12_to_59_months_male')),
      // dv('cqvjZK88xhW', dataValue('')), // no apparent source data for "SMC_Total Population"
      dv('dCYR9d2eAJd', dataValue('number_of_children_given_smc_medicine_12_to_59_months_female')),
      dv('ojuXUxUCvZk', dataValue('NUMBER_OF_BLISTERS_GIVEN_TO_CHILDREN_3_TO_11_MONTHS')),
      dv('dqeWPFiJZtY', dataValue('number_of_households_visited')),
      dv('ctEkqKT0uEA', dataValue('three_to_11_months_male')),
    ],
  })
);
