#!/usr/bin/node
/**
 * Script that handles endpoints "/", "/about" and "/contact".
 */

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    /* Print headers */
    // console.log(req.rawHeaders);
    res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send(
        '<h1>About Me</h1>\
        <a href="https://johnombuya.pythonanywhere.com" target="_blank">Portfolio website</a>'
    );
});

app.get('/contact', (req, res) => {
    res.send('<a href="mailto:jjngugi27@gmail.com">Email me</a>');
});

/* Using an anonymous function here */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
