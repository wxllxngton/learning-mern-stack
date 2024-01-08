### HTTP Requests

#### Initialize npm without questions

```bash
npm init -y
```

#### Installing Express.js

```bash
npm i express
```

### Installing nodemon

```bash
# nodemon will be installed globally to your system path.
npm install -g nodemon # or using yarn: yarn global add nodemon
And
```

#### Changing module type to ECMA Scripts

```json
    "main": "index.js",
    // Add this line
    "type": "module",
```

#### Importing the modules

```javascript
import express from 'express';
```

#### Running script

```bash
node index.js

# To run the app again upon detecting changes.
nodemon index.js
```
