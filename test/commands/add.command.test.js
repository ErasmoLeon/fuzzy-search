import * as fileSystem from '../../src/fileSystem.util';
import add from '../../src/commands/add.command';
import getFirstJsonParam from '../../src/getFirstParamCommandUtil';

jest.mock('../../src/getFirstParamCommandUtil', () => jest.fn().mockImplementation(() => () => 'Silo Rojirri'));

fileSystem.readFileData = jest.fn(() => [
  { name: 'Diegos Antonio Perez' },
  { name: 'Antonio Perez Rulo' },
]);

fileSystem.writeFileData = jest.fn();

test('should add a new name objet', () => {
  add();
  expect(getFirstJsonParam).toBeCalled();
  expect(fileSystem.writeFileData).toBeCalledWith([
    { name: 'Diegos Antonio Perez' },
    { name: 'Antonio Perez Rulo' },
    { name: 'Silo Rojirri' },
  ]);
});
