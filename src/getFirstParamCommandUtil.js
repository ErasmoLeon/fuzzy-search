export default position => () => process.argv.slice(position).join().replace(/,|{|}|“|”/g, ' ').split(':')[1].trim();
