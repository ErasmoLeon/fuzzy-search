import fs from 'fs';

const FILE_NAME = 'dataFile.txt';

export const readFileData = () => {
  if (fs.existsSync(FILE_NAME)) {
    return JSON.parse(fs.readFileSync(FILE_NAME));
  }
  return [];
};

export const writeFileData = data => fs.writeFileSync(FILE_NAME, JSON.stringify(data));
