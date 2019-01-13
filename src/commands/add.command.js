import { compose } from 'ramda';
import { readFileData, writeFileData } from '../fileSystem.util';
import getFirstJsonParam from '../getFirstParamCommandUtil';

const writeNewName = (name) => {
  const dataFile = readFileData();
  dataFile.push({ name });
  writeFileData(dataFile);
};

export default () => compose(
  writeNewName,
  getFirstJsonParam(3),
)();
