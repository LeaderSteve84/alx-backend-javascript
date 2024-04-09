export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];

  for (let value of newArray) {
    if (value) {
      value = appendString + value;
    }
  }

  return newArray;
}
