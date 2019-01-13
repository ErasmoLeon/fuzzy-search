import { sortBy, prop, compose } from 'ramda';
import { readFileData } from '../fileSystem.util';

const sortByName = sortBy(prop('name'));

export default () => compose(
  console.log,
  sortByName,
  readFileData,
)();
