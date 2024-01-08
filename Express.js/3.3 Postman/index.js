#!/usr/bin/node
/**
 * Script that we'll test POSTMAN with
 */

import express, { response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.post('/register', (req, res) => {
    res.sendStatus(201);
});

app.post('/user/john', (req, res) => {
    res.sendStatus(200);
});

app.put('/user/john', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/john', (req, res) => {
    res.sendStatus(200);
});

app.delete('/user/john', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Serving running on port ${port}`);
});
