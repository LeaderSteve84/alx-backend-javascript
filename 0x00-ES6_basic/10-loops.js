export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];

  for (const key in array) {
    if (Object.prototype.hasOwnProperty.call(newArray, key)) {
      newArray[key] = appendString + newArray[key];
    }
  }

  return newArray;
}
