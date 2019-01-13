import fs from 'fs';
import { readFileData } from '../src/fileSystem.util';

test('should get empty array if file not exists', () => {
  const existsSyncSpy = jest.spyOn(fs, 'existsSync');
  existsSyncSpy.mockImplementation(() => true);
  const readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
  readFileSyncSpy.mockImplementation(() => '[1]');

  readFileData();

  expect(readFileData()).toEqual([1]);
  expect(existsSyncSpy).toBeCalledWith('dataFile.txt');
  expect(readFileSyncSpy).toBeCalledWith('dataFile.txt');
});


test('should get empty array if file not exists', () => {
  const existsSyncSpy = jest.spyOn(fs, 'existsSync');
  existsSyncSpy.mockImplementation(() => false);

  expect(readFileData()).toEqual([]);
  expect(existsSyncSpy).toBeCalledWith('dataFile.txt');
});
