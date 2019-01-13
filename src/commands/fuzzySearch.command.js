import getFirstJsonParam from '../getFirstParamCommandUtil';
import { readFileData } from '../fileSystem.util';

export const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const row = [];
  for (let i = 0; i <= a.length; i += 1) {
    row[i] = i;
  }
  for (let i = 1; i <= b.length; i += 1) {
    let prev = i;
    for (let j = 1; j <= a.length; j += 1) {
      let val;
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        val = row[j - 1];
      } else {
        val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
      }
      row[j - 1] = prev;
      prev = val;
    }
    row[a.length] = prev;
  }
  return row[a.length];
};

export default () => {
  const nameToSearch = getFirstJsonParam(3)();
  let searchedName;
  let minDistance;
  const fileData = readFileData();
  if (fileData.length === 0) {
    return console.log('Sin coincidencias');
  }
  fileData.forEach((item) => {
    const distance = levenshteinDistance(nameToSearch, item.name);
    if (!minDistance || distance < minDistance) {
      minDistance = distance;
      searchedName = item.name;
    }
  });
  return console.log({ name: searchedName });
};
