# Temas Fundamentales

## Manejo de Librerías Escritas en JavaScript en TypeScript

- Uso de Mapas basados en Mapbox (el API es similar a la de Google Maps)
- Marcadores
- Eventos
- FlyTo
- Coordenadas geográficas
- Componentes para re-utilización de mapas
- Mantener objetos de forma persistente
- @types
- Zoom
- Range
- Y más

Aunque el uso de mapas no es algo directamente relacionado con Angular, ya que todo se realiza mediante un objeto de una librería de terceros, en este caso Mapbox, es interesante comprender cómo funcionan esas librerías dentro de Angular y cómo poder tener control de los objetos como si fueran propiedades de nuestras clases.

## Automatización de las Variables de Entorno (env) para Usar `process.env` en Angular

1. Instalar `dotenv`:
```sh
npm install dotenv --save
```

2. Crear la carpeta scripts con un archivo set-env.js con el siguiente contenido:
```js
require('dotenv').config();
const { writeFileSync, mkdirSync } = require('fs');

const targetPath = './src/environments/environment.ts';

const envFileContent = `
  export const environment = {
    mapbox_key: "${process.env['MAPBOX_KEY']}",
  }
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
```
3. Modificar `package.json`:
- Añadir Script 
```sh
"envs": "node ./scripts/set-env.js"
```
Modificar el start y el build
```sh
"start": "npm run envs && ng serve",
"build": "npm run envs && ng build",
```

4. Instalar `mapbox`:
```sh
npm install --save mapbox-gl
npm install --save-dev @types/mapbox-gl
```
## StandAloneComponents
Componentes que se pueden "sostener" por si mismos, es decir, componentes que tienen todo lo necesario para sobrevivir por si mismos (un componente que es como un módulo)

- ¿Qué son?
- ¿Para qué sirven?
- ¿Cómo usarlos?
- ¿Cómo cargarlos de forma perezosa?
- ¿Cómo conectarlos entre sí?
- ¿Cómo integrarlos en módulos y componentes tradicionales?
