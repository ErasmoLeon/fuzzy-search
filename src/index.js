import fuzzySearch from './commands/fuzzySearch.command';
import add from './commands/add.command';
import list from './commands/list.command';

const getCommandName = () => process.argv[2];

const commandName = getCommandName(process.argv);

const commands = {
  'fuzzy-search': fuzzySearch,
  add,
  list,
};

if (!commands[commandName]) {
  console.log('Invalid command');
}

commands[commandName]();
