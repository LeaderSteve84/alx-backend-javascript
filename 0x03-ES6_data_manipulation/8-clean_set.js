function cleanSet(set, startString) {
  const filteredValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const remainder = value.substring(startString.length);
      filteredValues.push(remainder);
    }
  }
  const resultString = filteredValues.join('-');

  return resultString;
}

export default cleanSet;
