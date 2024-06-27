Este es un breve listado de los temas fundamentales:

Manejo de librerías escritas en JavaScript en TypeScript

Uso de Mapas basados en Mapbox (el API es similar a la de Google Maps)

Marcadores

Eventos

FlyTo

Coordenadas geográficas

Componentes para re-utilización de mapas

Mantener objetos de forma persistente

@types

Zoom

Range

Y más

Aunque el uso de mapas no es algo directamente relacionado con Angular, ya que todo se realiza mediante un objeto de una librería de terceros, en este caso Mapbox, es interesante comprender cómo funcionan esas librerías dentro de Angular y cómo poder tener control de los objetos como si fueran propiedades de nuestras clases.


Automatización de las env (para poder usar process.env en angular)
1. npm install dotenv --save
2. crear carpeta scripts con archivo set-env con lo siguiente

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

3. ir al package.json
4. Añadimos el script "envs": "node ./scripts/set-env.js",
5. Ejecutamos con npm run envs
6. modificamos los scripts para que setee el env y levante el proyecto con npm run start

"start": "npm run envs && ng serve",
    "build": "npm run envs & ng build",


instalcion de mapbox con npm install --save mapbox-gl
npm i --save-dev @types/mapbox-gl
