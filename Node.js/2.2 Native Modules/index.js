#!/usr/bin/node
/**
 * Script writes content into a file and
 * reads from it.
 */

const fs = require('fs');
const path = './2.2 Native Modules/message.txt';

fs.writeFile(
    path,
    'Hello from John',
    {
        encoding: 'utf-8',
        flag: 'w',
        mode: 00666,
    },
    (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }
);

fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
