require('dotenv').config()
const {writeFileSync, mkdirSync} = require('fs');

const targetPath = './src/environments/environment.ts';

const envFileContent = `
  export const environment = {
    mapbox_key: "${process.env['MAPBOX_KEY']}",
  }
`;

mkdirSync('./src/environments', {recursive: true}) //recursive para que si ya existe, lo vamos a sobre escribir

writeFileSync(targetPath, envFileContent)
