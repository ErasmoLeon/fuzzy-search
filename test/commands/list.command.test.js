import * as fileSystem from '../../src/fileSystem.util';
import list from '../../src/commands/list.command';

test('should list names ordered', () => {
  console.log = jest.fn();
  fileSystem.readFileData = jest.fn(() => [
    { name: 'Sico Rojelios Perez' },
    { name: 'Diegos Antonio Perez' },
    { name: 'Antonio Perez Rulo' },
  ]);

  list();

  expect(console.log).toBeCalledWith([
    { name: 'Antonio Perez Rulo' },
    { name: 'Diegos Antonio Perez' },
    { name: 'Sico Rojelios Perez' },
  ]);
});
