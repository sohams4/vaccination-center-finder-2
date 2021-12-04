export const makeData = (data) => {
  return data.map((row, index) => {
    return {
      index: index + 1,
      name: row.name,
      dose: `Dose 1: ${row.available_capacity_dose1}, Dose 2: ${row.available_capacity_dose2}`,
      slots: row.slots.join(', '),
      fees: row.fee_type === 'Free' ? 'Free' : row.fee,
      address: row.address,
    };
  });
};
