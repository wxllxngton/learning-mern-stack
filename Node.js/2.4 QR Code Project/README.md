### QR Code Project

#### Initialize npm

```bash
npm init
```

#### Installing qr-image and inquirer

```bash
npm i inquirer qr-image
```

#### Changing module type to ECMA Scripts

```json
    "main": "index.js",
    // Add this line
    "type": "module",
```

#### Importing the modules

```javascript
import inquirer from 'inquirer';
import qr from 'qr-image';
```

#### Running script

```bash
node index.js
```
