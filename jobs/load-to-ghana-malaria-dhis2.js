// map data from SIC to DHIS2
fn(state => {
  const { data } = state;
  const dataValueSets = data.map(r => {
    const year = r.period.substring(0, 4);
    const month = r.period.slice(-2);
    const lastDayOfMonth = new Date(year, month, 0);

    return {
      dataSet: 'DtF8c3KI77R',
      completeDate: lastDayOfMonth.toISOString().substring(0, 10),
      period: r.period,
      orgUnit:'ggEw5nfApv3',
      //orgUnit: r.orgUnit,
      dataValues: [
        //number_of_children_not_given_smc_medicine_12_to_59_months_male
        dv('boG7vI44cg6', r.boG7vI44cg6),
        //number_of_adrs_reported_by_volunteers_female
        dv('DgofSPFzUIi', r.DgofSPFzUIi),
        //twelve_to_59_months_male
        dv('o3Muv5wiR51', r.o3Muv5wiR51),
        //number_of_children_given_smc_medicine_3_to_11_months_female
        dv('s5D3zpoFFCb', r.s5D3zpoFFCb),
        //TOTAL_NUMBER_OF_BLISTERS_RECEIVED_3_to_11_MOTNHS
        dv('zZQTMXDfCxC', r.zZQTMXDfCxC),
        //number_of_children_given_smc_medicine_3_to_11_months_male
        dv('XaOfCVgktZF', r.XaOfCVgktZF),
        //number_of_adrs_reported_by_volunteers_male
        dv('H3wlEVccmQY', r.H3wlEVccmQY),
        //number_of_children_not_given_smc_medicine_12_to_59_months_female
        dv('SJhM0dnoH5L', r.SJhM0dnoH5L),
        //NUMBER_OF_BLISTERS_WASTED_CHILDREN_12_TO_59_MONTHS
        dv('sHQTg4kDQU2', r.sHQTg4kDQU2),
        //number_of_children_not_given_smc_medicine_3_to_11_months_female
        dv('Uf7gdUYC1Ya', r.Uf7gdUYC1Ya),
        //TOTAL_NUMBER_OF_BLISTERS_RECEIVED_12_to_59_MOTNHS
        dv('fUjDn631Ej8', r.fUjDn631Ej8),
        //NUMBER_OF_BLISTERS_WASTED_CHILDREN_3_TO_11_MONTHS
        dv('SJXPwlNh73N', r.SJXPwlNh73N),
        //number_of_blisters_given_out_12_to_59_months
        dv('nhWsdEsFVgG', r.nhWsdEsFVgG),
        //twelve_to_59_months_female
        dv('PYkrk0rd4kP', r.PYkrk0rd4kP),
        //number_of_children_not_given_smc_medicine_3_to_11_months_male
        dv('mKjXJHSqaCi', r.mKjXJHSqaCi),
        //three_to_11_months_female
        dv('mbw3kTNJcyr', r.mbw3kTNJcyr),
        // dv('icGSlG7m8v2', r.XXX, // no apparent source data for "SMC_Target Pop 3-59 months"
        //number_of_children_given_smc_medicine_12_to_59_months_male
        dv('XDd2Z4rkCxj', r.XDd2Z4rkCxj),
        // no apparent source data for "SMC_Total Population"
        dv('cqvjZK88xhW', r.cqvjZK88xhW),
        //number_of_children_given_smc_medicine_12_to_59_months_female
        dv('dCYR9d2eAJd', r.dCYR9d2eAJd),
        //NUMBER_OF_BLISTERS_GIVEN_TO_CHILDREN_3_TO_11_MONTHS
        dv('ojuXUxUCvZk', r.ojuXUxUCvZk),
        //number_of_households_visited
        dv('dqeWPFiJZtY', r.dqeWPFiJZtY),
       // three_to_11_months_male
        dv('ctEkqKT0uEA', r.ctEkqKT0uEA),
       //Number of Children given SMC Medicine 60-62 months-Male
       dv('xXVixJFcbKU', r.xXVixJFcbKU),
       //Number of Children given SMC Medicine 60-62 months-Female
       dv('KwM9dP0jEZ8', r.KwM9dP0jEZ8),
       //Number of Children Not given SMC Medicine 3-11 months-Male
       dv('mKjXJHSqaCi', r.mKjXJHSqaCi),
       //Number of Children Not given SMC Medicine 60-62 months-Male
       dv('X4G2JXNwqeE', r.X4G2JXNwqeE),
       //Number of Children Not given SMC Medicine 60-62 months-female
       dv('KC92yuvtb55', r.KC92yuvtb55),
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
