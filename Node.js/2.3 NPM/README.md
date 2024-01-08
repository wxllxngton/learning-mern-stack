### NPM Basics

#### Initialize npm in directory

```bash
npm init
```

#### Install package(s)

```bash
npm i sillyname <pkg2> <pkg3> <pkg4>
```

#### How package.json looks afterwards

```json
{
    "name": "learning-npm",
    "version": "1.0.0",
    "description": "Learning about npm",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "John Ombuya",
    "license": "ISC",
    "dependencies": {
        "sillyname": "^0.1.0"
    }
}
```

#### To use ECMAScript Modules importatiion

```json
    ...
    "main": "index.js",
    // Add this line
    "type": "module",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ...
```

#### Importing the module

```javascript
import generateName from 'sillyname';
```
