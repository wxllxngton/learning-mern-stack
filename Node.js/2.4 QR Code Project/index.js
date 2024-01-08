#!/usr/bin/node
/**
 * Script uses input url to build a QR code.
 */

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        /* Pass your questions in here */

        /* 1. Use the inquirer npm package to get user input. */
        { message: 'Type in your URL: ', name: 'URL' },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!

        /* 2. Use the qr-image npm package to turn the user entered URL into a QR code image. */

        const url = answers.URL;

        var qr_png = qr.image(url, { type: 'png' });

        qr_png.pipe(fs.createWriteStream(`qr_image.png`));

        /* 3. Create a txt file to save the user input using the native fs node module. */
        fs.writeFile(
            'link.txt',
            url,
            {
                encoding: 'utf-8',
                mode: 0o666,
                flag: 'w',
            },
            (err) => {
                if (err) throw err;
            }
        );
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            throw error;
        } else {
            // Something else went wrong
            throw error;
        }
    });
