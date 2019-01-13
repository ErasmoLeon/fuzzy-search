import * as fileSystem from '../../src/fileSystem.util';
import getFirstJsonParam from '../../src/getFirstParamCommandUtil';
import fuzzySearch, { levenshteinDistance } from '../../src/commands/fuzzySearch.command';

jest.mock('../../src/getFirstParamCommandUtil', () => jest.fn().mockImplementation(() => () => 'Silo Rujes'));

test('should search ussing fuzzy search', () => {
  console.log = jest.fn();
  fileSystem.readFileData = jest.fn(() => [
    { name: 'Sico Rojelios Perez' },
    { name: 'Diegos Antonio Perez' },
    { name: 'Antonio Perez Rulo' },
  ]);

  fuzzySearch();

  expect(getFirstJsonParam).toBeCalled();
  expect(console.log).toBeCalledWith({
    name: 'Sico Rojelios Perez',
  });
});

test('should display "Sin coincidencias" for empty records', () => {
  console.log = jest.fn();
  fileSystem.readFileData = jest.fn(() => [
  ]);

  fuzzySearch();

  expect(getFirstJsonParam).toBeCalled();
  expect(console.log).toBeCalledWith('Sin coincidencias');
});

test('should validate strings input length', () => {
  expect(levenshteinDistance('abc', '')).toEqual(3);
  expect(levenshteinDistance('', 'abcd')).toEqual(4);
});
