function cleanSet(set, startString) {
  const filteredValues = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  });
  return filteredValues.join('-');
}

export default cleanSet;
